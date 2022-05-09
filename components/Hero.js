import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaAngleDoubleDown,
} from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="relative lg:px-24 px-12 min-h-screen flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-7/12 md:text-left text-center my-3 ml-8">
        <h1 className="text-6xl font-semibold my-4">Hi! I&apos;m Nicky!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptates nesciunt, totam autem repellendus facere eaque eligendi
          doloremque voluptatum magni repellat, recusandae obcaecati et
          perspiciatis sint, soluta rem aspernatur vitae.
        </p>
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
