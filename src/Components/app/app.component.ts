import {Component} from '@angular/core';
import {WishItem} from "../../shared/models/WishItem";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {User} from "../../shared/models/User";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title: string = "d";

}

