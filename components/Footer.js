import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";

export default function Footer({}) {
  return (
    <footer className="w-full py-4 border-t-2">
      <div className="mx-4 py-1 mx-14 flex justify-between text-white">
        <div>
          <h1 className="text-md w-4/6 lg:w-full">
            © Copyright Michael Guerrero 2021
          </h1>
        </div>
        <div>
          <ul className="flex item-center">
            <li>
              {" "}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100007482829059"
                rel="noreferrer"
              >
                <FaFacebookF className="text-xl mr-5" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/mikelikescode"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl mr-5" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/michael-guerrero-3801a0168/"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
