Vue.component('props', {
    props: {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validator: value => {
                if (value < 18) {
                    console.warn('You are under age...');
                    return false;
                }
                return true;
            }
        }
    },
    template:`
    <div>
        <h2>Props with Vuejs 2</h2>
        <p>{{name}} {{surname}}, Age: {{age}}</p>
    </div>
    `
});