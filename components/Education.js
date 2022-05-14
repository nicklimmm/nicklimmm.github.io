import educationContent from "../content/education.yml";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ITEM_ANIMATION_DURATION } from "../config";

export const Education = ({ bgColor }) => {
  return (
    <div
      className={`relative lg:px-24 px-12 py-12 min-h-screen flex flex-col items-center ${bgColor}`}
    >
      <h1 className="md:text-6xl text-5xl font-semibold my-4">Education</h1>
      <div>
        {educationContent.map((edu, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={ITEM_ANIMATION_DURATION}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-12 bg-gray-200 px-12 py-6 rounded-xl">
              <h2 className="text-lg font-semibold">{edu.school}</h2>
              <h2 className="text-lg font-semibold">{edu.programme}</h2>
              <h2 className="text-lg font-semibold">{edu.date}</h2>
              {edu.description && (
                <ul className="mt-4">
                  {edu.description.map((desc, idx) => (
                    <li className="my-1 list-disc list-inside" key={`${idx}`}>
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
