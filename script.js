let codes = document.getElementById("codes");
let remove_code = document.getElementById("remove_code");
let run_code = document.getElementById("run_code");
let result = document.getElementById("result");

onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
    result.innerHTML = codes.value;
}

run_code.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT", codes.value);    
}

remove_code.onclick = ()=>{
    result.innerHTML = "";
}