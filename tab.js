function Tab(node) {
  this.$container = node
  this.init()
  this.bind()
}

Tab.prototype = {
  constructor: Tab,
  init(){
    this.$tab = this.$container.find('.tab')
    this.$content = this.$container.find('.content')
  },
  bind(){
    this.$tab.on('click','li',(e)=>{
      let index = $(e.target).index()
      $(e.target).addClass('active').siblings().removeClass('active')
      this.$content.find('li').eq(index).addClass('active').siblings().removeClass('active')
    })
  }
}

let tab1 = new Tab($('.tab-container'))
let tab2 = new Tab($('.tab-container2'))
