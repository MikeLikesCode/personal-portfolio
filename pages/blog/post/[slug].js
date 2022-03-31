import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";

import Header from "../../../components/Header";

const Post = ({ title, body, image, categories }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "8smoykfk",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(image).width(1080).height(600));
  }, [image]);
  return (
    <div>
      <Header />
      <div className="bg-theme-background min-h-screen text-white mx-auto">
        <div className="flex flex-col items-center mb-14 mt-24">
          <h1 className="mt-10 text-5xl text-center">{title}</h1>

          <div className="mt-4 mb-3 flex items-center">
              {categories.map((cat, idx) =>
                cat != "Blog Post" ? (
                  <p
                    key={idx}
                    className="mr-4 text-xl text-theme-lgray font-normal bg-[#617e77] px-4 py-[1px] rounded-sm text-[0.95rem] font-bold"
                  >
                    {" "}
                    {cat}
                  </p>
                ) : null
              )}
            </div>

          <p className="text-center mt-4 w-3/4 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis velit totam quia optio voluptate numquam provident
            architecto doloremque debitis consectetur, ipsa, excepturi tempore
            tempora aperiam explicabo, culpa minus aliquam mollitia.
          </p>

          {imageUrl && (
            <img
              alt="blog banner"
              className="w-2/4 my-8 rounded"
              src={imageUrl}
            />
          )}
          <BlockContent className="mt-5 px-20" blocks={body} />
        </div>
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
    `*[ _type == "post" && slug.current == "${pageSlug}"] { title,"category": categories[]->title, publishedAt, slug, body, mainImage, "author": *[_type=="author"]{name,image}} `
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
        categories: post.category
      },
    };
  }
};

export default Post;
