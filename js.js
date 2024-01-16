//Declare variable
let elements_1 = $(".sum-1");
let elements_2 = $(".sum-2");
let elements_3 = $(".sum-3");
let elements_4 = $(".sum-4");
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;

//get total by id
for (let i = 0; i < elements_1.length; i++) {
  let a = elements_1[i].innerText;
  a = parseFloat(a);

  if (isNaN(a)) {
    a = 0;
  }
  sum1 += a;
}

//get total by id
for (let i = 0; i < elements_2.length; i++) {
  let a = elements_2[i].innerText;
  a = parseFloat(a.replace(",", ""));

  if (isNaN(a)) {
    a = 0;
  }
  sum2 += a;
}

//get total by id
for (let i = 0; i < elements_3.length; i++) {
  let a = elements_3[i].innerText;
  a = parseFloat(a.replace(",", ""));

  if (isNaN(a)) {
    a = 0;
  }
  sum3 += a;
}

//get total by id
for (let i = 0; i < elements_4.length; i++) {
  let a = elements_4[i].innerText;
  a = parseFloat(a.replace(",", ""));

  if (isNaN(a)) {
    a = 0;
  }
  sum4 += a;
}

$("#sum-1")[0].innerText = formatNumber(getNum(sum1));
$("#sum-2")[0].innerText = formatNumber(getNum(sum2));
$("#sum-3")[0].innerText = formatNumber(getNum(sum3));
$("#sum-4")[0].innerText = formatNumber(getNum(sum4));
$("#sum-1").css("font-weight", "bold");
$("#sum-2").css("font-weight", "bold");
$("#sum-3").css("font-weight", "bold");
$("#sum-4").css("font-weight", "bold");

//format number
function formatNumber(number) {
  // Chuyển số thành chuỗi
  let numStr = number.toString();

  // Tìm vị trí của dấu thập phân
  let decimalIndex = numStr.indexOf(".");

  // Nếu không có dấu thập phân, gán vị trí cuối cùng của chuỗi
  if (decimalIndex === -1) {
    decimalIndex = numStr.length;
  }

  // Duyệt qua chuỗi từ cuối về đầu và chèn dấu ',' sau mỗi ba chữ số
  for (let i = decimalIndex - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }

  // Trả về chuỗi đã định dạng
  return numStr;
}

//prevent NaN val
function getNum(val) {
  if (isNaN(val)) {
    return 0;
  }
  return val;
}

// Function to add numbering to the 순번 column
function addSequenceNumbers() {
  // Get the tbody element
  var tbody = document
    .getElementById("data_table")
    .getElementsByTagName("tbody")[0];

  // Get all rows in the tbody
  var rows = tbody.getElementsByTagName("tr");

  // Iterate through the rows and add sequence number to the first cell
  for (var i = 1; i < rows.length - 2; i++) {
    var sequenceCell = rows[i + 1].getElementsByTagName("td")[0];
    sequenceCell.textContent = i;
  }
}

// Combined function to run both functions on window.onload
function onWindowLoad() {
  addSequenceNumbers();
}

// Call the combined function to add sequence numbers when the page loads
window.onload = onWindowLoad;
