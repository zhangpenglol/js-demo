//案例1
function Star(name) {
    this.name = name;

    // (1)首先看obj对象身上是否有dance方法，如果有，则执行对象身上的方法
    this.dance = function () {
        console.log(this.name + '1');
    }
    console.log(this)
}

// (2)如果没有dance方法，就去构造函数原型对象prototype身上去查找dance这个方法。
Star.prototype.dance = function () {
    console.log(this.name + '2');
};

// (3)如果再没有dance方法，就去Object原型对象prototype身上去查找dance这个方法。
Object.prototype.dance = function () {
    console.log(this.name + '3');
};
// (4)如果再没有，则会报错。
let obj = new Star('小红');
obj.dance();





