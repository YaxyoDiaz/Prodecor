const menu = document.querySelector(".menu"); 
const burger = document.querySelector(".burger"); 
 
burger.onclick = () => { 
  menu.classList.toggle("open"); 
}; 
 
const btnOpen = document.querySelector(".btn"); 
const btnClose = document.querySelector(".close-btn"); 
const modal = document.querySelector(".modal"); 
 
const catalog = [ 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
 
  { 
    img: "./img/image2(1).png", 
    name: "Фотозоны", 
    oldPrice: 1400, 
    newPrice: 1200, 
    buyNow: "Заказать", 
  }, 
]; 
 
 
 
 
const cards3 = document.querySelector(".cards3"); 
 
const card = catalog.map((item) => { 
  return  
          <div class="card2"> 
            <img src="${item.img}" alt="" /> 
            <div class="cards-box"> 
              <h4>${item.name}</h4> 
              <span>${item.newPrice}</span> 
              <s>${item.oldPrice}</s> <br> 
              <button class="btn2">${item.buyNow}</button> 
            </div> 
          </div> 
  ; 
 
}).join('') 
 
// const card2 = document.querySelector('.card2') 
 
cards3.innerHTML = card;