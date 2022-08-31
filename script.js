$(function(){
  setInterval(leer,3000)
});

function leer(){ 
  $('#conversaciones').load(leer.php)
}

function escribir(){

}