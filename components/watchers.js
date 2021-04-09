Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    mounted() {
        this.randomUser()
    },
    methods: {
        async randomUser() {
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            console.log(json);
        }
    },
    template:`
    <div>
        <h2>Watchers with Vuejs 2</h2>
    </div>
    `
});