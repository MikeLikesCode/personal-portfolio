import React, { useState, useEffect } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import {
  FaSpotify as Spotify,
  FaBook as Book,
  FaLaptop as Laptop,
  FaSortDown as Down,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaGithub as Github,
} from "react-icons/fa";
import { Octokit } from "octokit";

import Post from "../components/Project";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moment from "moment";

export default function Home({ posts, github }) {
  const [mappedPost, setMappedPost] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});

  useEffect(() => {
    let isMounted = true;

    async function fetchSong() {
      if (isMounted) {
        try {
          const song = await (await fetch("/api/spotify")).json();
          setNowPlaying(song);
        } catch {
          return;
        }
      }
    }

    if (isMounted) fetchSong();

    const getSong = setInterval(fetchSong, 7500);

    if (posts.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "8smoykfk",
        dataset: "production",
      });

      setMappedPost(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imageBuilder.image(p.mainImage).width(550).height(550),
          };
        })
      );
    } else {
      setMappedPost([]);
    }

    return () => {
      clearInterval(getSong); //This is important
      isMounted = false; // Let's us know the component is no longer mounted.
    };
  }, [posts, useState]);

  return (
    <div>
      <Header />

      <section className="bg-[#354F52] relative z-0 py-40 pb-20 text-white flex flex-col items-center">
        <h1 className="text-center font-medium lg:font-normal text-4xl lg:text-7xl">
          ¡Hola! Hello!{" "}
          <span className="text-[#84A98C]">I'm Michael Guerrero.</span>
        </h1>
        <p className="text-theme-textSecondary w-11/12 lg:w-1/2 text-center text-2xl lg:text-4xl mt-3 font-normal lg:font-extralight">
          I'm a Full Stack Developer who learns by working on random projects.
        </p>

        <div className="flex flex-col lg:flex-row my-10 text-theme-details">
          <p className="flex text-md mx-8 items-center">
            <Spotify className="text-4xl mr-3" /> Listening to - <br />{" "}
            {nowPlaying.isPlaying && nowPlaying.title
              ? `${
                  nowPlaying.title.length > 25
                    ? nowPlaying.title.slice(0, 25) + "..."
                    : nowPlaying.title
                } by ${nowPlaying.artist}`
              : "Nothing Right Now"}
          </p>
          <p className="flex text-md my-6 lg:my-0 mx-8 items-center">
            <Book className="text-4xl mr-3" /> Currently Reading - <br />{" "}
            Darkness At Noon{" "}
          </p>
          <p className="flex text-md mx-8 items-center">
            <Github className="text-4xl mr-3" /> Last Pushed - <br />{" "}
            {github[0]
              ? moment(github[0].created_at).format("MMMM Do")
              : "Github is down?"}
          </p>
        </div>

        <div className="absolute flex justify-center py-1 bg-[#212529] -bottom-6 h-12 w-12 rounded-full">
          <Down className="text-white text-3xl" />
        </div>
      </section>

      <section id="about" className="pt-28 pb-10 px-10 lg:px-20 text-white">
        <div className="flex items-center">
          <span className="text-4xl text-theme-accent">About Me</span>{" "}
          <span className=" ml-5 w-20 h-1 bg-theme-accent"></span>
        </div>

        <div>
          <div className="grid mt-10 gap-y-10 grid-cols-1 lg:gap-x-20 lg:grid-cols-2 lg:gap-y-0 ">
            <div>
              <h1 className="mb-5 text-5xl leading-tight font-medium">
                Learning is hard at times. Though keeping the right mindset
                helps a long way.
              </h1>
              <p className="text-3xl leading-snug font-light">
                I'm currently a freelancer and Full Time Full Stack Developer.
                I've been developing websites and web apps personally and in
                programs throughout my high school years and have become more
                interested in learning more about coding.
              </p>

              <div className="flex items-center font-medium mt-5">
                <span className="text-8xl text-theme-accent mr-2"> 3 </span>
                <span className="text-2xl leading-tight ">
                  Years of <br /> experince
                </span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="mb-5 text-5xl leading-snug lg:leading-normal font-medium">
                  Any Type of Query & Discussion.
                </h1>
                <p className="text-3xl leading-snug font-light">
                  Intrested on working on a project together or need more
                  information on my skill set? Contact me below so we can get to
                  talking!
                </p>
                <div className="mt-8 text-3xl text-theme-accent underline">
                  <div>
                    <a
                      className="w-full flex flex-col lg:flex-row lg:items-center"
                      rel="noreferrer"
                      href="mailto:mguerrero.codes@gmail.com"
                    >
                      <span className="text-2xl lg:text-3xl">
                        mguerrero.codes@gmail.com
                      </span>
                      <FaArrowRight className="ml-3 hidden lg:block text-2xl" />
                    </a>
                  </div>
                </div>

                <ul className="flex items-center mt-10">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.facebook.com/profile.php?id=100007482829059"
                    >
                      <FaFacebook className="text-4xl mr-10" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.instagram.com/mikelikescode"
                    >
                      {" "}
                      <FaInstagram className="text-4xl mr-10" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.linkedin.com/in/michael-guerrero-3801a0168/"
                    >
                      {" "}
                      <FaLinkedin className="text-4xl" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pt-16 pb-28 px-10 lg:px-20 text-white">
        <div className="flex items-center">
          <span className="text-4xl text-theme-accent">Project Spotlight</span>{" "}
          <span className=" ml-5 w-20 h-1 bg-theme-accent"></span>
        </div>

        <div className="grid mt-20 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-5">
          {mappedPost.length
            ? mappedPost.map((p, index) => <Post key={index} post={p} />)
            : null}

          <div className="xl:hidden flex flex-col items-center justify-center pb-24">
            <div>
              <h1 className="text-center text-4xl leading-[50px] mb-2">
                Check out my other projects
              </h1>
            </div>

            <div>
              <div className="bg-[#CAD2C5] text-center mt-4 px-8 py-1 rounded-[2px]">
                <h1 className="text-xl text-black font-medium font-regular">
                  <Link href="/projects">All projects</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block flex mt-14 flex-col items-center justify-center pb-10">
          <div>
            <h1 className="text-center text-4xl leading-[50px] mb-2">
              Check out my other projects
            </h1>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#CAD2C5] text-center w-1/6 px-8 py-1 rounded-[2px]">
              <h1 className="text-xl font-medium text-black font-regular">
                <Link href="/projects">All projects</Link>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "projects"][0...3] | order(publishedAt desc) { title,"category": categories[]-> title, publishedAt, slug, mainImage, github, website, "author": *[_type=="author"]{name,image}} '
  );

  const url = `https://8smoykfk.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const github = await octokit
    .request(`https://api.github.com/users/mikelikescode/events`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });

  if (!result.result || !result.result.length) {
    return {
      props: {
        post: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
        github,
      },
    };
  }
};
