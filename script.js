var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];
function popUp(id) {
  var that = this;
  this.popup_element = document.createElement("div");
  this.popup_element.classList.add("popUp");
  this.image_element = document.createElement("img");
  this.image_element.setAttribute("src", products[id].image);
  
  this.name_element = document.createElement("p");
  this.price_element = document.createElement("p");
  this.name_element.innerHTML = "Name: " + products[id].name;
  this.price_element.innerHTML = "Price: $" + products[id].price;
  
  this.popup_element.addEventListener("click", function() 
  {
    that.popup_element.style.display = "none";
  });
  
  this.popup_element.append(this.image_element);
  this.popup_element.append(this.name_element);
  this.popup_element.append(this.price_element);

  document.body.appendChild(this.popup_element);
}

function fruits() {
  var that = this;
  this.products_list = [];
  this.fruit_element = document.createElement("div");
  this.fruit_element.classList.add("products");

  for (let i = 0; i < products.length; i++) 
  {
    this.products_list.push(new product(i));
    this.products_list[i].product_element.addEventListener("click", function() 
    {   
      var pop = new popUp(i);
    });
    this.fruit_element.appendChild(this.products_list[i].product_element);
  }
  document.body.appendChild(this.fruit_element);
}

function product(id) {
  let that = this;
  this.product_element = document.createElement("div");
  this.image_element = document.createElement("img");
  this.image_element.setAttribute("src", products[id].image);
  this.product_element.append(this.image_element);
  
  this.name_element = document.createElement("p");
  this.price_element = document.createElement("p");
  this.product_element.classList.add("product");

  
  this.name_element.innerHTML = "Name: " + products[id].name;
  this.price_element.innerHTML = "Price: $" + products[id].price;
  
  this.product_element.addEventListener("mouseover", function() 
  {
    that.product_element.style.borderColor = products[id].color;
  });
  this.product_element.addEventListener("mouseout", function() 
  {
    that.product_element.style.borderColor = "black";
  });
 this.product_element.appendChild(this.name_element);
 this.product_element.appendChild(this.price_element); 
}

var fruits = new fruits;