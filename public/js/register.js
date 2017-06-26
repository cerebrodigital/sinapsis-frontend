$(($)=>{
  console.log('HELLO express-vue')

  app = new Vue({
    el: '#app',
    data: {
      message: "old message"
    }
  })
  app.message = "new message"
})

