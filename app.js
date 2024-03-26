const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jasper",
      middleName: "",
      lastName: "Villarosa",
      url: "https://google.com",
      raw_Url: '<a href="google.com">Google</a>',
      age: 20,
      isPurple: false,
      selectedColor: "",
      size: 150,
      mode: 1,
      birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
      people: [
        { name: "John", age: 23 },
        { name: "Joseph", age: 22 },
        { name: "Jude", age: 20 },
      ],
      people2: [
        {
          name: "John",
          message: "Hello world!",
        },
        {
          name: "Rick",
          message: "I like pie.",
        },
        {
          name: "Amy",
          message: "Skydiving is fun!",
        },
      ],
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName() {
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    move() {
      const first = this.people2.shift();
      this.people2.push(first);
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed was called");

      return `${this.firstName.toUpperCase()} ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
    circleClasses() {
      return { purple: this.isPurple };
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 10000);
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Rommel";
}, 2000);
