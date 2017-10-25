import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ItemService } from './../item.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  new_item = new Item();
  
  constructor(private _itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this._itemService.setUser(null);
  }

  onSubmit(){
    //getter setter practice
    // this._itemService.setUser(this.new_item.item_content);
    // var user = this._itemService.getUser();
    
    // this.user_service.create(this.new_user)
    //   .then(() => this.router.navigate(["/dashboard"]) )
    //   .catch(err => console.log("user login error", err))

    //hit service
    console.log("before this note",this.new_item);
    this._itemService.createItem(this.new_item, (res) => { //callback is here
      // this._itemService.loggedUserName = res.item_content;
      console.log(this.new_item);
      this.router.navigate(["/dashboard"]) /////****** important to put in the callback function so it is called after data load */
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.new_item);
    this.new_item = new Item();
    console.log("cleared this note",this.new_item);
    
  } 

}
