import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ItemService } from './../item.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  questions = [];
  search_content = "";

  new_item = new Item();
  items = [];

  edit_item = new Item();
  display_item = new Item();

  // loggedInUser = req.session.name; // not using this now
  loggedUserId = "";
  loggedUserName = "";

  // searchText = "";  //thought it was needed but isn't
  

  constructor(private _itemService: ItemService, private router: Router) { }
  
  ngOnInit() {
    if(this._itemService.loggedUserId == null){
      this.router.navigate(["/"])
    }
    else {
      this.show();
      this.loggedUserName = this._itemService.getUser();
      // this.loggedUserName = this._itemService.loggedUserName
      console.log("It is right ehere",this.loggedUserName)
    }
  }

  show() {
    this._itemService.showItems((res) => { //callback is here
      this.questions = res
      console.log(this.questions)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this notes array filled up",this.items);
  }
  // //promised way
  // show() {
  //   this._itemService.showItems()
  //   .then( (res) => {console.log(res)
  //     this.questions = res;
  //   })
  //   .catch( err => 
  //       console.log(err)
  //      )
  // }

  delete(question){
    this._itemService.deleteItem(question, (res) => { //callback is here
      console.log("delete this question right here",question);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    this.show();
  }



/////// not using the following on this page, leftover stuff for reference:
//   onSubmit(){
//     //hit service
//     console.log("before this note",this.new_item);
//     this._itemService.createItem(this.new_item, (res) => { //callback is here
//       console.log(this.new_item);
//     },() => { //errorback function this is the second parameter of retrieveTasks
//       console.log("error something");
//     });
//     console.log("this note",this.new_item);
//     this.new_item = new Item();
//     console.log("cleared this note",this.new_item);

//     this.show();
//   }

//   update(item){
//     item.isEditable = false;
//     this._itemService.updateItem(item, this.edit_item, (res) => { //callback is here
//       console.log(this.edit_item);
//     },() => { //errorback function this is the second parameter of retrieveTasks
//       console.log("error something");
//     });
//     console.log("this note",this.edit_item);

//     this.show();
//   }

//   showOne(item) {
//     this._itemService.showItem(item, (res) => { //callback is here
//       this.display_item = res
//     },() => { //errorback function this is the second parameter of retrieveTasks
//       console.log("error something")
//     });
//     console.log("this is one item",this.display_item);
//   }


}
