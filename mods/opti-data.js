const optiData = {
  optimizelyPresent: !!window.optimizely,
  activeClassicExperiments: [],
  activeXExperiments: [],
};

function returnOptiData () {
  const opti = window.optimizely;
  if (opti && opti.activeExperiments) {
    const exps = opti.activeExperiments.map(function(expId) {
      return {
          expId: expId,
          name: opti.allExperiments[expId].name,
          variationName: opti.variationNamesMap[expId],
      };
    });
    optiData.activeClassicExperiments = exps;
  }

  return optiData
}

export default returnOptiData;