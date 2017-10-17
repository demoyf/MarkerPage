/**
 * Created by alone on 2017/9/19.
 */
import onePart from './VueDir/HomePagePersonalC.vue';
new Vue({
    el: '.my-person-page',
    data: {
        offsetOne: 'col-sm-offset-1',
        offsetTwo: 'col-sm-offset-2',
        fadeUpRight: 'fade-up-right',
        fadeUpLeft: "fade-up-left",
        imageSrc: {
            first: './public/images/5.jpg',
            second: './public/images/6.jpg',
            third: './public/images/7.jpg',
        }
    },
components: {
        perPersonalPart: onePart
    }
});