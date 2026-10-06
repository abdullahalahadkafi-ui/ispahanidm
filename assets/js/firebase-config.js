import { initializeApp } from "./firebase-app.js"; // লোকাল ঠিকানা
import { getFirestore } from "./firebase-firestore.js"; // লোকাল ঠিকানা

const firebaseConfig = {
    apiKey: "AIzaSyCC0xe4fdy7foxxS7iv_trGPjxl0UBk8pI",
    authDomain: "://firebaseapp.com",
    projectId: "ispahani-dakhil-madrasah",
    storageBucket: "ispahani-dakhil-madrasah.firebasestorage.app",
    messagingSenderId: "890308101744",
    appId: "1:890308101744:web:7a77e6aea71990ac0996b5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
