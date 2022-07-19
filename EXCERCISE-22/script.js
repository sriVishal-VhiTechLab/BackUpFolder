function f1() {
      document.write("Var is Functionally Scoped Its Variable can be accessed only inside The function.. Inspect this page to know more! I have dcelared a Var with value 10 , But in it Shows a is not defined")
      var a = 10;
}
console.log(a);
function f2() {
      document.write("let is Block Scoped, Outside the block we cannot accesss the declared Values. Inpsect this page to know More! Here I have declared a i variable with let and took in the for loop to iterate values upto 3 but in console it shows Undefined");
      for (let i = 0; i < 3; i++) {
            console.log(i);
      }

      console.log(i);
}
function f3() {
      document.write("Const is also blocked Scoped (But Only Within the Const keyword), if u inspect you will see that x was defined under the block was accessible, but when you try to access x outside that block, you will get an error.");
      {
            const x = 2;
            console.log(x);
      }
      console.log(x);
}