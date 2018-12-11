export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {id: Math.random(), name: action.name}
      console.log(action)
      console.log({ ...state, bands: [...state.bands, band] })
      // { bands: [{id: 0.6195433279772122, name: "lekngenrg"}] }
      
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      console.log(action)
      let filteredArr = state.bands.filter(band => band.id !== action.id)
      return {bands: filteredArr}

    default:
      return state;
  }
}
