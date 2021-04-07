Vue.component('methods', {
    data() {
        return {
            name: 'john',
            surname: 'smith'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
       hello () {
           alert(this.fullName);
       } 
    },
    template: `
    <div>
        <h1>Executing methods with Vue.js</h1>
        <p @click="hello">Click here to execute the hello() method</p>
    </div>
    `
});