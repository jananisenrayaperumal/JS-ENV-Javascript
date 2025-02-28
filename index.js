var obj3 = {
	fname: "Echo",
	lname: "Fox"
};

var obj2 = {
	fname: "Cat",
	lname: "Dog"
};

var obj1 = {
	fname: "Alex",
	lname: "Babu"
};
var myInfo = {
	fname: "Jan",
	lname: "Sen",
	printMyName: function(param1) {
		console.log(this.fname + " " + this.lname + " " + param1);
	}
};

myInfo.printMyName("Hello");
myInfo.printMyName.call(obj1, "Hi");
myInfo.printMyName.apply(obj2, ["Meow", "Hi"]);
console.log(myInfo.printMyName.bind(obj3, "Meow")());
console.log(myInfo.printMyName.bind(obj1, "hi")());
console.log(myInfo.printMyName.bind(obj1, ["hello"])());
