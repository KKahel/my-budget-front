import { Component, OnInit } from '@angular/core';
import { ColumnButtonAction, ColumnButtonActionType, ColumnOptions } from '@shared/table/table.component';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/entities/user';
import { SearchContext } from 'src/app/models/search-context';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

enum UserActionType {
  Edit,
  Delete
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];
  count!: number;
  take = 5;
  skip = 0;

  public columnsOptions: ColumnOptions<User>[] = [
    { name: 'id', displayName: 'identifiant' },
    { name: 'firstName', displayName: 'firstName'},
    { name: 'lastName', displayName: 'lastName'},
    { name: 'email', displayName: 'email'},
  ];

  public actionsColumn: ColumnButtonAction<UserActionType>[] = [
    {
      title: 'Editer',
      classes: ['fa-lg'],
      actionType: UserActionType.Edit,
      type: ColumnButtonActionType.icon,
      iconDefinition: faEdit
    },
    {
      title: 'Supprimer',
      classes: ['fa-lg'],
      actionType: UserActionType.Delete,
      type: ColumnButtonActionType.icon,
      iconDefinition: faTrash
    }
  ];


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.loadUsers();
  }

  loadUsers(): void {
    let searchContext = new SearchContext(this.take, this.skip);
    this.userService.search(searchContext).subscribe(
      result => {
        this.users = result.data,
        this.count = result.count
      });
  }

  pageChange(skip: number): void {
    // next
    this.skip = skip;
    this.loadUsers();
  }

}
