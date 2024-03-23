// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTaj_Y2E6efWsiTxi9-GNBM_ZZgyydgqk",
  authDomain: "movie-tracker-3a46d.firebaseapp.com",
  projectId: "movie-tracker-3a46d",
  storageBucket: "movie-tracker-3a46d.appspot.com",
  messagingSenderId: "450920075713",
  appId: "1:450920075713:web:5d0d886add37057af6df40",
  measurementId: "G-36PJTE5CSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
    set_data (subscriptions) {
      Firestore.collection('subscriptions').doc('shows').set({ subscriptions })
    },
    get_data () {
      return Firestore.collection('subscriptions').doc('shows').get()
    }
  }