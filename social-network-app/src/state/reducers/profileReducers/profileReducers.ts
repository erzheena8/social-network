export type PostType = {
    id: number
    message: string
    likeCount: number
}

type AddPostType = ReturnType<typeof addPostAC>
type ChangeValueType = ReturnType<typeof changeValueAC>

export type InitialStateProfileType = {
    posts:Array<PostType>
    newPostText: string
}

type ActionType =
    |AddPostType
    |ChangeValueType

const ADD_POST='ADD_POST',
    CHANGE_VALUE='CHANGE_VALUE'

const initialState = {
        posts: [
            {id: 1, message: 'Привет я очень голодный', likeCount: 0},
            {id: 2, message: 'Привет купил собаку', likeCount: 10},
            {id: 3, message: 'Привет дурачки', likeCount: 3},
        ],
        newPostText: ''
}

export const profileReducers = (state: InitialStateProfileType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                ...state.posts,
                posts: [{id:4, message: state.newPostText, likeCount:0},...state.posts],
                newPostText: ''
            }
        case "CHANGE_VALUE":
            return {
                ...state,
                newPostText: action.post
            }
    }
    return state
}

export const addPostAC = (userId: number) => {
    return {
        type: ADD_POST,
        userId
    } as const
}
export const changeValueAC = (post:string) => {
    return {
        type: CHANGE_VALUE,
        post
    } as const
}

