import $ from 'jquery';

export default function () {

   // Product Images Swap
   const sourceSwap = function () {
      const $this = $(this);
      const newSource = $this.data('src-swap');
      $this.data('src-swap', $this.attr('src'));
      $this.attr('src', newSource);
   }

   $(function() {
      $('img[data-src-swap]').each(function() {
         new Image().src = $(this).data('src-swap');
      }).hover(sourceSwap, sourceSwap);
   });
}
