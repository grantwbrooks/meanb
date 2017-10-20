import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ItemService } from './../item.service';


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  new_item = new Item();
  items = [];

  edit_item = new Item();
  display_item = new Item();

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this._itemService.showItems((res) => { //callback is here
      this.items = res
      console.log(this.items)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this notes array filled up",this.items);
  }

  onSubmit(){
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

    this.show();
  }

  delete(item){
    this._itemService.deleteItem(item, (res) => { //callback is here
      console.log("right here",item);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });

    this.show();
  }

  update(item){
    item.isEditable = false;
    this._itemService.updateItem(item, this.edit_item, (res) => { //callback is here
      console.log(this.edit_item);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.edit_item);

    this.show();
  }

  showOne(item) {
    this._itemService.showItem(item, (res) => { //callback is here
      this.display_item = res
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this is one item",this.display_item);
  }


}
