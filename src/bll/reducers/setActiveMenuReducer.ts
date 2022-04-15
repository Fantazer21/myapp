import {ActionTypes} from "../enums";


export type IStatus = {
    status: number
}

const initialState: IStatus = {
    status: 0,
}

export const setActiveMenuReducer = (state: IStatus = initialState, actions: ActionsType): IStatus => {
    switch (actions.type) {
        case ActionTypes.SET_STATUS_MENU:
            return {...state, status: actions.status}
        default:
            return  state
    }
}



export const setStatusMenuAC = (status: number) => {
    return {
        type: ActionTypes.SET_STATUS_MENU,
        status: status
    } as const
}
type setStatusMenuACType = ReturnType<typeof setStatusMenuAC>


type ActionsType = setStatusMenuACType