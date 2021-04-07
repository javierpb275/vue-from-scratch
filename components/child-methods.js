Vue.component('child-methods', {
    data() {
        return {
            cmpName: 'Child Methods CMP'
        }
    },
    methods: {
        showCmpName() {
            console.log(this.cmpName);
        }
    },
    template:`
    <div>
    <h2>Accessing methods from child component using references</h2> 
    </div>
    `
});