import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new Movie should be added', () => {
  const cart = new Cart();
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