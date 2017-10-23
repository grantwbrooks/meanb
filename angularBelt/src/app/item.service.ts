import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Item } from './item';

@Injectable()
export class ItemService {

  items = [];
  current_question_id = "";
  loggedUserId = "";

  constructor(private _http: Http) { }

  createItem(item, callback, errorback) {
    this._http.post('/items', item).subscribe( 
      (response) => { 
        this.loggedUserId = response.json()._id;
        console.log("this user id-----------234---asdf-f>", this.loggedUserId)
        callback(response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }

  createSub(item, callback, errorback) {
    this._http.post('/createsub', item).subscribe( 
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
