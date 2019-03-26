const initialState = ""; // imageId

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_CURRENT_IMAGE':
            return action.imageId;
        default:
            return state;
    }
}
  