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

async function PromiseAll(arr){
	const start = performance.now();
	try{
		const responses = await Promise.all(apiUrls.map(url => fetch(url)));
	    const data = await Promise.all(responses.map(res => res.json()));
	    const end = performance.now();
	    document.getElementById('output-all').innerText = (end - start).toFixed(2);
	} catch(err){
		console.log(err);
	}
}

async function PromiseAny(arr){
	const start = performance.now();
	try{
		 const responses = await Promise.any(apiUrls.map(url =>
	      fetch(url).then(res => {
	        if (!res.ok) throw new Error("Fetch failed");
	        return res.json();
	      })
	    ));
		const end = performance.now();
	    document.getElementById('output-any').innerText = (end - start).toFixed(2);
	} catch(err){
		console.log(err);
	}
}

PromiseAll(apiUrls);
PromiseAny(apiUrls);





