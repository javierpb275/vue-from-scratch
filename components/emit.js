Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
    <div>
        <h1>Sending out events with Vuejs 2</h1>
        <p @click="">Click here to send out an event to the instance ROOT of Vuejs</p>
    </div>
    `
});