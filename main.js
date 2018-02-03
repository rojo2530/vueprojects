
const dictionary = {
    en: {
        messages: {
            confirmed: function () {
                return "Your password is not confirmed"
            },
            email: function () {
                return "I really dont like your email"
            }
        }
    }
};

Vue.use(VeeValidate,{
    fieldsBagName: 'vFields',
    locale:'en',
    dictionary: {
        es: {
            custom: {
                email: {
                    required: 'Your email is empty' // messages can be strings as well.
                },
                name: {
                    required: 'Your name is empty'
                }
            }
        }
    }
});

var app = new Vue({
    el: ".container",
    data: {
        name: ''
    }
});