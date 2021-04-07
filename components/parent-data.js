Vue.component('parent-data', {
    template:`
    <div>
    <h2>Accessing data from parent component</h2> 
    <p>{{$parent.appName}}</p>
    </div>
    `
});