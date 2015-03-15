This is a basic piece of code to make easier classic OOP in JavaScript:

Features:

 * Straightforward Classic OOP Inheritance
 * A easy form to describe constructor, public and static members
 * Access to ancestor members an overload of ancestor members

And here's some code!

```javascript
var Animal = BaseClass({
    construct: function() {
    },
    members: {
        speak: function() {
            console.log("nuf said");
        },
        isA: function() {
            return "animal";
        }
    }
});

var Dog = BaseClass({  extend: Animal,
    construct: function(name) {
        console.log('Dog constructor %s', name);
        this.super();
        this.name = name;
    },
    statics: {
        Home: "House",
        Food: "Meat",
        Speak: "Barks"
    },
    members: {
        name: "",
        speak: function() {
            console.log( "ouaf !");
        },
        isA: function(advice) {
           return advice + " dog -> " + Dog.super.isA.call(this);
        }
    }
});

var Yorkshire = BaseClass({ extend: Dog,
    construct: function(name,gender) {
        this.super(name);
        this.gender = gender;
    },
    members: {
        speak: function() {
            console.log( "ouin !");
        },
        isA: function(advice) {
           return "yorkshire -> " + Yorkshire.super.isA.call(this, advice);
        }
    }
});

var animal = new Animal("Maciste");
console.log(animal.isA());
animal.speak();

var dog = new Dog("Sultan");
console.log(dog.isA("good"));
dog.speak();

var yorkshire = new Yorkshire("Golgoth","Male");
console.log(yorkshire.isA("bad"));
yorkshire.speak();
```