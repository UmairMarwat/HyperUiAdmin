import { CiGlobe} from "react-icons/ci";
import { Link } from "react-router-dom";
import { TiFlowChildren } from "react-icons/ti";

const Sidebar = () => {
    return(
        <div className="bg-black w-[30%] text-white ">
            <h1 className="text-center text-2xl py-7 font-bold ">Admin  Panal</h1>
            <div className="flex flex-row justify-center mt-[200px] gap-x-5 items-center w-[70%] m-[15%] border p-2 rounded-lg"><button className="text-2xl "><Link>Global ScoreBoard</Link></button>
            <CiGlobe size={30} />
            </div>
            <div className="flex flex-row justify-center  gap-x-5 items-center w-[70%] m-[15%] border p-2 rounded-lg"><button className="text-2xl "><Link to="/tournament">Tournament</Link></button>
            <TiFlowChildren size={30}  />
            </div>
            <div className="flex flex-row justify-center  gap-x-5 items-center w-[70%] m-[15%] border p-2 rounded-lg"><button className="text-2xl "><Link to="/adminpanel2">Arrange Matches</Link></button>
            <TiFlowChildren size={30}  />
            </div>
            <button className="bg-[#00A27D] w-[35%] mx-[32%] border rounded-lg text-xl p-4 my-[100px]">Log Out</button>

        </div>
    )
}

export default Sidebar;