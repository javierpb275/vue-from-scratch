Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
    <div>
        <h1>Sending out events with Vuejs 2</h1>
        <p @click="$emit('showcarbrand', carBrand)">
        Click here to send out an event to the instance ROOT of Vuejs
        </p>
    </div>
    `
});