import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user: User;

  constructor(private usersvc: UserService,
    private routes: ActivatedRoute) { }

  ngOnInit() {
    let id = this.routes.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    })
  }

}
