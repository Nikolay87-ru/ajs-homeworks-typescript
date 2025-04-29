import Buyable, { ItemType } from "./Buyable";

export default class Smartphone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    public price: number,
    readonly type: ItemType = ItemType.Product,
    public quantity: number
  ) {}
}
