import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private apiurl = "http://localhost:8000/api"
  constructor(
    private http: HttpClient,
    ) { }

  login(data){
    return this.http.post(`${this.apiurl}/login`, data)
  }

  signup(data){
    return this.http.post(`${this.apiurl}/signup`, data)
  }

  register(data){
    return this.http.post(`${this.apiurl}/register`, data)
  }

  sendResetpassword(data){
    return this.http.post(`${this.apiurl}/resetpass`, data)
  }
  
  sendChangedpassword(data){
    return this.http.post(`${this.apiurl}/changepass`, data)
  }

  allUsers(){
    return this.http.get(`${this.apiurl}/users`)
  }
  

  thisUser(data){
    console.log(data);
    return this.http.get(`${this.apiurl}/user/${data['id']}`)
  }
  
  
}
