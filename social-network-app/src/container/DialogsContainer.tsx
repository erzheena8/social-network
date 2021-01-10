import {connect} from 'react-redux';
import {Dialogs} from '../Components/Dialogs/Dialogs';
import {Dispatch} from 'redux';
import {RootStateType} from '../state/store';
import {addMessageAC, changeMessageAC} from "../state/reducers/dialogsReducers/dialogsReducers";

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeMessage: (message: string)=> {
            dispatch(changeMessageAC(message))
        },

        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)