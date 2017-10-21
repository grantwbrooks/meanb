import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyItemsComponent } from './my-items/my-items.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { ItemService } from './item.service';
import { OrderByPipe } from './order-by.pipe';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './create/create.component'; // <-- Imported

@NgModule({
  declarations: [
    AppComponent,
    MyItemsComponent,
    OrderByPipe,
    LoginComponent,
    PollComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
