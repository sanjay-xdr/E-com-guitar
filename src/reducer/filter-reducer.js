export const FilterReducer=(state,action)=>{
    switch (action.type) {

      case "SORT":
        return {
          ...state,
          sortBy: action.payload
        };

        case "CATEGORY":
          return {
            ...state,
            category: state.category.includes(action.payload) ? state.category.filter(item => item !== action.payload) : state.category.concat(action.payload) 
          };

          case "ACOUSTIC_GUITAR":
            return {
              ...state,
              showAcousticGuitar: !state.showAcousticGuitar
            };

            
          case "ELECTRIC_GUITAR":
            return {
              ...state,
              showElectricGuitar: !state.showElectricGuitar
            };

            case "Rating":
              return {
                ...state,
                rating: action.payload
              };

              case "clearFilter":
                return {
                  ...state,
                  category:action.payload.category,sortBy:action.payload.sortBy,rating:action.payload.rating
                };
              
            
              
            
         
      
      default:
        return state;
    }

  }