import {addPostAC, changeValueAC, InitialStateProfileType, profileReducers} from "./profileReducers";
//@ts-ignore
let startState: InitialStateProfileType = {}
beforeEach(()=>{
    startState = {
        posts: [
            {id: 1, message: 'Привет я очень голодный', likeCount: 0},
            {id: 2, message: 'Привет купил собаку', likeCount: 10},
            {id: 3, message: 'Привет дурачки', likeCount: 3},
        ],
        newPostText: ''
    }
})

test('correct post should be add', ()=>{
    const action = addPostAC(4)
    const endState = profileReducers(startState, action)

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].message).toBe('')
})
test('correct post should be change', ()=>{
    let value = 'Hello'
    const action = changeValueAC(value)
    const endState = profileReducers(startState, action)

    expect(endState.newPostText).toBe(value)
})