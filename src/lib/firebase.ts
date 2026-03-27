import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDSqquXvgtdK10FpNZ1V8I2v4Toyk2RdNA',
  authDomain: 'sobooster-8e79e.firebaseapp.com',
  projectId: 'sobooster-8e79e',
  storageBucket: 'sobooster-8e79e.firebasestorage.app',
  messagingSenderId: '38899635372',
  appId: '1:38899635372:web:4b9d8dacbdbee7de5b7b09',
  measurementId: 'G-N0WN8XGXN4',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let analyticsPromise: ReturnType<typeof getAnalytics> | null = null;

export async function getFirebaseAnalytics() {
  if (typeof window === 'undefined') return null;
  if (analyticsPromise) return analyticsPromise;

  const supported = await isSupported();
  if (supported) {
    analyticsPromise = getAnalytics(app);
  }
  return analyticsPromise;
}

export { app };
