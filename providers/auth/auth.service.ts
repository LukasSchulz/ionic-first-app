import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  loginUser(email: string, password: string): Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<any>{
    return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase.database().ref('userProfile').child(newUser.user.uid).set({email:email});});
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

}


