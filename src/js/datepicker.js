import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';

export default function datepicker() {
    const elements = Array.from(document.querySelectorAll('.js-datepicker'));

    elements.forEach(element => {
        $(element)
            .datepicker({
                format: 'mm-dd-yyyy',
                container: '#picker-container',
                language: 'ru',
                autoclose: true
            })
            .on('show', function(e) {
                element.classList.add('datepicker-shown')
            }).on('hide', function(e) {
                element.classList.remove('datepicker-shown')
            });
    });
}
