import * as jQuery from 'jquery';
export function environmentId() {
  return (function ($) {
    var text = $('.header__site-switcher__instance span').text();
    $('<tr><td colspan="2"><h1 style="font-size: 2.5em; margin-top: 20px; text-align: center; font-weight: bold;">' + text + '</h1></td></tr>').insertAfter('#bm_header_row');
  })(jQuery);
}
