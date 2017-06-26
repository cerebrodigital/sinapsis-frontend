$(($)=>{
  console.log('Haciendo login')
  $('#conectar').submit(function(e){
    e.preventDefault();
    console.log("Ahora si conectando");
    data = $('#conectar').serialize();
    $.post('http://localhost:3003/auth/login', data, function(res) {
      console.log("dando click en conectar", res);
      window.location ="/";
    });

  })

})

