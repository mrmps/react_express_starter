const initialState = {
    ideas: [{
        "id": "1",
        "CONTENT": "no ideas yet",
        "likes": "20",
        "flags": "0"
      }]
  };
const ideaReducer = (state=initialState, action) => {
    if (action.type === "UPDATE_IDEA") {
        console.log('action-ideas', action.ideas)
        return {
            ...state,
            ideas: action.ideas
        };
    } else {
        return {
            ...state
        }
    }
    
  }

  export default ideaReducer;