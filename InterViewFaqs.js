// Code 1

var obj1 = {
valueOfThis: function(){
return this;
}
}
var obj2 = {
valueOfThis: ()=>{
return this;
}
}

obj1.valueOfThis();
obj2.valueOfThis();
==============================================================

// Code 2
let hero = {
powerLevel: 99,
getPower(){
return this.powerLevel;
}
}
let getPower = hero.getPower;
let hero2 = {powerLevel:42};
console.log(getPower());
console.log(getPower.apply(hero2));

==============================================================

// Code 3

function func1(){
setTimeout(()=>{
console.log(x);
console.log(y);
},3000);

 var x = 2;
let y = 12;
}

func1();
==============================================================

// Code 4:

function func2(){
for(var i = 0; i < 3; i++){
setTimeout(()=> console.log(i),2000);
}

}

func2();
==============================================================

// Code 5:

(function(){
setTimeout(()=> console.log(1),2000);
console.log(2);
setTimeout(()=> console.log(3),0);
console.log(4);
})();

==============================================================

// Code 6:

function foo() {
let a = b = 0;
a++;
return a;
}

foo();
typeof a;
typeof b;

==============================================================
