$(($)=>{
  console.log('HELLO express-vue')
  $('#sliderejemplo').slick({
    slidesToShow: 3
  });

  app = new Vue({
    el: '#app',
    data: {
      message: "old message"
    }
  })
  app.message = "new message"

})

