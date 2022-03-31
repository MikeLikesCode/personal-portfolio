import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";

import Header from "../../../components/Header";

const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "8smoykfk",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(image));
  }, [image]);
  return (
    <div className="bg-theme-background min-h-screen py-2 text-white">
      <Header />
      <div className="flex flex-col items-center mb-14">
        <h1 className="mt-10 text-4xl text-center">{title}</h1>
        {imageUrl && <img alt="project banner" className="w-2/4 my-8 rounded" src={imageUrl} />}
        <BlockContent className="mt-5 px-20" blocks={body} />
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "projects" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://8smoykfk.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
