function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; 
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b; 
  } else {
    return 0; // Or handle the error in a more appropriate way
  }
}

let result1 = add(5, 10); // Returns 15
let result2 = add("hello", " world"); // Returns "hello world"
let result3 = add(5, "10"); // Returns 15
let result4 = add("10", 5); // Returns 15