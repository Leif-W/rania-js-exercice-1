function somme() {
  var inputs = document.getElementsByClassName("note-devoir");
  var sum = 0;

  var table = document.getElementById("tbl");
  for (var i = 0, row; (row = table.rows[i]); i++) {
    sum = 0;
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 1, col; (col = row.cells[j]); j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      if (col.classList.contains("col-sum")) {
        col.children[0].innerText = sum;
        break;
      }

      if (col.getElementsByClassName("num")[0]) {
        sum += parseFloat(col.getElementsByClassName("num")[0].value);
      }
    }
  }

  sum = 0;
}
