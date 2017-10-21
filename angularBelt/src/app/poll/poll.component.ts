import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ItemService } from './../item.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  questions = [];
  current_question;


  constructor(private _itemService: ItemService, private router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
    })
  }

  ngOnInit() {
    this.showOne(this.current_question)
  }

  showOne(item) {
    this._itemService.showItem(item, (res) => { //callback is here
      this.current_question = res
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this is one item",this.current_question);
  }

}



