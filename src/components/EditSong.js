import { useDispatch, useSelector } from "react-redux";
import { saveEditedSong } from "../store/actions/song";
import { useState } from "react";

const EditSong = () => {


    let forEdit = useSelector(state => state.selectedSongForEdit)
    let myDisp = useDispatch();

    const [details, setDetails] = useState({ ...forEdit });
    const change = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const save = (e) => {
        e.preventDefault();
        myDisp(saveEditedSong(details));

    }

    return (<form onSubmit={save}>
        עריכת פרטי שיר
        <label>שם</label>
        <input type="text" name="name" value={details.name} onChange={change} />
        <label>אלבום</label>
        <input type="text" name="album" value={details.album} onChange={change} />

        <input type="submit" />
    </form>);
}

export default EditSong;