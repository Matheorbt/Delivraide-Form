import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDk5Nrtq7eQVW_Qu2undjDbM2rCP7m_DC8",
    authDomain: "deliv-app-2cd4e.firebaseapp.com",
    projectId: "deliv-app-2cd4e",
    storageBucket: "deliv-app-2cd4e.appspot.com",
    messagingSenderId: "140797735872",
    appId: "1:140797735872:web:206e031f4b1f63d3054e25",
    measurementId: "G-SP52P7KNMG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, first_name, last_name, city, cp, nb_tel, bool) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { nom } = first_name;
    const { prenom } = last_name;
    const { ville } = city;
    const { code_postal } = cp;
    const { tel } = nb_tel;
    const { is_new } = bool;

    try {
        await userRef.set({
        nom,
        prenom,
        ville,
        code_postal,
        tel,
        email,
        is_new,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
