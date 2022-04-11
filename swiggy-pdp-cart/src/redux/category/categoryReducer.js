const initialState = {
    category : 'recommended',
}

const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_CATEGORY': return{
            ...state,
            category:action.payload,
        }
        default: return state
    }
}

export default categoryReducer