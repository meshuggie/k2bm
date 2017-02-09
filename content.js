(function($) {
    'use strict';

    if ($('.sod_list_wrapper').length) {
      updateBMMenu();
    }

    function updateBMMenu() {
      var tamperMenuHtml = '<span class="sod_list_wrapper" style="overflow: visible;">';
      var k2Sites = [
          'K2 Skates',
          'K2 Snowboarding',
          'K2 Skis',
          'Atlas Snowshoes',
          'BCA',
          'Full Tilt Boots',
          'Line Skis',
          'Madshus',
          'Ride Snowboards',
          'Tubbs Snowshoes',
          'Zoot'
      ];
      k2Sites.forEach(function(site) {
          if ( $('.sod_option[title*="' + site + '"]').length > 1 ) {
              tamperMenuHtml += '<span class="sod_container" style="position: relative; display: block; white-space: nowrap; width: 100%;">';
              tamperMenuHtml += '<span class="sod_option" title="' + site + '" style="padding: 10px; margin: 5px 0;">' + site + '</span>';
              tamperMenuHtml += '<span class="sod_flyout" style="position: absolute; top: 0; left: calc(100% + 1px); box-shadow: 0 3px 5px #999; width: 100%; background: #fff; display: none;">';
              $('.sod_option[title*="' + site + '"]').each(function() {
                  var elem = $('<span>');
                  elem.attr({
                  'title': $(this).attr('title'),
                  'data-value': $(this).attr('data-value'),
                  'class': 'sod_option'
                  });
                  elem.html( $(this).html() );
                  tamperMenuHtml += elem[0].outerHTML;
              });
              tamperMenuHtml += '</span>';
              tamperMenuHtml += '</span>';
          } else {
              tamperMenuHtml += $('.sod_option[title*="' + site + '"]')[0].outerHTML;
          }
      });
      tamperMenuHtml += '</span>';

      $('.sod_list_wrapper').delay(1000).replaceWith(tamperMenuHtml);

      $('body').on('mouseenter', '.sod_container', function() {
          $(this).find('.sod_flyout').fadeIn(150);
      });
      $('body').on('mouseleave', '.sod_container', function() {
          $(this).find('.sod_flyout').fadeOut(150);
      });
    }
})( jQuery );
