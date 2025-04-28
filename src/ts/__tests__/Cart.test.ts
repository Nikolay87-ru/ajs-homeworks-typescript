import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";

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
    "digital",
    1
  );
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, "digital", 1);
  const musicAlbum = new MusicAlbum(1008, "Meteora", "Linkin Park", 900, "digital", 1);

  beforeEach(() => {
    cart = new Cart();
  });

  describe("New cart", () => {
    test("new cart should be empty", () => {
      expect(cart.items).toHaveLength(0);
    });
  });

  describe("Adding items", () => {
    test("should add movie", () => {
      cart.add(movie);
      expect(cart.items).toContain(movie);
      expect(cart.items).toHaveLength(1);
    });

    test("should add some items", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);
      
      expect(cart.items).toEqual([movie, book, musicAlbum]);
      expect(cart.items).toHaveLength(3);
    });

    test("should add some items few times", () => {
      cart.add(movie);
      cart.add(movie);
      cart.add(book);
      cart.add(book);
      cart.add(musicAlbum);
      cart.add(musicAlbum);
      
      expect(cart.items).toEqual([movie, book, musicAlbum]);
      expect(cart.items).toHaveLength(3);
    });
  });

  describe("Price calculations", () => {
    test("should calculate total price", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);
      
      expect(cart.getItemsPriceSum()).toBe(3900);
    });

    test("should return 0 for empty cart", () => {
      expect(cart.getItemsPriceSum()).toBe(0);
    });
  });

  describe("Price calculations with discount", () => {
    test("should calculate total price with discount", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);
      
      expect(cart.getItemsPriceDiscountSum(10)).toBe(3510);
      expect(cart.getItemsPriceDiscountSum(50)).toBe(1950);
    });
  });

  describe("Remove item", () => {
    test("should remove added cart item by id", () => {
      cart.add(movie);
      cart.add(book);
      cart.add(musicAlbum);

      cart.remove(1001);
      cart.remove(1010);
      
      expect(cart.items).toEqual([musicAlbum]);
      expect(cart.items).toHaveLength(1);
    });
  });
});
