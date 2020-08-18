import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {
  constructor(
    private Router: Router
  ) { }
    public admin : boolean;

    setStaus(data){
       data['profile_id'] === 1? localStorage.setItem('really', 'n'):  localStorage.setItem('really', 'y');
    }

  redirect(profile){
    profile['profile_id'] === 1 ? this.Router.navigate(['/client',  { id: profile['id'] }]): this.Router.navigate(['/admin']);
    this.setStaus(profile)
  }

  isAdmin(data){
    const status = localStorage.getItem('really');
    return status === "y"?this.Router.navigate(['/admin']):this.Router.navigate(['/client',  { id: data }])
  }

  clean(){
    localStorage.removeItem('really');
  }
}
