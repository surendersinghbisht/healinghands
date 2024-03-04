import React from "react";
import P1 from "./P1";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div id="Projects">
      <div className="flex flex-col items-center space-y-4 sm:space-y-8 pt-10 p-4 text-center sm:px-14">
        <p className="font-extrabold font-custom tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center ">
          {" "}
          rescues
        </p>
        <p className="border-4 border-purple-700  w-10  rounded-lg"></p>
        <P1>
        A world where animal suffering is on the decline.
        </P1>

        <ProjectsList
          src="/images/res1.jpeg"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum ex architecto exercitationem molestiae doloribus tempora optio dolores eveniet deserunt fuga error ut fugit, magnam placeat id beatae tempore eos."
          href="https://todoappbysurender.netlify.app/"
          heading="DOG treatment"
        />

        <ProjectsList
          src="/images/res2.jpeg"
         details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum ex architecto exercitationem molestiae doloribus tempora optio dolores eveniet deserunt fuga error ut fugit, magnam placeat id beatae tempore eos."
          href="https://worldatlasbysurender.netlify.app/"
          heading="cow"
        />

        <ProjectsList
        src="/images/res3.jpeg"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum ex architecto exercitationem molestiae doloribus tempora optio dolores eveniet deserunt fuga error ut fugit, magnam placeat id beatae tempore eos."
        
          href=""
          heading=" puppies"
        />

        <ProjectsList
           src="/images/res4.jpeg"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum ex architecto exercitationem molestiae doloribus tempora optio dolores eveniet deserunt fuga error ut fugit, magnam placeat id beatae tempore eos."
          href="https://showsfinderapp.netlify.app/"
          heading="birds"
        />
<h1></h1>
        <ProjectsList
          src="/images/res6.jpeg"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum ex architecto exercitationem molestiae doloribus tempora optio dolores eveniet deserunt fuga error ut fugit, magnam placeat id beatae tempore eos."
          href="https://Assignment-34-Create-Ask-Jud-clone-SurenderSINGH8.codeyogiteam.repl.co"
          heading="cat"
        />
      </div>
    </div>
  );
}

export default Projects;
