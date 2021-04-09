Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatted: {
            get() {
                return `${this.amount}`;
            },
            set(newValue) {
                this.amount = newValue;
            }
        } 
    },
    template: `
    <div>
        <h1>Computed Properties gettters and setters</h1>
        <input v-model="amount"/>
        <p>{{amountFormatted | currency_filter('$')}}</p>
    </div>
    `
}); 