
// Basic Problems
//1. Reverse a string without using .reverse()
const strReverse = (str) => {
  if(str === "") return str;
  return str[str.length-1] + strReverse(str.slice(0, -1))
}

//2. Check if a given string is a palindrome
const palindrome1 = (str) => {
  return str.split("").reverse().join("") === str
}
const palindrome2 = (str) => {
  let result = "";
  let len = str.length;
  for(let i=0; i<len/2;i++){
    if(str[i] !== str[len-i-1]){
      return false
    }
  }
return true;
}

//3. Find the factorial of a number
//5! = 5*4*3*2
const factorial = (n) =>{
  if(n === 0 || n === 1) return 1;
  return n * factorial(n-1)
}

//4. Find the largest number in an array
const findMax = (arr) => {
  return arr.reduce((max, num)=> num > max ?  num : max, 0)
}

//5. Remove duplicates from an array
const removeDuplicate1 = (arr) =>{
  return [...new Set(arr)]
}
const removeDuplicate2 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

//6. Find the missing number in an array of 1 to N
const findMissing = (arr) => {
  const n = arr.length;
  let expectedSum = (n+1)*(n+2)/2;
  let actualSum = arr.reduce((sum, num) => sum + num , 0);
  return expectedSum - actualSum
}

//7. Check if two strings are anagrams
const checkAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("") 
}

// 8. Find the first non-repeating character in a string
const firstNonRepeatingChar1 = (str) => {
  let obj = {};
    for(let char of str){
      if(obj[char]){
        obj[char] = obj[char] + 1;
      } else {
          obj[char] = 1;
      }
    }

  for(let char of str){
    if(obj[char] === 1){
      return char
    }
  }
}

const firstNonRepeatingChar2 = (str) =>{
    let myMap = new Map();
  
    for(let char of str){
      myMap.set(char, (myMap.get(char) || 0) + 1)
    }

    for(let char of str){
        if(myMap.get(char) === 1) {
            return char
        }
    }
}


// 9. Count the occurrences of each character in a string
const charAccourance = (str) => {
    let obj = {};

    for(let char of str){
        obj[char] = (obj[char] || 0) + 1;
    }

    for(let char of str){
        console.log(char, obj[char])
    } 
}

// 10. Flatten a nested array
const flattern = (arr) => {
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
           result.push(...flattern(item))
        } else {
            result.push(item)
        }
    }
    return result;
}
arr.flat(Infinity)

// Array and Object Manipulation
// 11. Implement a deep copy of an object
const deepCopy1 = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
const deepCopy2 = (obj) => {
    return structuredClone(obj)
}


// 12. Merge two sorted arrays
const mergeArr1 = (arr1, arr2) => {
    let array = [...arr1, ...arr2]
    return array.sort((a,b) => a -b)
}

const mergeArr2 = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a,b) => a -b)
}

const mergeArr3 = (arr1, arr2) => {
    let result = [];
    let i =0,  j =0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    return result.concat(arr1.slice(i), arr2.slice(j))
}

// 13. Find the intersection of two arrays
// 14. Group an array of objects by a property
// 15. Convert an array of objects into an object based on a key
// 16. Remove falsy values from an array
// 17. Find the second largest number in an array
// 18. Implement a function similar to Array.prototype.map()
Array.prototype.myMap = function(logic){
    let result = [];
    for(let i=0; i<this.length;i++){
        result.push(logic(this[i], i, this))
    }
    return result
}

// 19. Implement a function similar to Array.prototype.filter()
Array.prototype.myFilter = function(logic){
    let result = [];
    for(let i =0; i<this.length;i++){
        if(logic(this[i], i, this)) {
            result.push(this[i])
        }
    }
   return result
}

// 20. Implement a function similar to Array.prototype.reduce()



// Functions and Closures
// 21. Explain and implement a closure example



// 22. Create a function that adds a number to itself using currying



// 23. Implement a debounce function
const debounce = (func, delay) => {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}


// 24. Implement a throttle function
const throttle = (func, delay) => {
    let timer;
    let flag = true;
    return function(...args){
        if(flag){
            func.apply(this, args);
            flag = false; 
        }
        timer = setTimeout(() => {
            flag = true; 
        }, delay)
    }
}



// 25. Implement a memoization function

// Asynchronous JavaScript
// 26. Implement a function that fetches data using fetch() and handles errors
// 27. Create a function that executes an array of promises in sequence
// 28. Implement a function that retries an API call N times before failing
// 29. Implement a custom Promise.all() function
// 30. Implement a function that limits the number of concurrent API calls

// Object-Oriented JavaScript & Prototypes
// 31. Implement a class-based counter with increment and decrement methods


// 32. Explain prototypal inheritance and create an example
// 33. Implement a singleton pattern in JavaScript
// 34. Create a mixin function that extends an object
// 35. Implement a simple event emitter

// Higher-Order Functions & Functional Programming
// 36. Implement a function that takes another function and executes it after a delay


// 37. Implement a pipeline function that executes multiple functions in sequence
// 38. Write a function that converts a nested object into a flat object


// 39. Implement a function that finds the longest word in a sentence


// 40. Write a function to shuffle the elements of an array randomly

