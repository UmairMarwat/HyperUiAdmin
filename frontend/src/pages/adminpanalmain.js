import Addplayer from "../components/addplayer";
import Sidebar from "../components/sidebar";


const Adminpanalmain= () => {
    return(
        <div className="flex flex-row ">
            <Sidebar /> 
            <Addplayer />

        </div>
    )
}

export default Adminpanalmain;