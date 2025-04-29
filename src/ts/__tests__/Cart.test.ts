import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";
import Smartphone from "../domain/Smartphone";
import { ItemType } from "../domain/Buyable";

describe("Cart", () => {
  let cart: Cart;
  const movie = new Movie(
    1010,
    "The Avengers",
    "Joss Whedon",
    1000,
    "2012",
    "USA",
    "Avengers Assemble!",
    ["fantasy", "action", "adventure"],
    "143 мин",
    ItemType.Digital,
    1
  );
  const book = new Book(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
    ItemType.Digital,
    1
  );
  const musicAlbum = new MusicAlbum(
    1008,
    "Meteora",
    "Linkin Park",
    900,
    ItemType.Digital,
    1
  );
  const smartphone = new Smartphone(1020, "iPhone 13", 60000, ItemType.Product, 1);

  beforeEach(() => {
    cart = new Cart();
  });

  describe("New cart", () => {
    test("new cart should be empty", () => {
      expect(cart.items).toHaveLength(0);
    });
  });

  describe("Adding items", () => {
    test("should add some items few times", () => {
      cart.add(movie);
      cart.add(movie);
      cart.add(book);
      cart.add(book);
      cart.add(musicAlbum);
      cart.add(musicAlbum);
      cart.add(smartphone);
      cart.add(smartphone);

      const phone = cart.items.find(i => i.id === 1020) as Smartphone;
      expect(phone.quantity).toBe(2);
      expect(phone.price).toBe(120000); 

      expect(cart.items).toHaveLength(4);
    });
  });

  describe("Price calculations", () => {
    test("should calculate total price", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);
      cart.add(smartphone);

      expect(cart.getItemsPriceSum()).toBe(63900);
    });
  });

  describe("Price calculations with discount", () => {
    test("should calculate total price with discount", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);
      cart.add(smartphone);
      cart.add(smartphone); 

      expect(cart.getItemsPriceDiscountSum(10)).toBe(111510);
      expect(cart.getItemsPriceDiscountSum(50)).toBe(61950);
    });
  });

  test("should decrease quantity when removing product item", () => {
    cart.add(smartphone);
    cart.add(smartphone);
    cart.add(smartphone);
    
    cart.remove(1020);
    
    expect(cart.items).toHaveLength(1);
    const item = cart.items[0] as Smartphone;
    expect(item.quantity).toBe(2);
    expect(item.price).toBe(120000); 
  });

  test("should remove item when quantity is 0", () => {
    cart.add(smartphone);
    
    cart.remove(1020);
    
    expect(cart.items).toHaveLength(0);
  });
});
