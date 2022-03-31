import Header from "../../components/Header";
import { useEffect, useState } from "react";
import router from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import Moment from "react-moment";
import Project from '../../components/Project'

export default function Projects({ posts }) {
  const [mappedPost, setMappedPost] = useState([]);
  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "8smoykfk",
        dataset: "production",
      });

      setMappedPost(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imageBuilder.image(p.mainImage).width(650).height(500),
            authorImage: imageBuilder.image(p.author[0].image).width(150).height(150),
          };
        })
      );
    } else {
      setMappedPost([]);
    }
  }, [posts]);

  return (
    <div>
      <Header />
      <div className="block grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-5 pt-40 mx-auto px-8 lg:px-20 mb-20 text-white">
        {mappedPost.length ? (
          mappedPost.map((p, index) => {
          return( 
            <Project key={index} post={p} />
          )})
        ) : (
          <div>No Post Yet!</div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "projects"] | order(publishedAt desc) { title,"category": categories[]->title, publishedAt, github, website, slug, body, mainImage, "author": *[_type=="author"]{name,image}} '
  );

  const url = `https://8smoykfk.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

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
      },
    };
  }
};
