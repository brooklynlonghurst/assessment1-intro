// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
let season = "winter" //string bc of double quote
const food = 'sushi' //const constant ,cannot change. can also use single quote
let color = `red`; // back tick 
let hotSauceSpicy = true //boolean
let spinachIsFruit = false //boolean

color = `green` // changing variable without declaring it again

let pizza = null // undefined
let number = 1 // number
// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguages = ['javascript', 'java', 'python', 'swift'] // array has square brackets []



/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE
codingLanguages[2] //arrays have index of 0 i.e. index: [0,1,2,3,4]

/*
    Copy the array using one of the arrays built in functions, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguage2 = codingLanguages.slice(0, codingLanguages.length)
console.log(codingLanguage2)
/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguage2.push("C#") //add variable to the end

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop() //removes at the end 

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift() //removes variable fromt the beginning
console.log(instruments)
/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift("guitar") //
console.log(instruments);
/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, "glockenspiel")
console.log(instruments)

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/
// if(){

// } else if(){

// } else {

// }
// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if(num % 2 === 0){
    console.log(num)
} else {
    console.log("num is not an even number")
}
// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if(score <= 10){
    console.log("Failed.")
} else if(score > 10 && score < 41){
    console.log("The grade is C.")
} else if(score > 40 && score < 71){
    console.log("The grade is B.")
} else {
    console.log("The grade is A.")
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0
for(let i = 0; i < price.length; i++){
    totalPrice += price[i] //total = total + price[i]
}
console.log(totalPrice)

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let average = totalPrice / price.length
console.log(average) 

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for(let i = 0; i < colors.length; i++){
    if(colors[i] === "red"){
        console.log("apple")
    }else if(colors[i] === "green"){
        console.log("melon")
    }else if(colors[i] === "yellow"){
        console.log("banana")
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git // "verison control"
        -- github // "website that can store snapshot of code"
        -- git init // initalize repository 
        -- git clone // copies from the server 
        -- git status // checking on the file 
        -- git add . // stages your file for commit 
        -- git commit -m "message" // commits file to GitHub 
        -- git push // send it off to GitHub
    - How to push git to github
*/

