import { useSelector, useDispatch } from "react-redux";
import { stateSliceActions } from "./store/stateSlice";

const TextComp = () => {

    let stateWord = useSelector(state => state.stateSlice);
    let dispatch = useDispatch();

    const changeWord = () => {
        dispatch(stateSliceActions.changeNameToYolo())
    }


    return (
        <div onClick={changeWord}>{stateWord.theState}</div>
    ) 
}

export default TextComp;