import Buyable, { ItemType } from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const existingItem = this._items.find(existItem => existItem.id === item.id);

    if (item.type === ItemType.Digital) {
      if (!existingItem) {
        this._items.push({...item});
      }
      return;
    }

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price = item.price * existingItem.quantity;
    } else {
      this._items.push({...item});
    }
  }

  remove(id: number): void {
    const index = this._items.findIndex(item => item.id === id);
    if (index === -1) return;

    const item = this._items[index];
    
    if (item.type === ItemType.Product && item.quantity > 1) {
      item.quantity -= 1;
      item.price = (item.price / (item.quantity + 1)) * item.quantity;
    } else {
      this._items.splice(index, 1);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getItemsPriceSum(): number {
    return this._items.reduce((sum, item) => sum + item.price, 0);
  }

  getItemsPriceDiscountSum(discount: number): number {
    return this.getItemsPriceSum() * (1 - discount / 100);
  }
}
