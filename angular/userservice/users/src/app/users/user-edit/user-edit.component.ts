import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Observable } from 'rxjs';
import { JsonRsp } from '../../json-resp.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(private usersvc: UserService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    });
  }

  save(): void {
    this.usersvc.change(this.user).subscribe(jsonresp => {
      console.log(jsonresp);
      if (jsonresp.rc === 200) {
        this.router.navigateByUrl('/users/list')
      }
    });
  }

}
