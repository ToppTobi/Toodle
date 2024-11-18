import {Routes} from "@angular/router";
import {UserComponent} from "./user.component";


export const routes: Routes = [
  { path: 'users', component: UserComponent },

  { path: 'start', redirectTo: '/users', pathMatch: 'full' }
];
