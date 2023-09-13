window.addEventListener('DOMContentLoaded', function() {

    // Инпут маска для теллефона (+7(000))

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    // JustValidate

    let validation = new JustValidate('#form', {
        errorLabelStyle: {
            color: '#D11616',

        },

    })

    validation.addField("#name", [{
            rule: 'required',
            errorMessage: 'Введите имя'
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Минимум 2 символа'
        }
    ])

    .addField("#phone", [{
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phone) && phone.length > 0)
            },
            errorMessage: 'Введите телефон'
        },
        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phone) && phone.length == 10)
            },
            errorMessage: 'Введите телефон полность'
        }
    ]);


});