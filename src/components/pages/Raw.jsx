import React from "react";

const Raw = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 py-9">
        <h1 className="text-xl">Education</h1>
        <ul className="list-disc pl-8 mt-2">
          <li>
            <p className="max-w-xl">
              <span className="font-bold">
                University of California, Davis{" "}
              </span>
              (<i>September 2023 - Present</i>
              ): <br />
              <span className="block mt-1">
                On admission, I was awarded the{" "}
                <a
                  href="https://financialaid.ucdavis.edu/scholarships/campus/awards/regents"
                  className="underline text-blue-700 hover:text-blue-500"
                  target="_blank"
                >
                  University of California Regents Scholarship
                </a>{" "}
                ($30,000) and invited to the{" "}
                <a
                  href="https://honors.ucdavis.edu/"
                  className="underline text-blue-700 hover:text-blue-500"
                  target="_blank"
                >
                  University Honors Program
                </a>
                .
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 py-9">
        <h1 className="text-xl">Projects</h1>
        <ul className="list-disc pl-8 mt-2 flex flex-col gap-4">
          <li>
            <p className="max-w-xl">
              <a
                href="https://ergomania.net"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Ergomania (website link)
              </a>{" "}
              (<i>October 2024</i>
              ): <br />
              <span className="block mt-1">
                Helped out another friend by setting up a custom ecommerce site
                for their product (this website is not actively being used
                because we found it is not needed). Special thanks to Vercel for
                their ecommerce template that saved us a lot of time.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/TritonTransformer"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Triton Attention (github link)
              </a>{" "}
              (<i>September 2024</i>
              ): <br />
              <span className="block mt-1">
                While working on Triton Transformer, I went deep into the
                Attention algorithm and made some improvements that "seem" to
                perform better than F.scaled_dot_product(attention) across
                varying batch sizes, context lengths, and hidden dimension
                sizes.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/TritonTransformer"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Triton Transformer (github link)
              </a>{" "}
              (<i>September 2024</i>
              ): <br />
              <span className="block mt-1">
                Learned Triton over a weekend thanks to the documentation's
                super effective tutorials. Did this project to practice and to
                attempt to run a transformer fully in Triton faster than
                PyTorch. Learned that PyTorch is extremely good.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/Paperstack"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Paperstack (github link)
              </a>{" "}
              (<i>August 2024</i>
              ): <br />
              <span className="block mt-1">
                A small little project I made to help organize and keep track of
                papers that I came across and wanted to read/save for future
                use. (login does not work in production, falls back to local
                storage instead).{" "}
                <a
                  href="https://paperstack-murex.vercel.app"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  (website link)
                </a>
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/danosdetailingremastered"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Dano's Detailing Remastered (github link)
              </a>{" "}
              (<i>July 2024</i>
              ): <br />
              <span className="block mt-1">
                Remaster of the Dano's Detailing website to improve ease of
                navigation, design, performance, and to prioritize mobile
                experience.{" "}
                <a
                  href="https://danosdetailing.com"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  (website link)
                </a>
                , recommended viewing on mobile.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/TinyStoriesGPT"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Story Generator (github link)
              </a>{" "}
              (<i>March 2024</i>
              ): <br />
              <span className="block mt-1">
                Another small sized GPT (this time made more efficient thanks to{" "}
                <a
                  href="https://github.com/karpathy/nanoGPT"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  nanoGPT
                </a>
                ) trained to generate a random story. Still a developing repo
                (check{" "}
                <a
                  href="https://github.com/julianjfouf/TinyStoriesGPT"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  README.md
                </a>
                ).
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/PoemGenerator/tree/main"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Poem Generator (github link)
              </a>{" "}
              (<i>February 2024</i>
              ): <br />
              <span className="block mt-1">
                A small sized GPT trained on poetry from the poetry foundation
                website to output a poem given a title.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/CIFAKE-AI-Image-Detector"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                CIFAKE AI Image Detector (github link)
              </a>{" "}
              (<i>January 2024</i>
              ): <br />
              <span className="block mt-1">
                An image classification model, simply consisting of
                convolutional layers, trained to classify if an image from the{" "}
                <a
                  href="https://www.kaggle.com/datasets/birdy654/cifake-real-and-ai-generated-synthetic-images"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  CIFAKE
                </a>{" "}
                dataset is AI generated or real.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/ShakespeareGPT"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Shakespeare Generator (github link)
              </a>{" "}
              (<i>December 2023</i>
              ): <br />
              <span className="block mt-1">
                My very first experience with building a GPT and training it on
                a text dataset. The notebook is very heavily annotated with
                respect to how the transformer architecture works.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/twitterclone"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Twitter Clone (github link)
              </a>{" "}
              (<i>July 2023</i>
              ): <br />
              <span className="block mt-1">
                An implementation of the basic function of twitter: tweeting. A
                short weekend project to work on my firebase skills in database
                updates and user authentication.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/MalikTints"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Malik's Tints (github link)
              </a>{" "}
              (<i>June 2023</i>
              ): <br />
              <span className="block mt-1">
                A website for my friend Malik's window tinting business.
                However, he shortly transitioned to car cleaning services
                instead, leaving this website inactive.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <a
                href="https://github.com/julianjfouf/danosdetailing"
                target="_blank"
                className="font-bold underline text-blue-700 hover:text-blue-500"
              >
                Dano's Detailing (github link)
              </a>{" "}
              (<i>May 2023</i>
              ): <br />
              <span className="block mt-1">
                My first "large-scale" application. A website for my friend
                Fernando's local car detailing business with many pages.
              </span>
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="flex flex-col gap-2 py-9">
        <h1 className="text-xl">Interests/Hobbies</h1>
        <ul className="list-disc pl-8 mt-2 flex flex-col gap-4">
          <li>
            <p className="max-w-xl">
              <span className="font-bold">Neural Networks </span>(
              <i>December 2023 - Present</i>
              ): <br />
              <span className="block mt-1">
                Like most people, the release of ChatGPT exposed me to the
                applications of Artifical Intelligence and this entire
                revolutionary scene in Computer Science. I later spent basically
                April 2023 working through the Kaggle machine learning
                tutorials, however, I felt that these were too shallow and that
                I did not gain any fuunctional knowledge from them which led me
                to losing interest. It was not until December 2023 that I came
                across Andrej Karpathy's youtube lecture series,{" "}
                <a
                  href="https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500"
                >
                  Neural Networks: Zero to Hero
                </a>
                . This initiated a head first dive into this world of work
                because Karpathy's lectures were deep and concrete enough that I
                could actually understand fundamentally how a nerual network
                operates and be able to explain it to others with a basic
                knowledge of calculus derivatives.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <span className="font-bold">Theoretical Physics </span>(
              <i>June 2023 - Present</i>
              ): <br />
              <span className="block mt-1">
                Ever since my first physics class in high school, I fell in love
                with physics and spent the following summer reading the entirety
                of Fundamentals of Physics from where the class left us to
                finish. I took an interest to Quantum Mechanics and began
                reading from Introduction to Quantum Mechanics by Griffin, and
                am currently reading through Principles of Quantum Mechanics by
                Shankar. In general, I am interested in the theories of physics
                even beyond Quantum Mechanics, and invite discussions of
                unexplored topics and ideas.
              </span>
            </p>
          </li>
          <li>
            <p className="max-w-xl">
              <span className="font-bold">Bodybuilding </span>(
              <i>February 2022 - Present</i>
              ): <br />
              <span className="block mt-1">
                It started on Valentine's Day in 2022 when I went to the gym
                with my friends, Malik and Hanh. At the time we barely had
                a clue about what we were doing but we still found it to be fun
                and interesting with all the different machines and exercises
                that we could do together. We began to invite more and more of
                our friends and developed a habit of going to the gym on most
                days of the week at 9 pm. There was no need for sending a text
                message to the group chat because if anyone was going to the gym
                they would be there at 9.
              </span>
            </p>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Raw;
