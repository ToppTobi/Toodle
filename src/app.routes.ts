import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./Components/user/user.component";
import {HomeComponent} from "./Components/home/home.component";
import {AppComponent} from "./Components/app/app.component";
import {TodoComponent} from "./Components/todo/todo.component";
import {User} from "./shared/models/User";


export const routes: Routes = [
  { path: '', component: TodoComponent }, // Standardroute
  { path: 'todo', component: TodoComponent }, // Explizite Route für "todo"
  { path: 'users', component: UserComponent }, // Explizite Route für "todo"
  { path: '**', redirectTo: '' } // Fallback
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
