/**
 * add a query param for enabling or disabling optimizely
 * @param  {Boolean} isDisable - true for disable, false for enable
 */
function optiDisableOrEnable (isDisable) {
  window.alert(isDisable);
  const paramStr = 'optimizely_disable=';
  const href = location.href;
  const paramExists = href.indexOf(paramStr) + 1;
  if (paramExists) {
    location.href = href.replace(/optimizely_disable=(true|false)/, 
                                 paramStr + isDisable);
  } else { 
    const hasQuery = href.indexOf('?') + 1;
    const hasHash = href.indexOf('#') + 1;
    const appendix = (hasQuery ? '&' : '?') + paramStr + isDisable;
    location.href = hasHash ? href.replace('#', appendix + '#') : href + appendix;
  }
}

export default optiDisableOrEnable;