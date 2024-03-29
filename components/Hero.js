import {
  FaAngleDoubleDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const quotes = [
  "I think, therefore I am.",
  "Inspire. Educate. Motivate.",
  "Why do programmers like dark mode? Because light attracts bugs. ;)",
  "What do programmers do when they are hungry? They grab a byte.",
];

const selectRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const Hero = () => {
  return (
    <div className="relative lg:px-24 px-12 min-h-screen flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-7/12 md:text-left text-center my-3">
        <h1 className="text-6xl font-semibold my-4">Hi! I&apos;m Nicky!</h1>
        <p className="text-lg">
          I am fascinated with backend development, machine learning, and the
          benefits of technology to society! Feel free to connect and reach out
          for future opportunities!
        </p>
        <p className="text-lg italic my-4">&quot;{selectRandomQuote()}&quot;</p>
        <div className="space-x-8 my-5">
          <Link href="https://github.com/nicklimmm/">
            <a className="hover:text-gray-900 text-gray-700">
              <FaGithub className="inline" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/nicklimmm/">
            <a className="hover:text-gray-900 text-gray-700">
              <FaLinkedin className="inline" />
            </a>
          </Link>
          <Link href="mailto:nickylim.p@gmail.com">
            <a className="hover:text-gray-900 text-gray-700">
              <FaEnvelope className="inline" />
            </a>
          </Link>
        </div>
      </div>
      <div className="md:w-5/12 md:my-0 my-4 flex justify-center">
        <div className="md:w-60 md:h-60 w-48 h-48 bg-red-400 rounded-full flex items-center justify-center">
          <Image
            src="/memoji.png"
            alt="memoji"
            layout="fixed"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="absolute bottom-10 animate__animated animate__bounce animate__infinite animate__slow">
        <FaAngleDoubleDown size={30} />
      </div>
    </div>
  );
};
