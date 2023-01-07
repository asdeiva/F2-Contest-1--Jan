/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr2 = [
{ id: 11, name: "aaa", age: "28", profession: "tester" },
  { id: 12, name: "bbb", age: "22", profession: "webdev" },
  { id: 13, name: "ccc", age: "35", profession: "accountant" },
];

function PrintDeveloperswithMap() {
  //Write your code here
}

function PrintDeveloperbyForEach() {
  //Write your code here
}

function addData() {
  //Write your code here
  let arr4 = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(arr4);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here
arr.pop({id:3, name:"karen", age:"19",profession:"admin"})
console.log(arr);
}

function concatenateArray() {
  //Write your code here
let children = arr.concat(arr2);
console.log(children);
}
