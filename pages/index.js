import Head from "next/head";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import td from "../public/3d.png";
import python from "../public/python.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import JavaScript from "../public/JavaScript.png";
import ReactNative from "../public/React.png";
import Flask from "../public/Flask.png";
import Django from "../public/Django.png";
import html from "../public/html.png";
import css from "../public/css.png";
import sass from "../public/sass.png";
import redux from "../public/redux.png";
import nextjs from "../public/nextjs.png";
import typescript from "../public/typescript.png";
import node from "../public/node.png";
import mongodb from "../public/mongodb.png";
import mysql from "../public/mysql.png";
import postgresql from "../public/postgresql.png";
import bootstrap from "../public/bootstrap.png";
import tailwind from "../public/tailwind.png";
import jquery from "../public/jquery.png";
import git from "../public/git.png";
import wordpress from "../public/wordpress.png";
import office from "../public/office.png";
import figma from "../public/figma.png";
import blender from "../public/blender.png";
import adobe from "../public/adobe.png";
import mui from "../public/mui.png";
import mongoose from "../public/mongoose.png";
import ejs from "../public/ejs.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio | Welcome to my website! I'm glad you're here.</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-20">
        <section className="max-h-screen mb-14">
          <nav className="py-8 mb-4 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Zi9_IWNT0Laopmm4ls3dU5GuF6C4gCoq/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
              AFRAAN MUHAMMED
            </h2>
            <h3 className="text-2xl py-1 dark:text-white md:text-base font-medium">
              Full Stack Developer and Security Specialist
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
              A Lifelong Learner, Currently Learning Artificial Intelligence and
              Cloud Computing.
            </p>
            <div className="text-3xl flex justify-center gap-8 py-2 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/hiafraan"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/raanlance/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-80 md:w-80">
              <Image src={td} layout="fill" objectFit="cover" alt="img" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-2 mb-6 text-teal-600 dark:text-white font-bold border-b-2 border-teal-200">
              Work Experience
            </h3>
            <h3 className="text-xl py-2 dark:text-white font-medium">
              WordPress Developer, Elite Business & Tax Consultancy{" "}
              <span className="text-teal-500">[Apr 2020 – Present]</span>
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Developed and maintained the company's website using{" "}
              <span className="text-teal-500 font-semibold">WordPress</span>, a
              popular CMS.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Collaborated with the consulting team to design and implement
              new features and functionality.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Improved the website's performance and user experience through
              regular updates and bug fixes.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Successfully launched website updates on schedule, resulting in
              a{" "}
              <span className="text-teal-500 font-semibold">30% increase</span>{" "}
              in user engagement and contributing to the company's overall
              success.
            </p>
            <h3 className="text-xl py-2 mt-2 dark:text-white font-medium">
              WordPress Developer, MHTravels & Tours{" "}
              <span className="text-teal-500">[Sep 2022 – Present]</span>
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Developed and maintained the website for MHTravels Agency using{" "}
              <span className="text-teal-500 font-semibold">WordPress</span>, a
              CMS.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Collaborated with the marketing team to design and implement new
              features to improve user experience.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Monitored website performance and made updates as needed to
              ensure smooth operation.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Assisted in troubleshooting and resolving technical issues as
              they arose.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Contributed to the overall success of the company by
              successfully launching multiple updates to the website on the
              schedule that, resulted in a{" "}
              <span className="text-teal-500">20%</span> increase in bookings.
            </p>
          </div>
          <div className="mt-8 mb-8 lg:flex gap-10">
            <div className=" shadow-[0_5px_20px_5px_rgba(0,0,0,0.1)] p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-3xl  py-2 mb-10 text-teal-600 dark:text-black font-bold border-b-2 border-teal-200">
                Skills
              </h3>
              <div className="flex gap-8 justify-center m-2 mb-4 flex-wrap">
                <Image src={python} width={50} height={50} alt="img" />
                <Image src={JavaScript} width={50} height={50} alt="img" />
                <Image src={Flask} width={50} height={50} alt="img" />
                <Image src={Django} width={50} height={50} alt="img" />
                <Image src={html} width={50} height={50} alt="img" />
                <Image src={css} width={50} height={50} alt="img" />
                <Image src={sass} width={50} height={50} alt="img" />
                <Image src={ReactNative} width={50} height={50} alt="img" />
                <Image src={redux} width={50} height={50} alt="img" />
                <Image src={nextjs} width={50} height={50} alt="img" />
                <Image src={typescript} width={50} height={50} alt="img" />
                <Image src={node} width={50} height={50} alt="img" />
                <Image src={mongodb} width={50} height={50} alt="img" />
                <Image src={mongoose} width={50} height={50} alt="img" />
                <Image src={mysql} width={50} height={50} alt="img" />
                <Image src={postgresql} width={50} height={50} alt="img" />
                <Image src={ejs} width={50} height={50} alt="img" />
                <Image src={bootstrap} width={50} height={50} alt="img" />
                <Image src={tailwind} width={50} height={50} alt="img" />
                <Image src={mui} width={50} height={50} alt="img" />
                <Image src={jquery} width={50} height={50} alt="img" />
                <Image src={git} width={50} height={50} alt="img" />
                <Image src={wordpress} width={50} height={50} alt="img" />
                <Image src={office} width={50} height={50} alt="img" />
                <Image src={figma} width={50} height={50} alt="img" />
                <Image src={blender} width={50} height={50} alt="img" />
                <Image src={adobe} width={50} height={50} alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-2 mb-6 text-teal-600 dark:text-white font-bold border-b-2 border-teal-200">
              Personal Projects
            </h3>
            <h3 className="text-xl py-2 dark:text-white font-medium">
              HackGenius{" "}
              <span className="text-teal-500">[Jan 2020 - Mar 2020]</span>
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Implemented the back-end with Python and{" "}
              <span className="text-teal-500 font-semibold">Flask</span> and
              built the front-end with HTML, CSS, and JavaScript.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Designed the database schema and implemented CRUD operations
              using{" "}
              <span className="text-teal-500 font-semibold">PostgreSQL</span>.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Created a content management system for administrators to add,
              edit, and delete content.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Implemented user authentication and comment functionality and
              successfully deployed the application to a cloud platform.
            </p>
            <h3 className="text-xl py-2 dark:text-white font-medium">
              Brand Since 97{" "}
              <span className="text-teal-500">[Oct 2021 - Dec 2021]</span>
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Developed a website from scratch using <span className="text-teal-500 font-semibold">React</span>, <span className="text-teal-500 font-semibold">Strapi</span>, and <span className="text-teal-500 font-semibold">Stripe</span>.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Designed the database schema and implemented CRUD operations using Strapi (a Node.js headless CMS).
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Created the front-end using React and <span className="text-teal-500 font-semibold">Redux Toolkit</span>.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Integrated Stripe for payment processing.
            </p>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              - Deployed the website on <span className="text-teal-500 font-semibold">Render</span>, a cloud hosting platform.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href=""
                target=""
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="img"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href=""
                target=""
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div className="pb-12">
            <h3 className="text-3xl py-2 mb-6 text-teal-600 dark:text-white font-bold border-b-2 border-teal-200">
              Education
            </h3>
            <h3 className="text-xl py-2 dark:text-white font-medium">
              University of Ruhuna, Sri Lanka{" "}
              <span className="text-teal-500">[Feb 2020 – Present]</span>
            </h3>
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">
              Undergraduate | BSc (Hons) Agricultural Resource Management &
              Technology
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white  p-4 text-center text-lg">
        Developed By Me © 2023
      </footer>
    </div>
  );
}
