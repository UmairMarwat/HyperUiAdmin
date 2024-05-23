import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.png";

const Data = [
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
  {
    img1: image1,
    img2: image2,
    firstname1: "saif",
    lastname1: "khan",
    firstname2: "shayan ",
    lastname2: "Khan ",
  },
];

const Tournament = () => {
  return (
    <div className="w-[100%] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 px-7 gap-y-12 gap-x-5    lg:grid-cols-3">
        {Data.map(({ img1, img2, firstname1, lastname1 }) => (
          <div className="w-[100%]  relative">
            <div className="bg-[#004032] rounded-xl ">
              <div className="flex flex-row justify-around pb-10">
                <div className="flex flex-col gap-y-5">
                  <div className="border bg-white rounded-full w-[70px] -mt-4 p-2">
                    <img
                      className="w-[100%] object-cover h-auto "
                      src={img2}
                      alt=""
                    />
                  </div>
                  <h3 className="font-semibold text-xl  text-white">
                    {firstname1}
                    <br />
                    <span className="text-[#00FF38]">{lastname1}</span>
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-black bg-white inline-block p-6 text-2xl font-semibold">
                    15
                  </h1>
                  <br />
                  <span className="bg-gray-700 text-white  px-2 text-xl font-semibold rounded-b-lg">
                    points
                  </span>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="border rounded-full w-[70px] -mt-4 p-2 bg-white">
                    <img
                      className="w-[100%] object-cover h-auto  "
                      src={img2}
                      alt=""
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white">
                    {firstname1}
                    <br />
                    <span className="text-[#00FF38]">{lastname1}</span>
                  </h3>
                </div>
              </div>
              <div className="bg-[#161917]">
                <h3 className="text-2xl text-white font-semibold text-center py-3">
                  1
                </h3>
              </div>
              <div className="pt-10  flex flex-row justify-around  ">
                <div className="flex flex-col gap-y-5 -mb-5">
                  <h3 className="font-semibold text-xl  text-white">
                    {firstname1}
                    <br />
                    <span className="text-[#00FF38]">{lastname1}</span>
                  </h3>
                  <div className="border bg-white rounded-full absolute -bottom-4  w-[70px] p-2">
                    <img
                      className="w-[100%] object-cover h-auto "
                      src={img2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-9">
                  <span className="bg-gray-700  px-2 text-white  text-xl font-semibold rounded-t-lg">
                    points
                  </span>
                  <br />
                  <h1 className="text-black bg-white inline-block p-6 text-2xl font-semibold">
                    15
                  </h1>
                </div>
                <div className="flex flex-col gap-y-5  ">
                  <h3 className="font-semibold text-xl text-white">
                    {firstname1}
                    <br />
                    <span className="text-[#00FF38]">{lastname1}</span>
                  </h3>
                  <div className="border rounded-full  w-[70px] p-2 bg-white absolute -bottom-4">
                    <img
                      className="w-[100%] object-cover h-auto  "
                      src={img2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Tournament;
