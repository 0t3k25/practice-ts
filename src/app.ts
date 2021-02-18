import { Item } from "./item";
const elem = document.getElementById("output");
const aBook = new Item("初めてのTypeScript", 1980);
aBook.say(elem);
