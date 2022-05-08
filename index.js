const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const tryMe = tutorials.map((title) => {
    let newTitle = "";
    const newArray = [];
    for (let i = 0; i < title.length; i++) {
     if (i === 0) {
        //console.log(title[i]);
       newTitle += title[0].toUpperCase();
        //console.log(newTitle);
     }
     else if (title[i-1] === " ") {
        newTitle += title[i].toUpperCase();
     }
     else {
        //console.log(title[i]);
       newTitle += title[i];
       //console.log(newTitle);
      }
   }
   return newTitle;
  })
  return tryMe;
}
