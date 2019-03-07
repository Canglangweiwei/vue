Vue.component("greeting", {
  template: `<p>
              {{name}}大家好啊
              <button @click="changeName">换一下名字</button>
            </p>`,
  data: function () {
    return {
      name: "魏巍"
    }
  },
  methods: {
    changeName() {
      this.name = "ssss"
    }
  }
});

new Vue({
  el: "#app"
}); 