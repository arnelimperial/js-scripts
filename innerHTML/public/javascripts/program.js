var a = 'Muokkaa minua!', b = 'JavaScript on helppoa ja hauskaa!';
var t = document.getElementById("text");

function func(){
  console.log(document.getElementById('text').innerHTML);

  if (document.getElementById("text").innerHTML === a) {
    t.innerHTML = b;

  }else if (document.getElementById("text").innerHTML === b) {
    t.innerHTML = a + ('revert back!');
  }else if (document.getElementById("text").innerHTML === a + ('revert back!')) {
    t.innerHTML = a;
  }

}