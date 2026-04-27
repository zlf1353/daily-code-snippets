interface loadingState { type: 'loading' }
interface successState { type: 'success'; data: string[] }
interface falseState { type: 'false'; message: string }

type fetchState = loadingState | successState | falseState

const renderUI = (state: fetchState) => {
    switch (state.type) {
        case 'loading':
            console.log('loading')
            break;
        case 'success':
            console.log(state.data.join(','))
            break;
        case 'false':
            console.log(state.message)
            break;
        default:
            break;
    }
}