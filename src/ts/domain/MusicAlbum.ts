import Buyable from "./Buyable";

export default class MusicAlbum implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    public price: number,
    readonly type: string,
    public quantity: number
  ) {}
}
