import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
public form = {
  email:null
}

public error: null;
public data: null;
  constructor(
    private Manager: ManagerService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Manager.sendResetpassword(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Manager.sendResetpassword(data);
    this.error = null;
    this.data = data.data;
  }

  handleError(error){
    this.error = error.error.error;
    this.data = null;
  }

}
