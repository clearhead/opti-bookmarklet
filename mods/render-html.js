function generateExpRow (expObj) {
  const expStr = [
    '<li>',
      `<p>Experiment ID: ${expObj.expId}</p>`,
      `<p>Experiment Name: ${expObj.name}</p>`,
      `<p>Active Variation: ${expObj.variationName}</p>`,
    '</li>'
  ].join('');
  return expStr;
}

function renderHtml (modalHtml, optiData) {
  console.log(optiData);
  const $modal = $(modalHtml);
  const optiPresent = optiData.optimizelyPresent;
  if (!optiPresent) {
    $modal.addClass('opti-not-present');
  }
  else if (optiData.activeClassicExperiments.length) {
    const ulStr = '<ul class="experiments"><li class="headline">' +
                    'Active Classic Experiments</li></ul>';
    const $classics = $(ulStr)
    optiData.activeClassicExperiments.forEach(function(exp) {
      $classics.append(generateExpRow(exp));
    });
    $modal.append($classics);
  }
  return $modal;
}


export default renderHtml;