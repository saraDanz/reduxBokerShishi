//כאן נגדיר את כל הפעולות שניתן לעשות באתר שהן אמורות להשפיע על הסטייט הכללי
//פעולות אלו הן מחזירות אובייקטם רגילים של גאוה סקריפט
//type כל אובייקט כזה מקובל שהוא מכיל שדה בשם 
//הערך של שדה זה יהיה באותיות גדולות
//ניתן להוסיך שדות עם מידע נוסף
//payload בד"כ קוריאם למידע הנוסף בשם

export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        song: song
    }
}

export const deleteSong = (songId) => {
    return {
        type: "DELETE_SONG",
        payload: songId
    }
}

export const selectSongToPlay = (songToPlay) => {

    return {
        type: "SELECT_SONG_TO_PLAY",
        payload: songToPlay
    }
}

export const selectSongForEdit = (song) => {

    return {
        type: "SELECT_SONG_FOR_EDIT",
        payload: song
    }
}

export const saveEditedSong = (editedSong) => {
    return {
        type: "SAVE_EDITED_SONG",
        payload: editedSong
    }
}