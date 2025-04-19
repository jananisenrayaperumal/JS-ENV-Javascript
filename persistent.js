// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Given an array of integers nums, determine if there exists a pair of numbers that sum to a given target.
// Example:
// Input: nums = [10,13,4,6,8,1,3], target = 13
// Output: True (3 + 10 = 13)
// Input: nums = [10,13,4,6,8,1,3], target = 6
// Output: False
// Solve it in less than Quadratic Time complexity (On^2), 20 Min.
// https://www.programiz.com/javascript/online-compiler/
console.log("Try programiz.pro");

const targetSum = (nums, target) => {
    let myMap = new Map();
    
    for(let i=0; i<nums.length-1; i++){
        let x = target - nums[i];
        myMap.set(x, nums[i]);
        
    }
    console.log("false")
    return false;
}


targetSum([10,13,4,6,8,1,3], 100)

React from 'react'
import { useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'

function A() {
  console.log('A')
  return <B/>
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A state={state}/>
      <D/>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

App
A
B
C
D

App
A
B
C
D


const Form = () => {
const [value, setValue] = useState(2);
const onChange = (e) => {
console.log('before', value);
setValue(e.target.value);
console.log('after', value);  };
};

before 2
after 3

 
const Form = () => {
const ref = useRef(2);
const onChange = (e) => {
console.log('before', ref.current);
ref.current = e.target.value;
console.log('after', ref.current);
};
};

before 2
after 3



console.log("begins");
 
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);
 
new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
-----
begins
promise 2
setTimeout 1
promise 1
setTimeout 2
dot then 1
resolve 1
promise 1


----------
useCallback vs useMemo
write a code for both 


----------

const arr = [1,1,2,2,3,4,5,5];
----------
{
1: 2
2: 2
3: 1
4:1
5: 2

}

const removeDuplicate = (arr) => {
let obj = {};

for(let i=0; i<arr.length; i++){
  if(obj[arr[i]]){
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

return obj
  
}


console.log(removeDuplicate(arr));
----------

let start = Date.now();
 
console.log('- - - - script started', start)
 
const getArr1 = () =>{
  const arr1 = [
  { name: "Boris", age: 22 },
  { name: "Peter", age: 23 },
  { name: "Ivan", age: 27 },
  { name: "Anna", age: 5 },
  { name: "Tom", age: 42 },
  { name: "Amy", age: 23 },
  { name: "Anna", age: 22 },
  { name: "Boris", age: 19 }];
 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('arr1', Date.now() - start, 'ms')
      resolve(arr1);
    }, 500)
  })
}
 
const getArr2 = () => {
  var arr2 = [
  { name: "Boris", age: 40 },
  { name: "Peter", age: 23 },
  { name: "David", age: 27 },
  { name: "Boris", age: 3 },
  { name: "Anna", age: 31 },
  { name: "Boris", age: 47 },
  { name: "Amy", age: 35 },
  { name: "Sam", age: 22 },
  { name: "Boris", age: 31 }];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      console.log('arr2 runtime took', Date.now() - start, 'ms')
     resolve(arr2);
      }, 800)
    })
}
 
 
const solution =  async () => {
let arr1 = await getArr1();
let arr2 = await getArr2();
 
return [...arr1, ...arr2];
}

solution()

----------
React
API call and button click and show data
=> https://jsonplaceholder.typicode.com/users

app.js
import React, { useState } from 'react';
import './style.css';
import Button from './Button.js';

export default function App() {
  const [users, setUsers] = useState();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button setUsers={setUsers} />
      <div>
        {users &&
          users.map((user, i) => {
            return <div key={user.id}>{user.name}</div>;
          })}
      </div>
    </div>
  );
}

//btn comp, btn in app.js

button.js
import React from 'react';

function Button({setUsers}) {
  const handleClick = async () => {
    const res = fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res;
    const users = await data.json();
    setUsers(users);
    console.log(users);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Button</button>
    </div>
  );
}

export default Button;
----------
