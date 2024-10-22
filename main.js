// 1. is number in range?

function isNumberInRange(number, min, max) {
  if ((number >= min) & (number <= max)) {
    return true;
  } else {
    return false;
  }
}

console.log(`1. ${isNumberInRange(0, 1, 3)}`);

// 2. ends with "ing"?

function endsWithIng(str) {
  if (str.slice(-3).toLowerCase() === "ing") {
    return true;
  } else {
    return false;
  }
}

console.log(`2. ${endsWithIng("ALAN TURING")}`);

// 3. starts with "the"

function startsWithThe(str) {
  if (str.slice(0, 3).toLowerCase() === "the") {
    return true;
  } else {
    return false;
  }
}

console.log(`3. ${startsWithThe("tehello")}`);

// 4. is firt letter lower case?

function isFirstLetterLowercase(str) {
  if (str === "") {
    return false;
  }

  return str[0] === str[0].toLowerCase();
}

console.log(`4. ${isFirstLetterLowercase("hello")}`);

// 5. cheaper than

function cheaperThan(arr, num) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("5.", cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 20));

// 6. wordsThatEndWithIng

function wordsThatEndWithIng(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].slice(-3) === "ing") {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(
  "6.",
  wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])
);

// 7. numbersDivisibleBy3

function numbersDivisibleBy3(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) result.push(arr[i]);
  }
  return result;
}

console.log("7.", numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 8. onlyLongWords

function onlyLongWords(str) {
  let words = str.split(" ");
  let result = "";

  for (i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      result += words[i] + " ";
    }
  }
  return result.trim();
}

console.log("8.", onlyLongWords("welcome to wikipedia"));

// 9. addLeadingZero

function addLeadingZero(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      result.push("0" + arr[i].toString());
    } else {
      result.push(arr[i].toString());
    }
  }
  return result;
}

console.log("9.", addLeadingZero([0, 1, 2, 3, 10, 11, 12]));

// 10. cutStrings

function cutStrings(arr, num) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      result.push(arr[i].slice(0, num) + "...");
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(
  "10.",
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "Moin",
    ],
    10
  )
);

// 11. duration in hours

function durationInHours(arr) {
  result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(Math.floor(arr[i] / 60));
  }
  return result;
}

console.log("11.", durationInHours([120, 60, 80, 90, 100, 50, 20, 180]));

// 12. reverse words

function reverseWords(arr) {
  result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i].split("").reverse().join(""));
  }
  return result;
}

console.log("12.", reverseWords(["cat", "shoe", "one", "sos", "hello"]));

// 13. count consonants

function countConsonants(str) {
  const alphabet = "bcdfghjklmnpqrstvwxyz";
  counter = 0;
  for (i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}
console.log("13.", countConsonants("be right back"));

// 14. sum even numbers

function sumEvenNumbers(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    }
  }
  return result;
}

console.log("14.", sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// 15. count by color

function countByColor(arr) {
  let result = [];
  let redCounter = 0;
  let yellowCounter = 0;
  let greenCounter = 0;
  for (i = 0; i < arr.length; i++)
    if (arr[i].toLowerCase().includes("red")) {
      redCounter++;
    } else if (arr[i].toLowerCase().includes("yellow")) {
      yellowCounter++;
    } else if (arr[i].toLowerCase().includes("green")) {
      greenCounter++;
    }
  result.push(redCounter);
  result.push(yellowCounter);
  result.push(greenCounter);

  return result;
}

console.log(
  "15.",
  countByColor(["red pen", "yellow shirt", "green salad", "yellow piano"])
);

// Alternative Lösung mit switch/case:

// function countByColor(arr) {
//     let result = [0, 0, 0]; // Initialisiere das Ergebnisarray mit drei Werten
//     for (let i = 0; i < arr.length; i++) {
//       // Hier wird angenommen, dass die Objekte ein `color`-Property haben
//       switch (arr[i].toLowerCase()) {
//         case "red":
//           result[0]++;
//           break;
//         case "yellow":
//           result[1]++;
//           break;
//         case "green":
//           result[2]++;
//           break;
//       }
//     }
//     return result;
//   }

// 16. sumEvenOdd

function sumEvenOdd(arr) {
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[0] += arr[i];
    } else {
      result[1] += arr[i];
    }
  }
  return result;
}

console.log("16.", sumEvenOdd([1, 2, 3, 4, 5, 6]));
