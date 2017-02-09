(function($) {
    if ($('.sod_list_wrapper').length) {
      updateBMMenu();
    }

    function updateBMMenu() {
      var curr = localStorage.getItem('bm-last-site-id');
      var currName = $('select[name="SelectedSiteID"]').find('option:selected').html();
      var selectedIcon = $('<span>&#10003;</span>');
      selectedIcon.attr({
        'style': 'position: absolute; right: 10px; top: 15px; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); display: inline-block; color: #080; height: 9px; width: 10px;'
      });
      var tamperMenuHtml = '<span class="sod_select">';
      tamperMenuHtml += '<span class="sod_list">';
      tamperMenuHtml += '<span class="sod_label" title="' + currName + '">' + currName + '</span>';
      tamperMenuHtml += '<span class="sod_list_wrapper" style="overflow: visible;">';
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
              tamperMenuHtml += '<span title="' + site + '" style="display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; padding: 10px; margin: 5px 0; list-style-type: none;">' + site + '<span style="position: absolute;transform: translate(0, -50%);top: 46%;right: 7px;font-weight: bold;font-size: 24px;">&rsaquo;</span></span>';
              tamperMenuHtml += '<span class="sod_flyout" style="position: absolute; top: 0; left: calc(100% + 1px); box-shadow: 0 3px 5px #999; width: 100%; background: #fff; display: none;">';
              $('.sod_option[title*="' + site + '"]').each(function() {
                var elem = $('<span>');
                elem.attr({
                  'title': $(this).attr('title'),
                  'data-value': $(this).attr('data-value'),
                  'style': 'display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; padding: 10px 30px 10px 10px; list-style-type: none;',
                  'class': 'sod_option_update'
                });
                elem.html( $(this).html() );
                if (curr == $(this).attr('data-value')) elem.append(selectedIcon);
                tamperMenuHtml += elem[0].outerHTML;
              });
              tamperMenuHtml += '</span>';
              tamperMenuHtml += '</span>';
          } else {
            var item = $('.sod_option[title*="' + site + '"]');
            var elem = $('<span>');
            var selected = (curr == item.attr('data-value'));
            elem.attr({
              'title': item.attr('title'),
              'data-value': item.attr('data-value'),
              'style': 'display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; padding: 10px 30px 10px 10px; list-style-type: none;',
              'class': 'sod_option_update'
            });
            elem.html( item.html() );
            if (curr == item.attr('data-value')) elem.append(selectedIcon);
            tamperMenuHtml += elem[0].outerHTML;
          }
      });
      tamperMenuHtml += '</span>';
      tamperMenuHtml += '</span>';
      tamperMenuHtml += '</span>';
      tamperMenuHtml += '<input name="SelectedSiteID" type="hidden">';

      $('#SelectedSiteID-wrap').replaceWith(tamperMenuHtml);

      $('body').on('mouseenter', '.sod_container', function() {
          $(this).find('.sod_flyout').fadeIn(150);
      });
      $('body').on('mouseleave', '.sod_container', function() {
          $(this).find('.sod_flyout').fadeOut(150);
      });

      $('body').on('click', '.sod_select', function() {
        toggleSelectMenu();
      });
      $('body').on('click', '.sod_option_update', function() {
        $('input[name="SelectedSiteID"]').val($(this).attr('data-value'));
        $('form[name="SiteSelectionForm"]').submit();
      });
      $('body').on('click', function(e) {
        var target = $(e.target);
        if (!target.parents('form[name="SiteSelectionForm"]').length) {
          toggleSelectMenu(true);
        }
      });
      $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
          toggleSelectMenu(true);
        }
        });
    }

    function toggleSelectMenu(removeMenu) {
      removeMenu = (typeof removeMenu !== 'undefined') ? removeMenu : false;
      if (removeMenu) {
        $('.sod_list_wrapper').slideUp(150);
        $('.sod_select').removeClass('open');
        return;
      }
      $('.sod_list_wrapper').slideDown(150);
      $('.sod_select').addClass('open');
    }
})( jQuery );
