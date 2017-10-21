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
  }

  onSubmit(){
    this.router.navigate(["/dashboard"])
    // this.user_service.create(this.new_user)
    //   .then(() => this.router.navigate(["/dashboard"]) )
    //   .catch(err => console.log("user login error", err))

    //hit service
    console.log("before this note",this.new_item);
    this._itemService.createItem(this.new_item, (res) => { //callback is here
      console.log(this.new_item);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.new_item);
    this.new_item = new Item();
    console.log("cleared this note",this.new_item);

  }

}
