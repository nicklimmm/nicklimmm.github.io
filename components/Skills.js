import skillsContent from "../content/skills.yml";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ITEM_ANIMATION_DURATION } from "../config";

export const Skills = ({ bgColor }) => {
  return (
    <div
      className={`relative lg:px-24 px-12 py-12 min-h-screen flex flex-col items-center ${bgColor}`}
    >
      <h1 className="md:text-6xl text-5xl font-semibold my-4">Skills</h1>
      <div>
        {skillsContent.map((skill, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={ITEM_ANIMATION_DURATION}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-12 bg-gray-200 px-12 py-6 rounded-xl">
              {Object.entries(skill).map(([key, value], idx) => (
                <>
                  <h2 className="text-lg font-semibold" key={idx}>
                    {key}:
                  </h2>
                  <ul className="mt-1">
                    {typeof skill[key] === "string"
                      ? skill[key]
                      : skill[key].map((desc, idx) => (
                          <li
                            className="my-1 list-disc list-inside"
                            key={`${idx}`}
                          >
                            {desc}
                          </li>
                        ))}
                  </ul>
                </>
              ))}
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};
