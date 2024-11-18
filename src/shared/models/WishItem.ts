import {User} from "./User";

export class WishItem {
  constructor(
    public wishName: string,
    public writer: string,
    public isComplete: boolean = false
  ) {
    this.wishName = wishName;
    this.isComplete = isComplete;
    this.writer = writer;
  }
}
