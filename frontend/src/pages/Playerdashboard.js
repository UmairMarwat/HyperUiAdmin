import Tournament from "../components/Tournament";
import Playerslist from "../components/playerlist";

const Playerdashboard = () => {
  return (
    <div className="w-[100%] bg-black flex md:flex-row sm:flex-col pt-10">
      <div className="w-[70%]">
        <Tournament />
      </div>
      <div className="w-[30%]">

      <Playerslist />
      </div>
    </div>
  );
};

export default Playerdashboard;
