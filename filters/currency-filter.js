Vue.filter('currency_filter', (value, currency) => {
    return `${currency}${value}`
});