import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, "digital"));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900, "digital"));
cart.add(
  new Movie(
    1010,
    "Мстители",
    "Джосс Уидон",
    1000,
    "2012",
    "США",
    "Мстители, общий сбор!",
    ["фантастика", "боевик", "приключения"],
    "143 мин",
    "digital"
  )
);

console.log(cart.items);
