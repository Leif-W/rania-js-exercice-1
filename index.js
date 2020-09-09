function somme() {
  document.querySelectorAll("form").forEach((form) => {
    var som = 0;
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    som += (parseInt(num1.value) + 2 * parseInt(num2.value)) / 3;
    var output = document.getElementById("sum");
    output.innerHTML = som;
  });
  console.log(som);
}
