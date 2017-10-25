import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Item } from './item';
import 'rxjs/add/operator/switchMap';  // use this for promises bc of .map

@Injectable()
export class ItemService {

  items = [];
  current_question_id = "";
  loggedUserId;
  loggedUserName;

  constructor(private _http: Http) { }

  getUser() {
    return this.loggedUserName;
  }

  setUser(username) {
    this.loggedUserName = username;
  }
  setUserId(userid) {
    this.loggedUserId = userid;
  }
  getUserId() {
    return this.loggedUserId;
  }


  createItem(item, callback, errorback) {
    this._http.post('/items', item).subscribe( 
      (response) => {
        console.log("*************************************************")
        var tempresp = response.json();
        this.loggedUserName = tempresp.item_content;
        this.loggedUserId = tempresp._id;
        console.log("this user id --------------->", this.loggedUserId);
        callback(response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }

  createSub(item, callback, errorback) {
    this._http.post('/createsub/'+this.loggedUserId, item).subscribe( 
      (response) => { 
        callback(response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }

  showItems(callback, errorback) {
    this._http.get('/items').subscribe( 
      (response) => {
        this.items = response.json();
        callback(this.items);
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }
  // //promised way be sure to add import of rxjs map as well
  // showItems() {
  //   return this._http.get('/items').map((response) => response.json()).toPromise()
  // }

  deleteItem(item, callback, errorback) {
    this._http.delete('/items/'+item._id).subscribe( 
      (response) => {
        callback();
        console.log("got in here");
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }


  updateItem(item, new_item, callback, errorback){
    this._http.put("/items/"+item._id, new_item).subscribe( 
      (response) => {
        callback(response.json());
        console.log("got in here");
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }


  showItem(item, callback, errorback) {
    this._http.get('/item/'+item).subscribe( 
      (response) => {
        callback(response.json());
        console.log("got in here",response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }



}
