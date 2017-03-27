import optiDisableOrEnable from './opti-disable-or-enable.js';

function bindEvents ($modal) {
  // close modal on click of x button
  $('.close-button', $modal).click(() => {
    $modal.remove();
  });
  /* 
    on click of toggle param button, if opti disabled -> enable, 
    if opti enabled -> disable
  */
  $('#opt-out', $modal).click(() => {
    optiDisableOrEnable(true);
  });
}

export default bindEvents;