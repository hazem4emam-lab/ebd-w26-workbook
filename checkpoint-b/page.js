
import { items } from "./items.js";

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

export function matching() {
  return items.filter((item) => item.price < 100);
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}
