import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatter'
})
export class NameFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args)
    const instrcutor:string = value as string;
    return args === 'male'? `Mr. ${value}`: `Mrs. ${value}` ;
  }

}
