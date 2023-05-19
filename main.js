console.log("Test");
console.log("Test again");

const myObject = {
    property: 'Value!',
    otherProperty: 23,
    "obnoxious property": function(){
        console.log("Called obnoxious property")
    }
};

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return {name, age, sayHello};
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name);

jeff.sayHello();


