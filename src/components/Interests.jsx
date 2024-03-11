import React from "react";

const Interests = () => {
  return (
    <div className="flex flex-col gap-2 py-9">
      <h1 className="text-xl">Interests/Hobbies</h1>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/AdobeStock_102137132.jpg')] bg-center bg-auto h-full overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] gap-9 p-9 flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">
            THEORETICAL PHYSICS
          </h1>
          <div className="text-white">
            <i>Jun 2023 - present</i>
            <p className="my-4 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptate, fugit aliquid rerum incidunt ipsum exercitationem, est
              ea sequi molestias aspernatur. Dignissimos eaque maxime enim
              ducimus voluptates, culpa est illo.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/intro-to-gnns-16x9-1.jpg')] bg-center bg-cover h-full overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] flex flex-col gap-9 p-9 items-start">
          <h1 className="text-white text-7xl font-[900]">
            NEURAL NETWORKS
          </h1>
          <div className="text-white">
            <i>Dec 2023 - present</i>
            <p className="my-4 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptate, fugit aliquid rerum incidunt ipsum exercitationem, est
              ea sequi molestias aspernatur. Dignissimos eaque maxime enim
              ducimus voluptates, culpa est illo.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/Larry-Wheels-and-Jerome-Pever.png')] bg-center bg-cover h-full overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] p-9 gap-9 flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">BODYBUILDING</h1>
          <div className="text-white">
            <i>Feb 2022 - present</i>
            <p className="my-4 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptate, fugit aliquid rerum incidunt ipsum exercitationem, est
              ea sequi molestias aspernatur. Dignissimos eaque maxime enim
              ducimus voluptates, culpa est illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
