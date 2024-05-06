function createCard(product) {
  let item = document.querySelector(`.item`);
  let div = document.createElement(`div`);
  div.classList.add("phone_card");
  let img = document.createElement(`img`);
  img.src = product.thumbnail;

  let h1 = document.createElement(`h1`);
  h1.textContent = product.title;

  let p = document.createElement("p");
  p.textContent = product.description;

  let price = document.createElement(`span`);
  price.textContent = `${product.price}$`;

  div.append(img, h1, p, price);
  item.append(div);
}

export { createCard };
