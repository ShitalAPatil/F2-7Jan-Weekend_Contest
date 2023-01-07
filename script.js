/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(printingThroghMap); // Each element is stored in "printingThroghMap" variable
    function printingThroghMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(printingThroghForEach); // Each element is stored in "printingThroghForEach" variable

  function printingThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.profession !== "admin") {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "siya", age: "22", profession: "Intern" },
    { id: 6, name: "ankita", age: "26", profession: "developer" },
    { id: 7, name: "veera", age: "29", profession: "Manager" },
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
