import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ItemService } from './../item.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Question } from './../question';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  question_id;
  questions = [];
  current_question = new Question();
  updated_question = new Question();


  constructor(private _itemService: ItemService, private router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.question_id = params.get('id')
      console.log(params.get('id'));
    })
  }

  ngOnInit() {
    if(this._itemService.loggedUserId == null){
      this.router.navigate(["/"])
    }
    else {
      this.showOne(this.question_id)
    }
  }

  showOne(question) {
    this._itemService.showItem(question, (res) => { //callback is here
      this.current_question = res
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this is one item",this.current_question);
  }


  vote(curr_count) {
    curr_count.count += 1;
    this.updated_question = this.current_question;    
    console.log(curr_count);
    console.log("before saving",this.updated_question);

    this._itemService.updateItem(this.current_question, this.updated_question, (res) => { //callback is here
      this.current_question = this.updated_question;
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this is one item",this.current_question);
  }

}



