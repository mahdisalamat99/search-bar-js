const input = document.getElementById("input");
input.addEventListener("keyup" , searchFunc);

function searchFunc (){
    const inputVal = input.value;
    console.log(inputVal)
    const li = document.getElementsByTagName("li");
    for(let i = 0 ; i <li.length ; i++){
        if(li[i].innerHTML.toLowerCase().includes(inputVal)){
            li[i].style.display = "";
        } else{
            li[i].style.display = "none"
        }
    }
}