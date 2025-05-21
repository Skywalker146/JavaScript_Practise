const evenNumbers =[2,4,6,8,10];

evenNumbers.shift(); // removes the first element

evenNumbers.unshift(0); // adds an element to the beginning

const animals= ['cat','dog','fish'];

evenNumbers.concat(animals); // combines two arrays

const addedarray1 =evenNumbers.concat(animals);
const addedarray2 = [...evenNumbers,...animals]; // using spread operator


Animals.reverse(); // reverses the order of the array

animals.slice(1,3); // removes elements from the array starting at index 1 and ending at index 3 
animals.slice(1); // removes elements from the array starting at index 1 to the end of the array
animals.splice(1,2); // removes elements from the array starting at index 1 and removing 2 elements