import Moment from "react-moment";
import { useRouter } from "next/router";

export default function Post({ post }) {

    return (
      <div
        className="flex-1 my-14 lg:my-0 text-white"
      >
        <img alt={post.title} src={post.mainImage} />
        <h1 className="text-4xl mt-6 font-medium text-theme-dgray">{post.title}</h1>
          <div className="w-full mt-4 flex text-md text-theme-gray font-medium">
            {post.category.map((p, index) => (
              <div className={ index != index.length ? "mr-4" : "mr-0"}>
                <p className="bg-gray-500 py-1 px-4 rounded-[20px]">
                {p}
                </p>
              </div>
            ))}
        </div>
        <div className="mt-5 flex items-center">
        <a className="mr-5 underline" rel="noopener" target="_blank" href={post.website}>Website</a>
          <a className="underline leading-loose" target="_blank" rel="noopener" href={post.github}>Github</a>
        </div>
      </div>
    );
  }
