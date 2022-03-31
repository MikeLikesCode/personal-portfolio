import Header from "../../components/Header";
import { useEffect, useState } from "react";
import router from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import Moment from "react-moment";
import { FaArrowAltCircleRight as Right } from "react-icons/fa";

export default function Blog({ posts }) {
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
            mainImage: imageBuilder.image(p.mainImage).width(850).height(500),
            authorImage: imageBuilder
              .image(p.author[0].image)
              .width(100)
              .height(100),
          };
        })
      );
    } else {
      setMappedPost([]);
    }
  }, [posts]);

  if (!mappedPost.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      <div>
        <div className="flex flex-col lg:flex-row gap-x-10 mt-20 lg:mt-32 px-0 lg:px-16 mb-20 lg:mb-0 text-white">
          <div className="w-full lg:w-2/4">
            <img
              alt={mappedPost[0].title}
              className="w-full h-full rounded-md object-cover"
              src={mappedPost[0].mainImage}
            />
          </div>

          <div className="w-full lg:w-2/4">
            <div className="mt-4 mb-3 flex items-center">
              {mappedPost[0].category.map((cat, idx) =>
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
            <h1 className="text-5xl font-medium text-gray-200">
              {mappedPost[0].title}
            </h1>
            <p className="text-gray-300 mt-4 leading-loose font-medium">
              {mappedPost[0].body[0].children[0].text.slice(
                0,
                mappedPost[0].body[0].children[0].text.length
              )}
              ...
            </p>

            <a
              className="hover:cursor-pointer mt-4 flex items-center text-xl"
              onClick={() =>
                router.push(`/blog/post/${mappedPost[0].slug.current}`)
              }
            >
              Read More <Right className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-x-8 mt-20 lg:mt-20 mx-auto px-5 lg:px-16 mb-20 text-white">
        {mappedPost.length ? (
          mappedPost.map((p, index) => {
            if (p.category.includes("Blog Post") && index != 0)
              return (
                <div key={index} className="flex-1 my-10 lg:my-0">
                  <div className="h-80">
                    <img
                      alt={p.title}
                      className="w-full h-full rounded-md object-cover"
                      src={p.mainImage}
                    />
                  </div>
                  <div className="mt-4 mb-3 flex items-center">
                    {p.category.map((cat, idx) =>
                      cat != "Blog Post" ? (
                        <p
                          key={idx}
                          className="mr-4 text-xl text-theme-lgray font-normal bg-[#617e77] px-4 py-[1px] rounded-sm text-[0.95rem] font-bold"
                        >
                          {cat}
                        </p>
                      ) : null
                    )}
                  </div>
                  <h1 className="text-4xl text-gray-200">{p.title}</h1>
                  <p className="text-gray-300 mt-4 leading-loose font-medium">
                    {p.body[0].children[0].text.slice(
                      0,
                      p.body[0].children[0].text.length / 1.5
                    )}
                    ...
                  </p>

                  <a
                    className="hover:cursor-pointer mt-4 flex items-center text-xl"
                    onClick={() => router.push(`/blog/post/${p.slug.current}`)}
                  >
                    Read More <Right className="ml-2 text-lg" />
                  </a>
                </div>
              );
          })
        ) : (
          <div>No Post Yet!</div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "post"] | order(publishedAt desc) { title,"category": categories[]->title, publishedAt, slug, body, mainImage, "author": *[_type=="author"]{name,image}} '
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
