var app = new Vue({
  el: '#app',
  data: {
    msg: 'Pokemon Ranger',
    list:[]
  },

  methods: {
    getApi: function () {
      var url = 'http://www.pokesnipers.com/api/v1/pokemon.json'
      var that =this
      this.$http.get(url).then(function (res) {
        this.list = res.data.results
        console.log(that.list);
      })
    }
  },
    ready:function(){
        this.getApi()
          var that1 = this
      setInterval(function(){

        that1.getApi()
      },2000)
    }
})
console.log(app)
