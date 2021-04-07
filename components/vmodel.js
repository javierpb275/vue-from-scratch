Vue.component('vmodel', {
    data() {
        return {
            framework: 'Vuejs 2'
        }
    },
    template:`
    <div>
        <h2>Working with vmodel</h2>
        <input v-model="framework"/>
        <p>The chosen framework is: {{framework}}</p>
    </div>
    `
})