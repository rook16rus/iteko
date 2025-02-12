import { Navigation, Swiper, Mousewheel } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);

export default function solutionHistoryIteko() {
    const elements = Array.from(document.querySelectorAll('.solution-history'));

    elements.forEach(element => {
        const annotationsArr = Array.from(element.querySelectorAll('.solution-history__annotation-item'));

        const yearsListWrapper = element.querySelector('.solution-history__years-list-wrapper');
        const yearsActiveList = element.querySelector('.solution-history__years-active');

        const yearsList = element.querySelector('.solution-history__years-list-container');
        const annotationsList = element.querySelector('.solution-history__annotations-list-container');

        // добавить года в навигацию и ленту больших цифр
        annotationsArr.forEach(yearBtn => {
            const year = yearBtn.value;

            yearsListWrapper.innerHTML += `
            <button type="button" class="solution-history__year-item swiper-slide" value="${year}">${year}</button>
            `;

            yearsActiveList.innerHTML += `
        <div class="solution-history__year">
            <div class="solution-history__year-up-number-wrapper">${year.slice(0, 2)}</div>
            <div class="solution-history__year-down-number-wrapper">${year.slice(2, 4)}</div>
        </div>
        `;
        });

        const yearsArr = Array.from(element.querySelectorAll('.solution-history__year-item'));
        const yearUpNumber = element.querySelector('.solution-history__year-up-number-wrapper');
        const yearDownNumber = element.querySelector('.solution-history__year-down-number-wrapper');

        const swiperYears = new Swiper(element.querySelector('.solution-history__years-list-container'), {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 20,
            mousewheel: true,
            centeredSlides: true,
            centerSlidesBounds: true,
            breakpoints: {
                768: {
                    slidesPerView: 13
                }
            }
        });

        const swiperAnnotation = new Swiper(element.querySelector('.solution-history__annotations-list-container'), {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 20,
            mousewheel: true,
            centeredSlides: true,
            centerSlidesBounds: true,
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    centerSlidesBounds: false,
                    spaceBetween: 84
                }
            }
        });

        swiperYears.on('slideChange', () => {
            setCurrentYear(swiperYears.activeIndex, yearsArr[swiperYears.activeIndex].value);
        });

        swiperAnnotation.on('slideChange', () => {
            setCurrentYear(swiperAnnotation.activeIndex, annotationsArr[swiperAnnotation.activeIndex].value);
        });

        const setCurrentYear = (index, yearValue) => {
            swiperYears.slideTo(index, 300);
            swiperAnnotation.slideTo(index, 300);

            yearUpNumber.innerText = yearValue.slice(0, 2);
            yearDownNumber.innerText = yearValue.slice(2, 4);

            // анимация больших цифр
            yearsActiveList.style.transform = `translateY(${-47 * index}rem)`;

            // добавить затемнение
            switch (true) {
                case index <= 5:
                    yearsList.classList.remove('solution-history__full-silencing-block');
                    yearsList.classList.add('solution-history__down-silencing-block');
                    break;

                case index > 5 && index < yearsArr.length - 6:
                    yearsList.classList.add('solution-history__full-silencing-block');
                    yearsList.classList.remove('solution-history__up-silencing-block');
                    yearsList.classList.remove('solution-history__down-silencing-block');
                    break;

                case index >= yearsArr.length - 6:
                    yearsList.classList.remove('solution-history__down-silencing-block');
                    yearsList.classList.add('solution-history__up-silencing-block');
                    break;
            }

            switch (true) {
                case index === annotationsArr.length - 1:
                    annotationsList.classList.remove('solution-history__down-silencing-block');
                    break;

                case index !== annotationsArr.length - 1:
                    annotationsList.classList.add('solution-history__down-silencing-block');
                    break;
            }
        };

        swiperYears.slideTo(swiperYears.slides.length -1, 300);
        swiperAnnotation.slideTo(swiperYears.slides.length -1, 300);

        yearsArr.forEach((yearItem, index) => {
            yearItem.onclick = () => {
                setCurrentYear(index, yearItem.value);
            };
        });

        annotationsArr.forEach((annotationItem, index) => {
            annotationItem.onclick = () => {
                setCurrentYear(index, annotationItem.value);
            };
        });

        // const setResize = () => {
        //   // swiperAnnotation.spaceBetween = 20;
        //   switch (true) {
        //     case window.innerWidth >= 768:
        //       resize = 'desk'
        //       break;
        //
        //     default:
        //       resize = 'mobile'
        //   }
        // }
        //
        // let resize;
        // setResize();
        //
        // window.addEventListener('resize', () => {
        //   if (resize === 'mobile') {
        //     console.log(swiperAnnotation)
        //   }
        // })
    });
}
