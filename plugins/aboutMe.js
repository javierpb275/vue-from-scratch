const AboutMe = {
    install: (Vue, options) => {
        const { job } = options;
        Vue.prototype.$me = (name, age) => {
            return `Mi name is ${name}, I'm ${age} years old. My job is: ${job}`;
        }
    }
}

Vue.use(AboutMe, {
    job: 'developer'
});