export const initialState = {
    user: null,
    playlists: [],
    player: false,
    item: null,
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state
    }
}

export default reducer