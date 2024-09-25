const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        const isDataInStore = state.filter((data) => data.id === action.payload.id).length > 0;
        if(isDataInStore) {
            state = state.map((data) => {
                if(data.id === action.payload.id) {
                    return {...data, qty: data?.qty + 1 || 0}
                } else {
                    return {...data};
                }
            })
        } else {
            const newData = {...action.payload, qty: 1}
            state = [...state, newData]
        }
    } else if (action.type === "DEL") {
        const isDataInStore = state.filter((data) => data.id === action.payload.id).length > 0;
        if(isDataInStore) {
            state = state.map((data) => {
                if(data.id === action.payload.id) {
                    if(data?.qty - 1 === 0) {
                        return null
                    }
                    return {...data, qty: data?.qty - 1 || 0}
                } else {
                    return {...data};
                }
            })
            state = state.filter(elem => elem !== null);
        } else {
            state = [...state, action.payload]
        }
    } else {
        state = [...state];
    }
    return state;
}

export default cartReducer;