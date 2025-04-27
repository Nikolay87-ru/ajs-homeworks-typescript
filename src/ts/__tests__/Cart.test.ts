import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test("new cart should be empty", () => {
    expect(cart.items.length).toBe(0);
  });

  test("should add movie to cart", () => {
    const movie = new Movie(
      1010,
      "The Avengers",
      "Joss Whedon",
      1000,
      "2012",
      "USA",
      "Avengers Assemble!",
      ["fantasy", "action", "adventure"],
      "143 мин"
    );

    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
  });

  test("should get items total sum", () => {
    cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
    cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
    cart.add(
      new Movie(
        1010,
        "The Avengers",
        "Joss Whedon",
        1000,
        "2012",
        "USA",
        "Avengers Assemble!",
        ["fantasy", "action", "adventure"],
        "143 мин"
      )
    );
    expect(cart.getItemsPriceSum()).toBe(3900);
  });
});
