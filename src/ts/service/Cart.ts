import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const isItemAlreadyAdded = this._items.find(
      (existItem) => existItem.id === item.id
    );

    if (item.type === "digital" && isItemAlreadyAdded) {
      return;
    } else {
      this._items.push(item);
    }

    if (item.type === "product" && isItemAlreadyAdded) {
      item.quantity++;
      item.price * 2;
    } else {
      this._items.push(item);
    }
  }

  remove(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getItemsPriceSum(): number {
    return this._items.reduce(
      (sum: number, item: Buyable): number => sum + item.price,
      0
    );
  }

  getItemsPriceDiscountSum(discount: number): number {
    return this.getItemsPriceSum() * (1 - discount / 100);
  }
}
