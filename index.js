function sommme() {
  var table = document.getElementById("table");
  var sum = 0;

  for (var i = 1; i < table.rows.length - 1; i++) {
    let innerCell = table.rows[i].cells[1];
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    sum = (parseInt(num1.value) + 2 * parseInt(num2.value)) / 3;
  }
  document.getElementById("sum").value = sum;
}

var table = document.getElementById("table"),
  maxval;
for (var i = 1; i < table.rows.length; i++) {
  if (i === 1) {
    maxval = table.rows[i].cells[4].innerHTML;
  } else {
    maxval = table.rows[i].cells[4].innerHTML;
  }
}
