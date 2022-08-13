import { AnimationOnScroll } from "react-animation-on-scroll";
import { ITEM_ANIMATION_DURATION } from "../config";
import achievementsContent from "../content/achievements.yml";

export const Achievements = ({ bgColor }) => {
  return (
    <div
      className={`relative lg:px-24 px-12 py-12 min-h-screen flex flex-col items-center ${bgColor}`}
    >
      <h1 className="md:text-6xl text-5xl font-semibold my-4">Achievements</h1>
      <div>
        {achievementsContent.map((achievement, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={ITEM_ANIMATION_DURATION}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-6 bg-gray-200 px-12 py-4 rounded-xl max-w-4xl">
              <p className="my-1">{achievement}</p>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};
