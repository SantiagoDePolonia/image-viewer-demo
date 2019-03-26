const initialState = 'master'; // it could be master or details

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_CURRENT_VIEW':
            return action.viewType;
        default:
            return state;
    }
}
  