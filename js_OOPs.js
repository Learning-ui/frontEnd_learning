function Car(model, price) {
    this.model = model;
    this.price = price;
}

var obj1 = new Car("XYZ", 10);
var obj2 = new Car("ABC", 20);

// from here also understand 'this' keyword.
/* What Happens When You Call new Car("XYZ", 10)?
    - A new empty object {} is created.
    - 'this' inside Car now refers to this new object.
    - The properties model and price are assigned to the new object.
    - The new object is returned automatically. */