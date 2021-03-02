const initState = {
  measureUnit: 'celsius',
}

const measureUnitReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_MEASURE_UNIT":
      return {
        measureUnit: action.payload.measureUnit,
      }
    default:
      return { ...state }
  }
}

export default measureUnitReducer;