$(function(){
  setInterval(leer,3000)
});

function leer(){ 
  $('#conversaciones').load(leer.php)
  $('#conversaciones').scrollTop($('#conversaciones')[0].scrollHeight);
}

function escribir(){
     var mensaje = $('textarea').val();
     var usuario = $('input:text').val();
     $.ajax({
        type:"POST",
        url:"escribir.php",
        data:{"mensaje":mensaje,"usuario":usuario},
        success:function(){
            leer();
            $('#conversaciones').scrollTop($('#conversaciones')[0].scrollHeight);
        }
     })
}