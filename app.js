// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// Solve :
{
    const people = [
      { name: "Alice", age: 30, gender: "female" },
      { name: "Bob", age: 25, gender: "male" },
      { name: "Charlie", age: 35, gender: "male" },
    ];
  
    const getMaleNames = (people) => {
      return people
        .filter((person) => person.gender === "male")
        .map((person) => person.name);
    };
  
    console.log(getMaleNames(people)); // Output: ['Bob', 'Charlie']
  
    //   2.Task: Object Manipulation
  
    //   Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
  
    // solve :
    const books = [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    ];
  
    const getBookTitles = (books) => books.map((book) => book.title);
  
    console.log(getBookTitles(books)); // Output: ['The Great Gatsby', 'To Kill a Mockingbird']
  
    //   3.Task: Function Composition
  
    //   Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
  
    // Solve
    const square = (x) => x * x;
    const double = (x) => x * 2;
    const addFive = (x) => x + 5;
  
    const composedFunction = (x) => addFive(double(square(x)));
  
    console.log(composedFunction(3)); // Output: 23
  
    // 4.Task: Sorting Objects
  
    // Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
  
    const cars = [
      { make: "Toyota", model: "Corolla", year: 2010 },
      { make: "Ford", model: "Mustang", year: 2018 },
      { make: "Chevrolet", model: "Camaro", year: 2015 },
    ];
  
    const sortByYear = (cars) => cars.sort((a, b) => a.year - b.year);
  
    console.log(sortByYear(cars));
  
    //   5.Task: Find and Modify
  
    //   Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
  
    // Solve :
    {
      const people = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
      ];
  
      const updateAge = (people, name, newAge) => {
        people.forEach((person) => {
          if (person.name === name) person.age = newAge;
        });
      };
  
      updateAge(people, "Bob", 28);
      console.log(people);
    }
  }
  
  // 6.Task: Array Reduction
  
  // Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
  
  const numbers = [1, 2, 3, 4, 5, 6];
  
  const sumEvenNumbers = (numbers) => {
    return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  };
  
  console.log(sumEvenNumbers(numbers)); // Output: 12
  
  // 7.  Task: Leap Year Checker
  
  // Write a function that determines whether a given year is a leap year.
  
  // Example: Happy New Year
  
  // Solve : 
  const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
    
    console.log(isLeapYear(2024)); // Output: true
  //   8. Task: Unique Values
  
  //   Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.  
  {
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  
  const getUniqueValues = (numbers) => [...new Set(numbers)];
  
  console.log(getUniqueValues(numbers)); // Output: [1, 2, 3, 4, 5]
  }
  
  // 09. Task: Find Maximum Value:
  
  // Write a function that takes an array of numbers and returns the maximum value.
  
  // Solve :
  { 
  const numbers = [1, 2, 3, 4, 5];
  
  const findMaxValue = (numbers) => Math.max(...numbers);
  
  console.log(findMaxValue(numbers)); // Output: 5
  
  }
  
  
  // 10.Task: Advanced Sorting
  
  // Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
  
  // Solve :
  const students = [
      { name: 'Alice', grades: [85, 90, 88] },
      { name: 'Bob', grades: [70, 75, 72] },
      { name: 'Charlie', grades: [95, 92, 90] },
    ];
    
    const sortByAverageGrade = (students) => {
      return students.sort((a, b) => {
        const avgA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const avgB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
        return avgB - avgA;
      });
    };
    
    console.log(sortByAverageGrade(students));
    
  
  
  // 11. Task: Functional Programming - Reduce
  
  // Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
  
  // Solve :
  
  const items = [
      { quantity: 2, price: 10 },
      { quantity: 1, price: 15 },
      { quantity: 3, price: 7 },
    ];
    
    const calculateTotalValue = (items) => {
      return items.reduce((total, item) => total + item.quantity * item.price, 0);
    };
    
    console.log(calculateTotalValue(items)); // Output: 61