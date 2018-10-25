import { Pipe, PipeTransform } from '@angular/core';
import { User} from '../users/user.class';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if(searchCriteria == ''){
      return users;
    }
    let seachedUsers: User[] = [];
    for (let user of users) {
      if (user.FirstName.includes(searchCriteria) ||
          user.LastName.includes(searchCriteria)){
            seachedUsers.push(user);
      }
    }
    return seachedUsers;
  }

}
