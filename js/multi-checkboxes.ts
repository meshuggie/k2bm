import * as jQuery from 'jquery';
import { initCheckboxes } from './jquery.checkboxes-1.2.0.min'
export function multiCheckboxes() {
  return (($) => {
    initCheckboxes();
    $(document).checkboxes('range', true);
  })(jQuery);
}
