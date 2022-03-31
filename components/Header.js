import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Michael Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi my name is Michael Guerrero. I'm a Full Stack Developer based in New York City!"
        ></meta>
        <meta name="title" content="Portfolio Website" />
        <meta
          name="description"
          content="¡Hola! Hello! My name is Michael Guerrero. I'm a Full Stack Developer based in New York City!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikelikescode.com/" />
        <meta property="og:title" content="Portfolio Website" />
        <meta
          property="og:description"
          content="¡Hola! Hello! My name is Michael Guerrero. I'm a Full Stack Developer based in New York City!"
        />
        <meta
          property="og:image"
          content="https://cdn.mikelikescode.com/0kHcOH2ZQhLvNpx2PFub"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mikelikescode.com/" />
        <meta property="twitter:title" content="Portfolio Website" />
        <meta
          property="twitter:description"
          content="¡Hola! Hello! My name is Michael Guerrero. I'm a Full Stack Developer based in New York City!"
        />
        <meta
          property="twitter:image"
          content="https://cdn.mikelikescode.com/0kHcOH2ZQhLvNpx2PFub"
        ></meta>
      </Head>

      <div className="w-full bg-[#52796f] text-center text-white py-1">
        <span className="font-light">
          Checkout my latest project!{" "}
          <a href="https://rest.mikelikescode.com"> rest.mikelikescode.com </a>
        </span>
      </div>

      <header className="absolute w-full mx-auto px-4 lg:px-16 my-6 z-10 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full justify-between">
            <div className="flex justify-start">
              <h1 className="text-4xl font-medium">
                {" "}
                <Link href="/">MG</Link>
              </h1>
            </div>
            <ul className="hidden lg:flex items-center text-xl font-regular">
              <li className="flex flex-col items-center mr-12">
                <Link href="/projects">Projects</Link>
                <div
                  className={
                    router.pathname == "/projects"
                      ? "h-[4px] w-[4px] bg-[#cad2c5] rounded-[50%]"
                      : ""
                  }
                ></div>
              </li>

              <li className="flex flex-col items-center mr-12">
                <Link href="/blog">Blog</Link>
                <div
                  className={
                    router.pathname == "/blog"
                      ? "h-[4px] w-[4px] bg-[#cad2c5] rounded-[50%]"
                      : ""
                  }
                ></div>
              </li>

              <li className="flex flex-col items-center">
                <h1 className="text-xl font-regular">
                  <Link href="mailto:mguerrero.codes@gmail.com">Contact</Link>
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
