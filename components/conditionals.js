Vue.component('conditionals', {
    data() {
        return {
            age: 10
        }
    },
    template:`
    <div>
    <h2>Conditionals with v-if</h2>
    <input v-model="age"/>
    <p v-if="age < 18">Under age</p>
    <p v-else-if="age >= 18 && age < 30">Over age and under 30</p>
    <p v-else-if="age >= 30 && age < 65">Over 30 and under 65</p>
    <p v-else>You are retired</p>
    </div>
    `
}); 