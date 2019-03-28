import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<firebase.User>;
  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userSubject = new BehaviorSubject<firebase.User>(null);
    this.user = this.afAuth.user;
  }

  public isAuthenticated() {
    return this.getUser();
  }

  public getUser() {
    try {
      return this.userSubject.value;
    } catch (error) {
      return undefined;
    }
  }

  public login(username: string, password: string) {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(username, password).then(z => {
        this.userSubject.next(z.user);
        return z.user;
      })
    );
  }

  public logout() {
    this.afAuth.auth.signOut().then(z => {
      this.userSubject.next(null);
    });
  }
}
