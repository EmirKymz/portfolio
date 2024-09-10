import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import Link from "next/link";
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";


const TypingAnimation = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        "I am a Full Stack Developer",
        1000,
        "I am a Web Developer",
        1000,
        "I am a Software Engineer",
        1000,
        "I am a Freelancer",
        1000,
      ]}
      speed={40}
      style={{ fontWeight: "bold" }}
      repeat={Infinity}
      deletionSpeed={80}
    />
  );
};

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      {/*       <motion.img
        src="/images/computer.svg"
        alt="computer"
        className="hidden md:block h-20 absolute top-48 right-40 z-[1]"
        whileHover={{ y: -10, rotate: 45, transition: { duration: 0.3 } }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <a
        href="https://www.youtube.com/watch?v=Sagg08DrO5U"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src="/images/keyboard.svg"
          alt="keyboard"
          className="hidden md:block h-14 absolute bottom-10 left-10 z-[1]"
          whileHover={{ y: -10, rotate: -45, transition: { duration: 0.3 } }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
      </a> */}
      <main className="w-full h-full">
        <section className="h-full max-w-5xl w-full mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-xl text-gray-800 dark:text-white">
              <span className="text-2xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-3xl font-extrabold tracking-normal text-gray-800 md:text-5xl md:mt-3 dark:text-white">
              Emircan KAYMAZ
            </h1>
            <div className="mt-5 text-3xl font-normal text-transparent bg-gradient-to-r from-sky-400 via-indigo-700 to-cyan-500 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/EmirKymz"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-sky-400 hover:text-sky-400"
                whileHover={{ scale: 1.2 }}
              >
                <GithubIcon className="w-12 h-12 fill-current" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ekaymaz/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-sky-400 hover:text-sky-400"
                whileHover={{ scale: 1.2 }}
              >
                <LinkedinIcon className="w-12 h-12 fill-current" />
              </motion.a>
            </div>
          </div>
          {/* code block */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark max-w-full">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <pre className="text-gray-100">
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-400 text-xl">
                    <span>// Portfolio.js </span>
                  </div>
                  <p className="text-gray-300 text-xl leading-relaxed">
                    <span className="text-gray-400">//</span>{" "}
                    <span className="text-sky-400">About Me:</span> I study
                    Software Engineering at 42 Kocaeli, <br />
                    I'm a Developer passionate about web, mobile development,
                    and software engineering.
                  </p>

                  <div className="flex items-center space-x-10 mt-10">
                    <img
                      src="https://avatars.githubusercontent.com/u/99013427?v=4"
                      alt="Me"
                      className="w-28 h-28 rounded-full border-4 border-sky-500 shadow-lg"
                    />

                    <div className="flex-1">
                      <p className="text-gray-300 mb-2">
                        <span className="text-sky-600 font-bold"> {">"} </span> Imperative
                        Programming = ["C", "C++", "Python", "C#"];{" "}
                      </p>
                      <p className=" text-gray-300 mb-2">
                        <span className="text-sky-600 font-bold"> {">"} </span> Object
                        Oriented Programming = ["C++", "Python", "Java"];{" "}
                      </p>
                      <p className="text-gray-300 mb-2">
                        <span className="text-sky-600 font-bold"> {">"} </span> More =
                        ["Bash Script", "Docker", "Linux", "React-Native",
                        "React", "Cobol", "JavaScript"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mt-8">
                    <Link
                      href="/projects"
                      className="px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold text-xl rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Explore My Projects
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
