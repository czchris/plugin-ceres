Vue.component("order-return", {

    props: [
        "orderData",
        "template"
    ],

    data()
    {
        return {
            isDisabled: true
        };
    },

    created()
    {
        this.$options.template = this.template;

        console.log(this.orderData);
    },

    methods:
    {

    }
});