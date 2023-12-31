import { useDispatch } from "react-redux";
import { deleteSong, selectSongForEdit, selectSongToPlay } from "../store/actions/song";

const ListItem = ({ one }) => {
    let dispatch = useDispatch()//פונקציה המאפשרת לשגר אובייקטים פעולה לרידוסר
    //על מנת לשנות את הסטייט הכללי

    return (<div>
        <h2>{one.name}</h2>
        <input onClick={() => { dispatch(deleteSong(one.id)) }} type="button" value="מחק" />
        <input onClick={() => { dispatch(selectSongForEdit(one))}} type="button" value="ערוך" />
        <input onClick={() => { dispatch(selectSongToPlay(one)) }} type="button" value="הצג פרטים" />
        {/* <input onClick={() => { dispatch({type:"SELECTED_SONG_FOR_EDIT",payload:one}) }} type="button" value="הצג פרטים" /> */}
    </div>);
}

export default ListItem;