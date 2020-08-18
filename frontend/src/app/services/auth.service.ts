import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = new BehaviorSubject<boolean>(this.Token.logged());

  authStatus = this.logged.asObservable();

  changeAuthStatus(value: boolean){
    this.logged.next(value);
  }

  constructor(private Token: TokenService) { }
}
