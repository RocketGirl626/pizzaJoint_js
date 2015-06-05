function Pizza(qty, size, toppings) {
  this.quantity = qty;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost= function(quantity, size, toppings) {

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
  var pizzaTotalCost = quantity * (basePrice + numOfToppings);

  return pizzaTotalCost;
}
+
