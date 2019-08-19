import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatter'
})
export class NameFormatterPipe implements PipeTransform {

  transform(user: {firstname:string, lastname:string}, args?: any): any {
    console.log(args)
    if(user){
      return args === 'male'? `Mr. ${user.lastname} ${user.firstname}`: `Mrs. ${user.lastname } ${user.firstname}` ;
    }else {
      return ''
    }
  }

}
