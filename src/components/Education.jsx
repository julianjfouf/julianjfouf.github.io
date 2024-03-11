import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-2 py-9">
      <h1 className="text-xl">Education</h1>
      <div
        className={`w-full cursor-default rounded-[16px] bg-[url('/images/image2.png')] bg-center bg-auto h-full overflow-hidden duration-300 transition-all group`}
      >
        <div className="bg-black/70 w-full h-full rounded-[16px] flex flex-col items-start p-9 gap-9 duration-300 transition-all">
          <h1 className="text-white text-7xl font-[900]">UC DAVIS</h1>
          <div className="text-white">
            <i>Sept 2023 - Present</i>
            <p className="my-4 max-w-xl">
              On admission, I was awarded the University of California Regents
              Scholarship which grants $30,000 over the course of four academic
              years. Additionally, I was invited to join the University Honors
              Program. As of writing this, I have only completed one academic
              quarter so there is not much else to mention yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
