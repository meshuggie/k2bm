import * as jQuery from 'jquery';
export function general() {
  return (function ($) {
    $(document).on('mouseenter', '.table_detail', function() {
      $(this).parent('tr').addClass('hover');
    });
    $(document).on('mouseleave', '.table_detail', function () {
      $(this).parent('tr').removeClass('hover');
    });
  })(jQuery);
}
