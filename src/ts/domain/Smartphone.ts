import Buyable from "./Buyable";

export default class Smartphone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    public price: number,
    readonly type: string,
    public quantity: number
  ) {}
}
