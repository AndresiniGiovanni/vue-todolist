const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
      },
      hasError: false,
      list: [
        {
          text: "Studiare",
          done: "true",
        },
        {
          text: "Cucinare",
          done: "false",
        },
        {
          text: "Fare la spesa",
          done: "false",
        },
        {
          text: "Controllare le email ",
          done: "true",
        },
      ],
    };
  },
  methods: {
    addElement() {
      let newEl = {};

      for (let key in this.newTask) {
        newEl[key] = this.newTask[key];
      }
      if (this.newTask.text.length >= 2) {
        this.list.unshift(newEl);

        this.hasError = false;
      } else {
        this.hasError = true;
      }
      this.newTask.text = "";
    },

    removeTask(i) {
      this.list.splice(i, 1);
    },
  },
  mounted() {},
}).mount("#app");
