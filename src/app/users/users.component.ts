import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users:User[];
  private subscription:Subscription;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.subscription = this.userService
                              .listUsers()
                              .subscribe(response => {
                                this.users = response;
                              })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  findById(id):User{
    return this.userService.findByUserId(id);
  }

}
