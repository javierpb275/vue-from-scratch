Vue.component('message', {
    data() {
        return {
            message: 'Hola Mundo'
        }
    },
    template: `
    <div>
    <h1>Message Component</h1>
    <p>{{message}}</p>
    </div>
    `
});