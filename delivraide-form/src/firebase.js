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

export const createDelivery = async (id1, when1, whath1, from1, to1, adress_to1, tel_to1, name1, to_name1, name3, tel1, adress1, info_comp1, taken1, taken_by1, city1) => {
  
  const userRef = firestore.doc(`av_deliveries/` + Object.values(id1));

  const snapshot = await userRef.get();
  console.log(id1)

  if (!snapshot.exists) {
    const { id } = id1;
    console.log(id1)
    const { when } = when1;
    const { whath } = whath1;
    const { from } = from1;
    const { to } = to1;
    const { to_adress } = adress_to1;
    const { to_tel } = tel_to1;
    const { name } = name1;
    const { to_name } = to_name1;
    const { name2 } = name3;
    const { tel } = tel1;
    const { adress } = adress1;
    const { info_comp } = info_comp1;
    const { taken } = taken1;
    const { taken_by } = taken_by1;
    const { city } = city1;

    try {
        await userRef.set({
        id,
        when,
        whath,
        from,
        to,
        to_adress,
        to_tel,
        name,
        to_name,
        name2,
        tel,
        adress,
        info_comp,
        taken,
        taken_by,
        city,
      });
    } catch (error) {
      console.log('Error in adding delivery', error);
    }
  }
};

export const firestoreAutoId = () => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let autoId = ''

  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId
}

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
