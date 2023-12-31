import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const List = () => {
    let arr = useSelector((st) => { return st.arr });// מביא  נתונם מהסטייט הכללי
    return (<>
        <h1>רשימת שירים</h1>
        <ul>

            {arr.map(item => <li key={item.id}><ListItem one={item} /></li>)}
        </ul>
    </>);
}

export default List;