// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
// You can write your code here

let start = performance.now();
function PromiseAll(arr){
	let outputAll = document.getElementById("output-all");
	Promise.all(arr).then(res => {
		let end = performance.now();
		let timeTaken = end - start;
		outputAll.textContent = timeTaken;
	}).catch(err => {
		console.log(err);
	})
}

function PromiseAny(arr){
	let outputAny = document.getElementById("output-any");
	Promise.any(arr).then(res => {
		let end = performance.now();
		let timeTaken = end - start;
		outputAny.textContent = timeTaken;
	}).catch(err => {
		console.log(err);
	})
}

PromiseAll([...apiUrls]);
PromiseAny([...apiUrls]);





