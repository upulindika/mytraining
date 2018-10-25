import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(user: User[], property: string): User[] {
    let sortProperty = 'LastName';
    if(property != null) {
      sortProperty = property;
    }

    console.log("sort users by : ", sortProperty);

    return user.sort(compareFn);

    function compareFn(a: User,b: User) {
      const x = a[sortProperty].toUpperCase();
      const y = b[sortProperty].toUpperCase();
      if(x === y){
        return 0;
      }
      return(x > y) ? 1 : -1;
    }
  }
}
