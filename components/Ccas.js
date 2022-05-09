import ccasContent from "../content/ccas.yml";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Ccas = () => {
  return (
    <div className="relative lg:px-24 px-12 py-12 min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="md:text-6xl text-5xl font-semibold my-4">
        Co-curricular Activities
      </h1>
      <div>
        {ccasContent.map((cca, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={2}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-12 bg-gray-200 px-12 py-6 rounded-xl">
              <h2 className="text-lg font-semibold">{cca.position}</h2>
              <h2 className="text-lg font-semibold">{cca.organisation}</h2>
              <h2 className="text-lg font-semibold">{cca.date}</h2>
              {cca.description && (
                <ul className="mt-4">
                  {cca.description.map((desc, idx) => (
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
