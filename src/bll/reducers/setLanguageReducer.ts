import {ActionTypes} from "../enums";


export type ILanguage = {
    language: 'RU' | 'ENG'
}

const initialState: ILanguage = {
    language: 'ENG',
}

export const setLanguageReducer = (state: ILanguage = initialState, actions: ActionsType): ILanguage => {
    switch (actions.type) {
        case ActionTypes.SET_LANGUAGE:
            return {...state, language: actions.lang}
        default:
            return  state
    }
}



export const setLanguageAC = (lang: 'RU' | 'ENG') => {
    return {
        type: ActionTypes.SET_LANGUAGE,
        lang: lang
    } as const
}
type setLanguageACType = ReturnType<typeof setLanguageAC>


type ActionsType = setLanguageACType