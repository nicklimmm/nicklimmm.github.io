import { AnimationOnScroll } from "react-animation-on-scroll";
import { ITEM_ANIMATION_DURATION } from "../config";
import workExperienceContent from "../content/work-experience.yml";

export const WorkExperience = ({ bgColor }) => {
  return (
    <div
      className={`relative lg:px-24 px-12 py-12 min-h-screen flex flex-col items-center ${bgColor}`}
    >
      <h1 className="md:text-6xl text-5xl font-semibold my-4 text-center">
        Work Experience
      </h1>
      <div>
        {workExperienceContent.map((work, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={ITEM_ANIMATION_DURATION}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-12 bg-gray-200 px-12 py-6 rounded-xl max-w-4xl">
              <h2 className="text-lg font-semibold">{work.position}</h2>
              {work.employer && (
                <h2 className="text-lg font-semibold">{work.employer}</h2>
              )}
              <h2 className="text-md italic">{work.date}</h2>
              {work.description && (
                <ul className="mt-4">
                  {work.description.map((desc, idx) => (
                    <li className="my-1 list-disc" key={`${idx}`}>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};
