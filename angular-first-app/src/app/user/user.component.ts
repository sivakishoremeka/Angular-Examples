import { Component, Input,input,computed, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string
  @Input({required:true}) name!:string
  @Input({required:true}) avatar!:string
  @Output() select = new EventEmitter();
  
  get ImagePath(){
    return '../../assets/users/'+this.avatar;
  }
  onSelectedUser(){
    this.select.emit(this.id);
  }
}
