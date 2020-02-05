var num = document.querySelector("#numero"),
    result = document.querySelector("#sx"),
    parse_int = Math.pow(num.innerHTML, 2);

function laskeNelio(){
    result.innerHTML = 'Luvun ' + num.innerHTML +  ' neliö on ' + parse_int;
}

