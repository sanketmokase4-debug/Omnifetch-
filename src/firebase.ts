import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDocFromServer,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { UserHistoryRecord, GlobalStatsData } from './types';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test initial connection as required by skill
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

// Auth helper
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      // Sync user profile to Firestore
      const userRef = doc(db, 'users', result.user.uid);
      await setDoc(userRef, {
        uid: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName || 'Anonymous User',
        photoURL: result.user.photoURL || '',
        defaultQuality: '1080p',
        createdAt: new Date().toISOString()
      }, { merge: true });
    }
    return result.user;
  } catch (err) {
    console.error("Failed to sign in with Google:", err);
    throw err;
  }
}

export async function logOut() {
  return await firebaseSignOut(auth);
}

// Save user history item
export async function saveToUserHistory(userId: string, item: Omit<UserHistoryRecord, 'id' | 'userId'>) {
  const path = `users/${userId}/history`;
  try {
    const historyCol = collection(db, 'users', userId, 'history');
    const newDoc = await addDoc(historyCol, {
      ...item,
      userId,
      createdAt: new Date().toISOString()
    });
    return newDoc.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Fetch user history items
export async function getUserHistory(userId: string): Promise<UserHistoryRecord[]> {
  const path = `users/${userId}/history`;
  try {
    const historyCol = collection(db, 'users', userId, 'history');
    const q = query(historyCol, orderBy('createdAt', 'desc'), limit(50));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as UserHistoryRecord));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

// Delete user history item
export async function deleteUserHistoryItem(userId: string, historyId: string) {
  const path = `users/${userId}/history/${historyId}`;
  try {
    await deleteDoc(doc(db, 'users', userId, 'history', historyId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

// Submit DMCA report
export async function submitDmcaReport(data: {
  claimantName: string;
  claimantEmail: string;
  targetUrl: string;
  statement: string;
}) {
  const path = 'reports';
  try {
    const reportId = 'report_' + Date.now();
    await setDoc(doc(db, 'reports', reportId), {
      id: reportId,
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    return reportId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
