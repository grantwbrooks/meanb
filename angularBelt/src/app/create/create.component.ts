import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ItemService } from './../item.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  new_question = new Question();

  constructor(private _itemService: ItemService, private router: Router) { }
  
  ngOnInit() {
    console.log("oninit",this.new_question)
  }

  onSubmit(){
    this.router.navigate(["/dashboard"])
    // this.user_service.create(this.new_user)
    //   .then(() => this.router.navigate(["/dashboard"]) )
    //   .catch(err => console.log("user login error", err))

    console.log("before this note",this.new_question);
    this._itemService.createSub(this.new_question, (res) => { //callback is here
      console.log(this.new_question);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.new_question);
  }

}
