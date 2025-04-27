import Cart from '../service/Cart';
import Movie from '../domain/Movie';
// import MusicAlbum from '../domain/MusicAlbum';
// import Book from '../domain/Book';



describe("Cart", () => {
  let Cart;

  beforeEach(() => {
    Cart = new Cart();
  });

  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });
  
  test('new Movie should be added', () => {
    const movie = new Movie(
      1010, 
      "The Avengers", 
      "Joss Whedon", 
      999, 
      "2012",
      "USA",
      "Avengers Assemble!",
      ["fantasy", "action", "adventure"], 
      "143 мин");
  
    cart.add(movie);
    expect(cart.items.length).toBe(1);
  });
});