

const quotes=[{
    quote: "We're not free in what we do, because we're not free in what we want.",
    author: "-Jonas (Dark)"
},{
    quote: "Why do we fall, Sir? So that we can learn to pick ourselves up.",
    author: "-Alfred Pennyworth"
},{
    quote: "Perhaps it is good to have a beautiful mind, but an even greater gift is to discover a beautiful heart.",
    author: "-John Nash"
},{
    quote: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.",
    author: "-Alan Turing"
},{
    quote: "You see in their last moments, people show you who they really are.",
    author: "-Joker"
},{
    quote: "Everything will be fine in the end and if it isn't, it's not the end yet.",
    author: "-Rick Sanchez"
},{
    quote: "We all pay for our choices.",
    author: "-Stick (Daredevil)"
},{
    quote: "A wise man gets more from his enemies than a fool from his friends.",
    author: "-Nicky Lauda"
},{
    quote: "The sacrifice...that's the price of a good trick",
    author: "-Alfred Borden"
},{
    quote: "It is our choices, that show what we truly are, far more than our abilities.",
    author: "-Albus Dumbledore"
},{
    quote: "Love is the one thing capable of perceiving that transcends dimensions of time and space.",
    author: "-Dr. Amelia Brand"
},{
    quote: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
    author: "-Roger Kint"
},{
    quote: "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.",
    author: "-APJ Abdul Kalam"
}
]

let btn1= document.querySelector("#button1");
let btn2= document.querySelector("#button2");
let btn3= document.querySelector("#button3");
let btn4= document.querySelector("#button4");

let quote= document.querySelector(".quo");
let author= document.querySelector(".author");
let box=document.querySelector(".wrapper");
let head=document.querySelector("header");


function quotegen(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
}
quotegen();

btn1.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#EBF2FA";
    quote.style.color="black";
    author.style.color="black";
    head.style.color="black";
    head.style.fontFamily="Itim";
    author.style.fontFamily="Itim";
    quote.style.fontFamily="Itim";
    wrapper.style.border="2px solid black"  
})

btn2.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#BBDEFB";
    head.style.color="#273469";
    quote.style.color="#273469";
    author.style.color="#1565C0";
    author.style.fontFamily="Playfair Display";
    quote.style.fontFamily="Playfair Display";
    head.style.fontFamily="Playfair Display"; 
    wrapper.style.border="2px solid navy"  
})

btn3.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#001D4A";
    quote.style.color="white";
    author.style.color="white";
    head.style.color="white";
    head.style.fontFamily="Oswald";
    author.style.fontFamily="Oswald";
    quote.style.fontFamily="Oswald";
    wrapper.style.border="2px solid white" 
})

btn4.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#30343F";
    quote.style.color="white";
    author.style.color="white";
    head.style.color="white";
    head.style.fontFamily="Teko";
    author.style.fontFamily="Teko";
    quote.style.fontFamily="Teko";
    quote.style.fontSize="30px";
    wrapper.style.border="2px solid grey" 
})


const unitSelect = document.getElementById("unit");
const inputValue = document.getElementById("input");
const submit = document.getElementById("submit");
const outputValue = document.getElementById("output");

submit.addEventListener("click", function() {
    const selectedUnit = unit.value;
    let result;

    if (selectedUnit === "lbtokg") {
        result = inputValue.value * 0.45359237;
        document.querySelector('#output').value = result.toFixed(2)+"kg";
    } else {
        result = inputValue.value * 2.20462;
        document.querySelector('#output').value = result.toFixed(2)+"lb";
    }
});



const number = document.getElementById("number");
const maxnum = document.getElementById("max");
const minnum = document.getElementById("min");
const sum = document.getElementById("sum");
const average = document.getElementById("average");
const reverse = document.getElementById("reverse");

number.addEventListener("input",function(){
    const numval=number.value;
    const allnum= numval.split(",").map(Number);
    maxnum.innerHTML = "Max: " + Math.max(...allnum);
    minnum.innerHTML = "Min: " +Math.min(...allnum);

    let summation=allnum.reduce(function(previous, current){
        return previous + current;},0);
    sum.innerHTML="Sum: " +summation;
    average.innerHTML="Average: " +summation/allnum.length;
    
    reverse.innerHTML="Reverse: " +allnum.reverse();
    
})

const textArea = document.getElementById("text-area");
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
    textArea.value = "";
});


const capitalize = document.getElementById("capitalize-button");
capitalize.addEventListener("click", function() {
    if(textArea.value===textArea.value.toLocaleUpperCase()){
        textArea.value=textArea.value.toLocaleLowerCase();
    } else{
        textArea.value = textArea.value.toUpperCase();
    }
    
});

const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", function() {
    let lines = textArea.value.split("\n");
    let line2=[];

    for (let i=0;i<lines.length;i++){
        sorted=lines[i].split(" "); 
        sorted.sort();
        sortedline=sorted.join(" ");
        console.log(sortedline);
        line2.push(sortedline);
    }

    line2.sort();
    console.log(line2);
    textArea.value = line2.join("\n");
});



const reverseButton = document.getElementById("reverse-button");
reverseButton.addEventListener("click", function() {
    let lines = textArea.value.split("\n");
    let line2=[]
    for (let i=0;i<lines.length;i++){
        rev=lines[i].split(" "); 
        rev.reverse();
        console.log(rev)
        reversedline=rev.join(" ");
        line2.push(reversedline);
    }
    textArea.value = line2.join("\n");
});


const stripButton = document.getElementById("strip-button");
stripButton.addEventListener("click", function() {
    let lines = textArea.value.split("\n");
    let strippedLines = lines.filter(function(value) {
        return value.trim() !="";
        });
    for (let i=0;i<strippedLines.length;i++){
        strippedLines[i]=strippedLines[i].split(" ").join("");
        };
    textArea.value = strippedLines.join("\n");
});


const lineNumbersButton = document.getElementById("line-numbers-button");
lineNumbersButton.addEventListener("click", function() {
    let lines = textArea.value.split("\n");
    let numberedLines = lines.map(function(line, index) {
    return (index + 1) + ". " + line;
    });
    textArea.value = numberedLines.join("\n");
});

const shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", function() {
    let lines = textArea.value.split("\n");
    for (let i = lines.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    textArea.value = lines.join("\n");
});



