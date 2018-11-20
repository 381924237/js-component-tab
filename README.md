# Tab组件

## 组件功能

点击不同tab按钮进行对应内容的切换，以及tab按钮的变化；

## 组件实现方式

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
    
通过构造函数的方式，创建函数的实例，将函数的prototype视为公共容器，将相应的功能添加进去；在创建实例的时候，引用prototype中的功能；

## 如何使用

    let tab1 = new Tab($('.tab-container'))
    let tab2 = new Tab($('.tab-container2'))
    
创建实例，参数为父容器；
