export const toggleMeasureUnit = (currentMeasureUnit) => async (dispatch) => {
  const unit = currentMeasureUnit === 'celsius' ? 'fahrenheit' : 'celsius';
  dispatch({
    type: "TOGGLE_MEASURE_UNIT",
    payload: {
      measureUnit: unit,
    },
  });
}