let celsius=document.getElementById("cesius");
let fahrenheit=document.getElementById("fahrenheit");

function celTofar(){

    let output=( parserFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function farToCel(){
    let output=(parserFloat(fahrenheit.value)-32) * 5/9;
    celsius.value= parserFloat(output.toFixed(2));
    console.log(output);
}
