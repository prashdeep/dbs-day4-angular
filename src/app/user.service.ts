import { Injectable } from '@angular/core';
import { User } from './User';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_API_URL ="https://jsonplaceholder.typicode.com/users";

  users:any[]=[];
  constructor(private httpClient:HttpClient) { }

  addUser(user:User):void{
    this.users.push(user);
  }

  listUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.USER_API_URL)   
  }

  findByUserId(id:number):Observable<User>{
    return this.httpClient.get<User>(this.USER_API_URL+"/"+id)
  }

  deleteUser(id:number):void{
    this.users = this.users.filter(user => user.id !== id);
  }

}
