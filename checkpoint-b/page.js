
import { items } from "./items.js";

/**
 * Draws the given items into the list, replacing its existing contents.
 */
export function renderItems(list) {
  const element = document.querySelector("#list");

  element.textContent = "";

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("stock-line");
    row.textContent = `${item.name} (${item.category})`;
    element.append(row);
  }
}

/**
 * Returns items priced strictly below 100 EGP.
 */
export function matching() {
  return items.filter((item) => item.price < 100);
}

/**
 * Displays all items and wires up the Shortlist button.
 */
export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}
