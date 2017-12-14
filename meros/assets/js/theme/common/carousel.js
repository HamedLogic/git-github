import $ from 'jquery';
import '../halothemes/owlCarousel';

export default function () {
    const $carousel = $('[data-owl]');

    if ($carousel.length) {
        // $carousel.each(function (index, el) {
        $(this).owlCarousel($(this).data('owl'));
        // });
    }
}
