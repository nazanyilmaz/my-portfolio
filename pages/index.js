import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  const MyComponent = () => (
    <div className="w-full">
      <ReactTyped
        startWhenVisible
        strings={[
          " <strong>Frontend</strong> Developer",
          "<strong>React</strong> Developer",
          "<strong>React Native </strong> Developer",
        ]}
        typeSpeed={50}
        backDelay={1000}
        loop
        fadeOut
        fadeOutDelay={1000}
      />
    </div>
  );
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg "
        alt="portfolio"
        className="hidden md:block h-outo absolute bottom-10 right-40 z-[1] "
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img
        src="/images/ball-2.svg "
        alt="portfolio"
        className="hidden md:block h-outo absolute bottom-10 left-10 z-[1] "
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl max-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-2xl text-gray-300">
              <span className="text-3xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="text-gray-300 mt-5 text-2xl font-extrabold tracking-normal uppercase md:text-5xl md:mt-3">
              Nazan YILMAZ
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:text-3xl md:mt-3">
              <MyComponent />
            </div>

            <div className="mt-5 text-2xl font-normal tracking-normal text-gray-300 md:text-4xl"></div>
          </div>
        </section>
        <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ms-10">
          <div>
            <pre>
              <code className="language-js">
                <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                  <span>// Portfolio.js </span>
                </div>
                <p>
                  <span className="text-gray-500">//</span>{" "}
                  <span className="text-purple-300">Todo:</span> How about
                  having fun with balloons? 🎈🎈
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/1472142550731571205/soY8MW5w_400x400.jpg"
                    alt="Me"
                    className="w-10 h-10 rounded-full"
                  />

                  <div className="">
                    <p className="text-sm">
                      <span className="text-pink-300"> {">"} </span> const
                      FRONTEND
                      <span className="font-bold text-pink-300"></span> =
                      ["HTML5", "CSS3","Bootsrapt", "JavaScript", "MVC",
                      "TypeScript"];{""}
                    </p>
                    <p className="text-sm">
                      <span className="text-pink-300"> {">"} </span> const
                      REACT-React Native
                      <span className="font-bold text-pink-300"></span> =
                      ["Redux", "Redux Thunk", "Redux Toolkit", "Firebase"];{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <a
                    href="https://github.com/nazanyilmaz?tab=repositories"
                    target={"_blank"}
                  >
                    <span className="transition duration-300">Projects</span>
                  </a>
                </div>
              </code>
            </pre>
          </div>
        </article>
      </main>
    </Layout>
  );
}
