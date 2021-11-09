document.addEventListener('DOMContentLoaded', () => {
    var demoForm = document.querySelector('#demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(demoForm)
                    .parsley()
                    .isValid()
            ) {
                let options = {
                    success: function(data){
                        if (data.ID > 0) {
                            demoForm.reset();
                            $(demoForm)
                                .parsley()
                                .reset();
                            if (typeof window.openModal === 'function') {
                                window.openModal('#demo-success');
                            }
                        } else {
                            if (typeof window.openModal === 'function') {
                                window.openModal('#demo-failure');
                            }
                        }
                    },
                    dataType:  'json',
                };

                $(demoForm).ajaxSubmit(options);
            }
        });
    }

    var registrationForm = document.querySelector('#registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(registrationForm)
                    .parsley()
                    .isValid()
            ) {
                let options = {
                    success: function(data){
                        if (data.ID > 0) {
                            registrationForm.reset();
                            $(registrationForm)
                                .parsley()
                                .reset();
                            if (typeof window.openModal === 'function') {
                                window.openModal('#registration-success');
                            }
                        } else {
                            if (typeof window.openModal === 'function') {
                                window.openModal('#demo-failure');
                            }
                        }
                    },
                    dataType:  'json',
                };

                $(registrationForm).ajaxSubmit(options);
            }
        });
    }

    var vacancyForm = document.querySelector('#vacancy-form');
    if (vacancyForm) {
        vacancyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(vacancyForm)
                    .parsley()
                    .isValid()
            ) {
                let options = {
                    success: function(data){
                        if (data.ID > 0) {
                            vacancyForm.reset();
                            $(vacancyForm)
                                .parsley()
                                .reset();
                            vacancyForm.classList.add('success');

                            setTimeout(function() {
                                vacancyForm.classList.remove('success');
                            }, 3000);
                        } else {
                            if (typeof window.openModal === 'function') {
                                window.openModal('#demo-failure');
                            }
                        }
                    },
                    dataType:  'json',
                };

                $(vacancyForm).ajaxSubmit(options);
            }
        });
    }
});
