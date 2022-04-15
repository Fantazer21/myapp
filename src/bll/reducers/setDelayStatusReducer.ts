import { ActionTypes } from "../enums";


export type IDelay = {
    delay: boolean
}

const initialState: IDelay = {
    delay: false,
}

export const setDelayReducer = (state: IDelay = initialState, actions: ActionsType): IDelay => {
    switch (actions.type) {
        case ActionTypes.SET_DELAY:
            return {...state, delay: actions.delay}
        default:
            return  state
    }
}



export const setDelayAC = (del: boolean) => {
    return {
        type: ActionTypes.SET_DELAY,
        delay: del
    } as const
}
type setDelayACType = ReturnType<typeof setDelayAC>


type ActionsType = setDelayACType