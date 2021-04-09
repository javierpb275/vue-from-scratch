Vue.component('load-dynamic-components', {
    data() {
        return {
            components: ['cmp1', 'cmp2', 'cmp3'],
            currentComponent: 'cmp1'
        }
    },
    methods: {
        changeComponent(cmp) {
            this.currentComponent = cmp;
        }
    },
    template:`
    <div>
        <h2>Dynamic Components</h2>
        <button v-for="cmp in components" :key="cmp" @click="changeComponent(cmp)">
        Select {{cmp}}
        </button>
        <component :is="currentComponent"/>
    </div>
    `
}); 