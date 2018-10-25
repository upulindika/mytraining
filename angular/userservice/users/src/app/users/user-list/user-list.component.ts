import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Observable } from 'rxjs';
import { JsonRsp } from '../../json-resp.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  sortBy = 'LastName'
  searchCriteria = '';

  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.list()
    .subscribe(JsonRsp => {
      console.log(JsonRsp);
      this.users = JsonRsp.data;
    });
  }

}
