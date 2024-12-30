import { Component, Input,input,computed } from '@angular/core';
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
  //@Input({required:true}) name!:string
  //@Input({required:true}) avatar!:string
  //get ImagePath(){
  //  return '../../assets/users/'+this.avatar;
  //}
  name = input.required<string>() ;
  avatar = input.required<string>() ;
  ImagePath = computed(()=>{
    return '../../assets/users/'+this.avatar();
  })
  onSelectedUser(){
    //console.log("selected user name is "+this.name)
  }
}
