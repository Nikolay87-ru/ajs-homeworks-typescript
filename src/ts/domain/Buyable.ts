export default interface Buyable {
  readonly id: number;
  readonly name: string;
  price: number;
  readonly type: ItemType;
  quantity: number;
}

export enum ItemType {
  Digital = "digital",
  Product = "product",
}
