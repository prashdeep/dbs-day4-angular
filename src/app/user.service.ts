import { Injectable } from '@angular/core';
import { User } from './User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];
  constructor(private httpClient:HttpClient) { }

  addUser(user:User):void{
    this.users.push(user);
  }

  listUsers():User[]{
    return this.users;
  }

  findByUserId(id:number):User{
    return this.users.filter(user => user.id === id)[0];
  }

  deleteUser(id:number):void{
    this.users = this.users.filter(user => user.id !== id);
  }

}
