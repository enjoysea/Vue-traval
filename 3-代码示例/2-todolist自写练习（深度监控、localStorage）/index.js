let data = JSON.parse(localStorage.getItem('miaov-06-02')) || []

var vm = new Vue({
  el: '#app',
  data: {
    list: data,
    title: '',
    hash: 'all',
    beforeTitle: '', //记录点击编辑那一刻的title值
    editId: '' //记录正在编辑的数据的id
  },
  computed: {
    //isSelectedAll对应的并不是函数，对应的是get函数的返回值
    //只写一个函数，默认是get函数
    
    /*isSelectedAll(){
     
     // 以下两种方法都可以
     // return this.list.every(item => item.selected)
     return this.list.filter(item => item.selected).length === this.list.length
     }*/
    filterList(){
      switch (this.hash) {
        case 'all':
          return this.list;
          break;
        case 'active':
          return this.list.filter(item => !item.selected)
          break;
        case 'completed':
          return this.list.filter(item => item.selected)
          break;
        default:
          return this.list
      }
    },
    isSelectedAll: {
      get(){
        return this.list.filter(item => item.selected).length === this.list.length
      },
      set(newValue){
        this.list.forEach(item => item.selected = newValue)
      }
    },
    // 未选中的
    unSelectedLen(){
      return this.list.filter(item => !item.selected).length
    }
  },
  watch: {
    /*list(){ //[{selected},{}]
     localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
     }*/
    list: {
      deep: true,
      handler(){
        localStorage.setItem('miaov-06-02', JSON.stringify(this.list))
      }
    }
  },
  methods: {
    
    // 添加
    add(ev){
      if (this.title.trim() === '') return
      console.log(this.title)
      this.list.push({
        id: Date.now(),
        title: this.title,
        selected: false
      })
      this.title = ''
      //localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
    },
    
    //删除
    //可以用id，下标和元素本身删除
    remove(option){ //可以通过id找到下标
      // 通过下标删除
      // @click="remove(item.id)"
      // let index = this.list.findIndex(item => item.id === id)
      // this.list.splice(index, 1)
      
      // 通过元素本身删除
      //console.log(option)
      let index = this.list.findIndex(item => item === option)
      console.log(index)
      if (index !== -1) {
        this.list.splice(index, 1)
      }
      //localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
    },
    
    // 编辑
    editTodo(id, index){ //一个是id，一个是index
      this.editId = id
      // 也可以像上面那样通过id或元素来找下标
      this.$nextTick(() => {
        this.$refs.miaov[index].focus()
      })
      
      // 一种是传item，一种是传id过来
      let item = this.list.find(item => item.id === id)
      
      // 做个判断，如果不存在，找自身属性就报错了
      if (item) {
        this.beforeTitle = item.title
      }
      
      //点击isSelectedAll:1，发现并不是一个函数，对应的是值
      //console.log(this)
      //localStorage.setItem('miaov-06-02',JSON.stringify(this.list)) //要么就是向后端发请求
    },
    
    // 编辑完成
    editDone(item){
      if (item.title.trim() === '') {
        //console.log(this) //通过this 可以找到相关的方法
        console.log(item)
        //删除
        this.remove(item)
      }
      
      this.editId = '' //设置为空，让编辑状态消失
      //localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
    },
    
    // 取消编辑
    cancelEdit(item){
      this.editId = ''
      item.title = this.beforeTitle
      this.beforeTitle = ''
      //localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
    }
  },
  mounted(){
    /*
     hash值得几种情况
     1.不存在 默认是all
     2.超过了所规定的三个值，默认all
     3.正常情况
     */
    
    var filterHash = { // 写成数组也可以
      all: true,
      active: true,
      completed: true
    }
    
    var changeHash = () => { //这个函数可以放在methods中,但有牵扯到this指向问题
      //页面一上来，先去拿hash值，用来过滤数据
      var hash = window.location.hash;
      if (!hash) {
        hash = 'all'
      } else {
        hash = hash.slice(2)
        if (!filterHash[hash]) {
          hash = 'all'
          window.location.hash = '/' + hash
        }
      }
      
      //改变跟实例的数据
      this.hash = hash
      console.log(hash)
      
    }
    
    window.addEventListener('hashchange', changeHash)
    changeHash()
  }
})