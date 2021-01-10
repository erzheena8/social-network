// export type PostsType = {
//     id: number
//     message: string
//     like: number
// }
// export type DialogsType = {
//     id: number
//     name: string
// }
// export type MessagesType = {
//     id: number
//     message: string
//     user: boolean
// }
//
// export type ProfilePageType = {
//     posts: Array<PostsType>
//     newPostText: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }


export const state = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет я очень голодный', like: 0},
                {id: 2, message: 'Привет купил собаку', like: 10},
                {id: 3, message: 'Привет дурачки', like: 3},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ]
        },
    },

    getState() {
        return this._state
    },

    _rerenderEntireTree() {
        console.log('State changed')
    },

    addPost(postMessage: any) {
        let newPost = {
            id: 5,
            message: postMessage,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
    },
    subscribe (observer: any) {
        this._rerenderEntireTree = observer
    },
    dispatch(action:any) {

    }



}

