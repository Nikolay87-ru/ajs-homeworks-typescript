import Buyable, { ItemType } from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    public price: number,
    readonly year: string,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: string,
    readonly type: ItemType = ItemType.Digital,
    public quantity: number
  ) {}
}
