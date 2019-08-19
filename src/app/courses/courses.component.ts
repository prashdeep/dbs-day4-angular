import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  courses = [
    {
      name:"Java 8", 
      id:1,
      imgUrl:'../assets/angular.png', 
      price:8000,
      offer:true,
      duration:10,
      participants:0,
      rating:4.5667,
      launchDate:new Date(2019,5,21),
      instructor:'Naveen'
    },
    {
      name:"Maven", 
      id:2, 
      price:4000,
      offer:false,
      imgUrl:'../assets/angular.png',
      duration:2,
      participants:0,
      rating:4.67667,
      launchDate:new Date(2019,5,21),
      instructor:'Harish'
    },
    {
      name:"Spring Boot", 
      id:3, 
      offer:true,
      price:10000,
      imgUrl:'../assets/angular.png',
      duration:8,
      participants:0,
      rating:4.865444,
      launchDate:new Date(2019,4,23),
      instructor:'Rama'
    },
    {
      name:"Hibernate", 
      id:4, 
      offer:true,
      imgUrl:'../assets/angular.png',
      price:8000,
      duration:4,
      participants:0,
      rating:3.786565,
      launchDate:new Date(2018,8,18),
      instructor:'Pavan'
    },
    {
      name:"JPA", 
      id:5, 
      offer:false,
      price:8000,
      imgUrl:'../assets/angular.png',
      duration:4,
      participants:0,
      rating:3.56776,
      launchDate:new Date(2019,5,21),
      instructor:'Pavan'
    },
    {
      name:"Angular", 
      id:6, 
      offer:false,
      price:10000,
      duration:4,
      imgUrl:'../assets/angular.png',
      participants:0,
      rating:4.5555,
      launchDate:new Date(2018,8,18),
      instructor:'Rajesh'
    }
  ];

  register(c){
    console.log(c);
    console.log(`came inside the register method !!`);
  }

  onCourseNameChange(){
   // console.log(`came inside the change event ${this.coursename}` );
  }
  
}
