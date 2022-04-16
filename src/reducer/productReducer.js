
const productReducer = (state,action) => {
    switch(action.type){
      case  "SORT" : return {...state, sortBy: action.payload}
      case "RATING" : return {...state, rating: action.payload};
      case "ring" : return {...state, category: {...state["category"],ring: !state.category.ring}};
      case "earring" : return {...state, category: {...state["category"],earring: !state.category.earring}};
      case "necklace" : return {...state, category: {...state["category"],necklace: !state.category.necklace}};
      case "bangles" : return {...state, category: {...state["category"],bangles: !state.category.bangles}};
      case "GOLD" : return {...state, metal : {...state["metal"],gold: !state.metal.gold}};
      case "SILVER" : return {...state, metal : {...state["metal"],silver: !state.metal.silver}};
      case "PLATINUM" : return {...state, metal : {...state["metal"],platinum: !state.metal.platinum}};
      case "CLEAR" : return {
        ...state,
        sortBy: " ",
        rating: 0,
        category: {
            ring: false,
            earring: false,
            necklace: false,
            bangles: false
        },
        metal:{
          gold: false,
          silver : false,
          platinum : false
      }  
      }
      default : return state;
    }
}

export {productReducer}