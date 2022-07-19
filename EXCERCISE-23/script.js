function print(){
   
let a= document.getElementById("num1").value;
let b= document.getElementById("num2").value;

document.getElementById("demo").innerHTML = a + "," + b;
}
function swap()  {
   let f = [6,9,3,6,9,45];
   let temp= f[0];
   f[0]= f[4];
   f[4]= temp;
   console.log(f);
   let x = document.getElementById("num1").value;
   let y = document.getElementById("num2").value;
   document.getElementById("demo2").innerHTML = y +"," +x;


      
}