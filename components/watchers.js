Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                console.log(user);
                this.user = `${user.email} ${user.gender}`;
            } catch(e) {
                //something went wrong 
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template:`
    <div>
        <h1>Watchers with Vuejs 2</h1>
        <button @click="randomUser">Get Random User</button>
        <p>New user: {{user}}</p>
        <p>Old user: {{oldUser}}</p>
    </div>
    `
});