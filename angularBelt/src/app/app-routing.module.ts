import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyItemsComponent } from "./my-items/my-items.component"
import { LoginComponent } from "./login/login.component"
import { CreateComponent } from "./create/create.component"
import { PollComponent } from "./poll/poll.component"

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: MyItemsComponent },
  { path: 'poll/:id', component: PollComponent },
  { path: 'create', pathMatch: 'full', component: CreateComponent },
  // { path: 'logout', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
