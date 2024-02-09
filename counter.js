let htmlNumbers = document.getElementById("html-numbers");

let count = 0;

function increment(){
    count = count + 1;
    console.log("count")
    // count = htmlNumbers.innerText
    htmlNumbers.innerText = count;
};
function decrease(){
   if( count != 0 ){
    count = count - 1;
    console.log("count")
    // count = htmlNumbers.innerText
    htmlNumbers.innerText = count;
   }
    
};
function reremove(){
    count = 0;
    console.log("count")
    // count = htmlNumbers.innerText
    htmlNumbers.innerText = count;
};
