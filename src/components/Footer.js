import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">PlayPause</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.linkedin.com/in/yashwanth-prasad-b-l-583804193/" target="_blank" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
              </li>
              <li>
                  <a href="https://takeuforward.org/" target="_blank" className="mr-4 hover:underline md:mr-6">Learn DSA</a>
              </li>
              <li>
                  <a href="https://flowbite.com/" target="_blank" className="mr-4 hover:underline md:mr-6">Flowbite</a>
              </li>
              <li>
                  <a href="https://github.com/yashwanth-1341/React-Projects" target="_blank" className="hover:underline">Github</a>
              </li>
          </ul>
      </footer>
  )
}