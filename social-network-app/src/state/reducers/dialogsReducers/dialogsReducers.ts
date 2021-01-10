export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
    user: boolean
}

export type InitialStateDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}

export type AddMessageType = ReturnType<typeof addMessageAC>
export type ChangeMessageType = ReturnType<typeof changeMessageAC>

export type ActionType =
    | AddMessageType
    | ChangeMessageType


const ADD_MESSAGE = 'ADD_MESSAGE',
    CHANGE_MESSAGE='CHANGE_MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'Art'},
        {id: 2, name: 'Bert'},
        {id: 3, name: 'Cert'},
        {id: 4, name: 'F'},
    ],
    messages: [
        {id: 1, message: 'Привет', user: true},
        {id: 2, message: 'Привет', user: false},
        {id: 3, message: 'Как дела?', user: true},
        {id: 4, message: 'Хорошо', user: false},
    ],
    newMessage: ''
}


export const dialogsReducers = (state: InitialStateDialogsType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }
        case ADD_MESSAGE:
            return {
                ...state,
                ...state.messages,
                messages: [...state.messages, {id:5, message:state.newMessage, user:true}],
                newMessage: ''
            }
    }
    return state
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const changeMessageAC = (message:string) => {
    return {
        type: CHANGE_MESSAGE,
        message
    } as const
}

