function myFunction(){
let x = document.getElementById("txtInput").value;
let y =x.split("");
let z= y.sort();
let a= z.join("");
document.getElementById("demo").innerHTML= "OUTPUT : "+a;
}
    