const initState = {}

const authReducers = (state = initState, action) => {
    console.log(action)
    console.log(state)
    return state
}

export default authReducers