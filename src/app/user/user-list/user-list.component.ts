import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAll().subscribe(users => {
      this.users = users;
    })


  }

}
