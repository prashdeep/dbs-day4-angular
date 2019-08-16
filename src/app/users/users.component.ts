import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users=[
    {
      id:12,
      name:'Kiran'
    },
    {
      id:13,
      name:'Vinay'
    },
    {
      id:21,
      name:'Vikram'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
