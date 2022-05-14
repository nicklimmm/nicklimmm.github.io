import projectsContent from "../content/projects.yml";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaLink, FaGithubAlt } from "react-icons/fa";
import Link from "next/link";
import { ITEM_ANIMATION_DURATION } from "../config";

export const Projects = () => {
  return (
    <div className="relative lg:px-24 px-12 py-12 min-h-screen flex flex-col items-center">
      <h1 className="md:text-6xl text-5xl font-semibold my-4">Projects</h1>
      <div>
        {projectsContent.map((project, idx) => (
          <AnimationOnScroll
            key={idx}
            duration={ITEM_ANIMATION_DURATION}
            animateIn={`animate__fadeIn`}
          >
            <div className="my-12 bg-gray-200 px-12 py-6 rounded-xl">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <h2 className="text-lg font-semibold">{project.date}</h2>
              {project.description && (
                <ul className="mt-4">
                  {project.description.map((desc, idx) => (
                    <li className="my-1 list-disc list-inside" key={`${idx}`}>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {(project.repoLink || project.link) && (
                <div className="mt-3">
                  {project.repoLink && (
                    <Link href={project.repoLink}>
                      <a className="hover:text-gray-900 text-gray-700">
                        <FaGithubAlt className="inline" size={25} />
                      </a>
                    </Link>
                  )}

                  {project.link && (
                    <Link href={project.link}>
                      <a className="hover:text-gray-900 text-gray-700">
                        <FaLink className="inline" size={25} />
                      </a>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};