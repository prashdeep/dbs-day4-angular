import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  log(username){
    console.log('came inside the log method....');
    console.log(username)
  }

  handleFormData(formData){
    console.log('handle form data');
    console.log(formData);
  }

}
