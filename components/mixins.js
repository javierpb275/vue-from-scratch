let myMixin = {
    mounted() {
        console.log("MIXIN init");
        console.log(this.mixinData);
        this.test();
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        }
    },
    methods: {
        test() {
            console.log("Test from mixin");
        }
    }
};

Vue.component('mixins', {
    mixins: [myMixin],
    mounted() {
        console.log('Mounted from component with mixin');
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        }
    },
    template:`
    <div>
        <h2>Using Mixins</h2>
        <p>{{mixinData}}</p>
    <div>
    `
}); 