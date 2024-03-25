
import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const config = {
  apiKey: "AIzaSyDTaj_Y2E6efWsiTxi9-GNBM_ZZgyydgqk",
  authDomain: "movie-tracker-3a46d.firebaseapp.com",
  projectId: "movie-tracker-3a46d",
  storageBucket: "movie-tracker-3a46d.appspot.com",
  messagingSenderId: "450920075713",
  appId: "1:450920075713:web:5d0d886add37057af6df40",
  measurementId: "G-36PJTE5CSQ"
}

let App = Firebase.initializeApp(config)
let Firestore = App.firestore()
Firestore.settings({ timestampsInSnapshots: true })

export default {
  set_data (subscriptions) {
    Firestore.collection('subscriptions').doc('shows').set({ subscriptions })
  },
  get_data () {
    return Firestore.collection('subscriptions').doc('shows').get()
  }
}

  