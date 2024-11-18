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
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Wishlist";
  newWishName = "";
  deletedWishName = "";
  deletedWishDoesNotExistString = "";
  listFilter: string = "0";
  filterByUser = "0";
  selectedUser = ""

  users: User[] = [
    new User("topp3", "Tobias", "Topp"),
    new User("anbu3", "Anne", "Buser"),
    new User("test1", "test1", "test1"),
  ]

  items: WishItem[] = [
    new WishItem("Learn Angular", this.users[0].userID, false),
    new WishItem("Go Pronto", this.users[0].userID, false),
    new WishItem("Go into a Mall", this.users[1].userID, true)
  ];

  get getUserData(): User | undefined {
    return this.users.find(user => user.userID == this.selectedUser);
  }

  printSelectedUserData(user: string) {
    console.log("Selected User: ", this.getUserData)
  }


  get filteredItems(): WishItem[] {
    let value = this.listFilter;
    let filteredByStatus: WishItem[] = [];


    if (value == "0") {
      filteredByStatus = this.items;
    } else if (value == "1") {
      filteredByStatus = this.items.filter(item => !item.isComplete);
    } else if (value == "2") {
      filteredByStatus = this.items.filter(item => item.isComplete);
    }


    if (this.filterByUser && this.filterByUser !== "0") {
      return filteredByStatus.filter(item => item.writer === this.filterByUser);
    }

    return filteredByStatus;
  }


  addNewWish() {
    this.items.push(new WishItem(this.newWishName, this.selectedUser));
    this.newWishName = "";
  }


  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }


  deleteWish() {
    this.deletedWishDoesNotExistString = "";
    let deleted = false;
    for (let item = this.items.length - 1; item >= 0; item--) {
      if (this.items[item].wishName == this.deletedWishName || this.items[item].wishName.toLowerCase() == this.deletedWishName) {
        this.items.splice(item, 1);
        this.deletedWishName = "";
        deleted = true;
      }
    }

    if (!deleted) {
      this.deletedWishDoesNotExistString = "The wish with the Name: " + this.deletedWishName + " does not exist"
    }
  }
}

