const initialState = {
    arr: [

        { id: 1, name: "la la la", album: "bla bla bla", src: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a" },
        { id: 2, name: "ma ma ma", album: "bla bla bla", src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav" },
        { id: 3, name: "od ishama", album: "bla bla bla", src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav" },
    ],
    selectedSong: null,
    selectedSongForEdit: null
}

//כאן נבנה פונקצית רידוסר
//פונקציה זו קובעת מה יהיה הסטייט הכללי של האתר
//היא מופעלת פעם אחת בעת טעינת האתר
//ואז מה שהיא מחזירה זה יהיה הסטייט הכללי עד לפעם הבאה שהיא מופעלת
//מתי היא מופעלת שוב
//כשיש איזושהי פעולה שקשורה לסטייט באתר
//הפוקנציה מופעלת שוב
//היא מקבלת באופן אוטומטי את הסטייט הכללי כפי שהיה עד עכשיו
//ומקבלת גם את הפעולה שקרתה עכשיו באתר
//היא בודקת מה העפולה שקרתה
//ומחזירה סטייט חדש
//עם השינויים על פי הפעולה שקרתה באתר
export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SONG":
            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: [...state.arr, action.song]
            }
        case "DELETE_SONG":
            // let copy=[...state.arr];
            // cop
            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "SELECT_SONG_TO_PLAY":
            return {
                selectedSong: action.payload,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr
            }
        case "SELECT_SONG_FOR_EDIT":
            return {
                arr: state.arr,
                selectedSong: state.selectedSong,
                selectedSongForEdit: action.payload
            }
        case "SAVE_EDITED_SONG":

            // let copy = [...state.arr];
            // let index = copy.findIndex(item => item.id == action.payload.id);
            // copy[index] = action.payload;

            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })
            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: null,
                arr: copy

            }
        default: return state;

    }

}