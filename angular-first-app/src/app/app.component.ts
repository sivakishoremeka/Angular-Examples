import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-app';
  users = DUMMY_USERS;
  selectedUserId?:string;

  onUserSelected(id:string){
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

}
