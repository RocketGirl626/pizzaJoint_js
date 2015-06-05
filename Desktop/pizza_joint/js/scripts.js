function Pizza(qty, size, toppings) {
  this.quantity = qty;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice= function(quantity, size, toppings) {

  if(size === 'small') {
    var basePrice = 12;
  }
  if(size === 'medium') {
    var basePrice = 14;
  }
  if(size ==='large') {
    var basePrice = 16;
  }

  var numOfToppings = toppings.length;
  var toppingsPrice = numOfToppings * 2;
  var totalPrice = quantity * (basePrice + numOfToppings);

  return totalPrice;
}

$(document).ready(function(){
  $("form#pizza-info").submit(function(event){
    event.preventDefault();

    var  quantity= $('input[name="qty-choices"]:checked').val();

    var size = $('input[name="size-choices"]:checked').val();

    var toppings = $('input[name="top-choices"]:checked').val();

    var newPizza = new (quantity, size, toppings);

    $(".pizza-info").append("<span>" + newPizza.pizzaPrice(quantity, size, toppings) + "</span>");
  });

});
