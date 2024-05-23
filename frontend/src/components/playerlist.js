
import { Link } from "react-router-dom";

import Aliakbar from '../assets/image2.png';



const Data = [
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    {
        number: 1,
        image: Aliakbar,
        Playername: "Aliakbar"

    },
    
]


const Playerslist = ( )=> {
    return(
        <div className=" min-h-screen bg-black w-[100%]">
        
        
        <div className="flex flex-col justify-center items-center gap-y-5">
        {Data.map(({image ,number ,Playername }) => (
            <div className=" " ><Link>
                <div className="text-white font-semibold flex flex-row gap-x-10 items-center text-xl justify-center">
                    <h3>{number}</h3>
                    <div className="w-[40px] rounded-full p-2   bg-white"><img className="w-[100%] object-cover h-[80%]" src={image} alt="" /></div>
                    <h2 className="">{Playername}</h2>
                </div>
                </Link></div>
               ))};
        </div>
        
        
        </div>
     

    );
}

export default Playerslist;