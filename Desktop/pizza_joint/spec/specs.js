describe('Pizza', function() {

    it('it creates a pizza with property quantity from the constructor', function() {
    var myPizza = new Pizza(1, 'large', ['sausage', 'mushroom', 'olives']);
    expect(myPizza.quantity).to.equal(1);
  });

  it('it creates a pizza with property size from the constructor', function() {
    var myPizza = new Pizza(1, 'large', ['sausage', 'mushroom', 'olives']);
    expect(myPizza.size).to.equal('large');
  });

  it('it creates a pizza with property toppings from the constructor', function() {
    var myPizza = new Pizza(1, 'large', ['sausage', 'mushroom', 'olives']);
    expect(myPizza.toppings).to.eql(['sausage', 'mushroom', 'olives']);
  });

  // it('calculates pizza price based on inputted factors', function() {
  //   var myPizza = new Pizza(1, 'large', ['sausage', 'mushroom', 'olives']);
  //   expect(myPizza.pizzaCost()).to.equal(22);
  // });
});
