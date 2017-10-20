import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Item } from './item';

@Injectable()
export class ItemService {

  items = [];

  constructor(private _http: Http) { }

  createItem(item, callback, errorback) {
    this._http.post('/items', item).subscribe( 
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
        callback();
        console.log("got in here");
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
    );
  }


  showItem(item, callback, errorback) {
    this._http.get('/item/'+item._id).subscribe( 
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



}
