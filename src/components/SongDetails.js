import { useSelector } from "react-redux";

const SongDetails = () => {
    const selected = useSelector(state => state.selectedSong)
    return (

        <div>
            פרטי שיר נבחר
            <h1>{selected.name}</h1>
            <h1>{selected.album}</h1>
            <audio controls>
                <source src={selected.src} />
            </audio>
        </div>
    );
}

export default SongDetails;