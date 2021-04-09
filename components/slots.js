Vue.component('slots', {
    template:`
    <div>
        <h2>Slots, Layout Example</h2>
        <div>
            <header>
            <p>nav</p>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
    `
}); 