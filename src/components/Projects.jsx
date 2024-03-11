import Image from "next/image";
import React from "react";
import git from "../../public/icons/GitHubWhite.svg";
import web from "../../public/icons/Web.svg";

const Projects = () => {
  return (
    <div className="flex flex-col gap-2 py-9">
      <h1 className="text-xl">Projects</h1>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/attention_research_1.png')] bg-center bg-cover group h-[148px] hover:h-[480px] overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/50 w-full h-full rounded-[16px] duration-300 p-9 gap-9 group-hover:bg-black/80 transition-all flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">
            Poetry Generator
          </h1>
          <div className="text-white">
            <i>February 2023</i>
            <p className="my-4 max-w-xl"></p>
            <div className="flex gap-2 my-4">
              <a href="">
                <Image src={git} />
              </a>
              <a href="">
                <Image src={web} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/cifake.png')] bg-center bg-cover group h-[148px] hover:h-[480px] overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/50 w-full h-full rounded-[16px] duration-300 p-9 gap-9 group-hover:bg-black/80 transition-all flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">
            CIFAKE Image Detector
          </h1>
          <div className="text-white">
            <i>January 2023</i>
            <p className="my-4 max-w-xl"></p>
            <div className="flex gap-2 my-4">
              <a href="">
                <Image src={git} />
              </a>
              <a href="">
                <Image src={web} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/twitterclonepic.png')] bg-center bg-cover h-[148px] hover:h-[480px] group overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] duration-300 p-9 gap-9 group-hover:bg-black/80 transition-all flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">TWITTER CLONE</h1>
          <div className="text-white">
            <i>July 2023</i>
            <p className="my-4 max-w-xl">
              This is a project I made over the course of about a day or so. I
              did this project because it had been a while since I had used
              Firebase and its many functionalities so I wanted to refresh
              myself as a reminder to how it worked. To be more specfic, this
              project has sign-in, sign-up, and continue as guest. It also has
              realtime updates every time a post is added to the database of
              posts. Once I felt that I was very comfortable with using
              Firebase, I left the project where it is at right now. If I were
              to come back to this project or start a new one with the same
              objective, I would like to have more data handling in the
              interface. Specifically, I would like to be able to handle liking
              posts, commenting on posts, retweeting posts, and image/video
              uploads. Additionally, I could also turn this into a multi page
              system where you can actually view specific user pages and see
              their posts, retweets, liked posts, etc.
            </p>
            <div className="flex gap-2 my-4">
              <a href="">
                <Image src={git} />
              </a>
              <a href="">
                <Image src={web} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/malikstintspic.png')] bg-center bg-cover h-[148px] hover:h-[480px] group overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] p-9 gap-9 group-hover:bg-black/80 duration-300 transition-all flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">MALIK'S TINTS</h1>
          <div className="text-white">
            <i>2023 - present</i>
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
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/danosdetailingpic.png')] bg-center bg-cover h-[148px] hover:h-[480px] group overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/30 w-full h-full rounded-[16px] p-9 gap-9 group-hover:bg-black/80 transition-all flex flex-col items-start">
          <h1 className="text-white text-7xl font-[900]">DANO'S DETAILING</h1>
          <div className="text-white">
            <i>2023 - present</i>
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

export default Projects;

/*
<div
  className={`w-full cursor-default rounded-[16px] bg-[url('/images/malikstintspic.png')] bg-center bg-cover h-[144px] group hover:h-[480px] overflow-hidden duration-300 transition-all group`}
>
  <div className="bg-black/30 w-full h-full rounded-[16px] group-hover:bg-black/70 duration-300 transition-all flex flex-col items-start">
    <h1 className="text-white text-7xl font-[900] p-9">MALIK'S TINTS</h1>
      <div className="text-white px-9">
      <i>2023 - present</i>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        voluptate, fugit aliquid rerum incidunt ipsum exercitationem, est
        ea sequi molestias aspernatur. Dignissimos eaque maxime enim
        ducimus voluptates, culpa est illo.
      </p>
    </div>
  </div>
</div>
*/
