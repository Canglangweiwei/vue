var vm = new Vue({
  el: "#app",
  data: {
    changeColor: false,
    changeLength: false
  },
  methods: {},
  // 联动
  computed: {
    compClasses: function () {
      return {
        changeColor: this.changeColor,
        changeLength: this.changeLength
      }
    }
  }
});