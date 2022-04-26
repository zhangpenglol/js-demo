// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.eat = function () {
//         console.log(name + '今年' + age + '岁')
//     }
// }



// var p1 = new Person('zp', '24')
// var p2 = new Person('zp', '24')
// console.log(p1)
// console.log(p1.prototype)
// console.log(p1.__proto__)
// console.log(p1.__proto__ === Person.prototype)
// console.log(Person.prototype)



// console.log(Object.__proto__ === Function.__proto__)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Object.prototype === Function.prototype.__proto__.__proto__)

// Object.__proto__ === Function.__proto__
// Object.__proto__ === Function.prototype
// Object.prototype === Function.prototype.__proto__
// Object.prototype.__proto__ = null

// console.log(Object.prototype.__proto__ === null)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.__proto__ === Function.prototype)


/**
 * 在js中每个对象都有一个与它关联的对象，叫做原型对象（可以理解为兄弟对象，他们两个有一定的关系）。
 * 每一次获取对象属性都是一次查询过程，当在对象的自有属性中找不到时就会去查找它的原型对象。
 * 在js中函数也是一个对象。每个函数都有一个prototype属性（只有函数才有prototype属性），
 * 这是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。按照字面意思来理解，那么prototype就是通过调用构造函数而创建的那个对象实例的原型对象。其中原型对象会自动获得一个constructor属性，这个属性指向原来的构造函数。
 */

//原型：给其它对象提供共享属性和方法的对象。


/**
      * new一个对象过程
      * 创建一个空对象
      * 为新对象准备原型链接 obj.__proto__ === (构造函数)Father.prototype
      * 重新绑定this，使构造函数的this指向新对象 Father.call(this)
      * 为新对象属性赋值 son.name
      * 返回this return this，此时的新对象就拥有了构造函数的方法和属性了
      */






// function Father() {
//     this.property = true;
// }
// Father.prototype.getFatherValue = function () {
//     return this.property;
// }

// let obj = new Father()
// obj.getFatherValue()

// function Son() {
//     this.sonProperty = false;
// }

// //继承 Father
// Son.prototype = new Father();//Son.prototype被重写,导致Son.prototype.constructor也一同被重写
// Son.prototype.getSonVaule = function () {
//     return this.sonProperty;
// }
// var instance = new Son();
// alert(instance.getFatherValue());//true


var name = "windowsName";

var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
        console.log(this)
        setTimeout(function () {
            console.log(this)
            this.func1()
        },100);
    }

};

a.func2()     // this.func1 is not a function