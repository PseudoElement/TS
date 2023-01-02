var user = {
    name: "asd",
    age: 123
};
var object = {
    name: "Ivan",
    nickname: "Kindza",
    list: ["Some", 'asdas'],
    newProp: 'sdfsd'
};
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'MyName';
        this.nickname = 'ZUzu';
        this.list = ['asdas'];
        this.newProperty = 100; //в класс можно добавлять дополнительные свойства/методы,
    }
    Test.prototype.createSmth = function () {
        return Number(Math.random().toFixed());
    };
    Test.addNewMethod = function () {
        console.log('SALAM');
    };
    return Test;
}());
Test.addNewMethod();
