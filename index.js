import { initializeApp, cert } from "firebase-admin/app";
import{ getFirestore} from "firebase-admin/firestore" ;

//  import our credentials (serviceAccount)
import serviceAccount from './serviceAccount.js'

// connect to our firebase project using those credentials
initializeApp({
    credential: cert(serviceAccount)
});

// connect to our firestore database 
const db = getFirestore();

// define a new videpo game
const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: 1981,
}
// create a doc inside a collection 
db.collection('games').add(newGame)

    //  of okay, console.log the doc id 
    .then(doc=> console.log('Game created;',doc.id))
    //  if Not, console the error
    .catch(console.error)

//  get all games 
db.collection('games').get()
// reshape the collection
    .then(collection => {
        collection.docs.forEach(doc => {
            console.log(doc.id, doc.data())
        })
    })
    .catch(console.error)