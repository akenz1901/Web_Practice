const useState = (initialState) => {
    let state = initialState
    const updateState = (update) =>{
        state = update
        console.log(state)
    }
    return [state, updateState]
}

const [state, updateState] = useState("off")

console.log(state)
updateState("on")