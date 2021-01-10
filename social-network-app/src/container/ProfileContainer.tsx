import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStateType} from '../state/store';
import {Profile} from '../Components/Profile/Profile';
import {addPostAC, changeValueAC} from "../state/reducers/profileReducers/profileReducers";

const mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeValue: (value: string)=> {
            dispatch(changeValueAC(value))
        },
        addPost: (userId: number)=> {
            dispatch(addPostAC(userId))
        },
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)