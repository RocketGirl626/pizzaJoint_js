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

  // it('creates a new ticket for a child, non-new-realease, matinee', function() {
  //   var childTicket = new Ticket('frog', false, 10, 1100);
  //   expect(childTicket.movieName).to.equal('frog');
  //   expect(childTicket.movieNewRelease).to.equal(false);
  //   expect(childTicket.age).to.equal(10);
  //   expect(childTicket.timeOfDay).to.equal(1100);
  // });
  //
  // it('calculates ticket price based on inputted factors', function() {
  //   var childTicket = new Ticket('frog', false, 10, 1100);
  //   expect(childTicket.ticketPrice()).to.equal(3);
  // });
  //
  // it('calculates ticket price based on inputted factors', function() {
  //   var adultTicket = new Ticket('frog', true, 20, 1100);
  //   expect(adultTicket.ticketPrice()).to.equal(6);
  // });
  //
  // it('calculates ticket price based on inputted factors', function() {
  //   var adultTicket = new Ticket('frog', true, 26, 1800);
  //   expect(adultTicket.ticketPrice()).to.equal(8);
  // });
  //
  // it('calculates ticket price based on inputted factors', function() {
  //   var seniorTicket = new Ticket('frog', false, 65, 1800);
  //   expect(seniorTicket.ticketPrice()).to.equal(5);
  // });
  //
  // it('calculates ticket price based on inputted factors', function() {
  //   var adultTicket = new Ticket('frog', true, 45, 1800);
  //   expect(adultTicket.ticketPrice()).to.equal(8);
  // });


});
