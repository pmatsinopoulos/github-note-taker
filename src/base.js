import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  authDomain: 'github-note-taker-c89f4.firebaseapp.com',
  databaseURL: 'https://github-note-taker-c89f4.firebaseio.com/',
  projectId: 'github-note-taker-c89f4'
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
