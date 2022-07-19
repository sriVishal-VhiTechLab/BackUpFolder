function getString() {
      var x = document.getElementById("inText").value;
      var y = x.split('') .reverse() .join('');
      document.getElementById("demo").innerHTML = y;
}
