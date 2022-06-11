import type { NextPage } from 'next'

const Header2: NextPage = () => {
  return (
    <>
      <div className="" id="main_menu">
        <ul
          className="flex flex-wrap p-1 text-sm  sm:bg-gray-300 md:p-2 md:text-base"
          id="menu_nav"
        >
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-1 py-2 md:mb-0"
            id="button_home"
          >
            <a
              className="whitespace-no-wrap mr-12 font-semibold text-blue-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/index.php"
            >
              <span className="last firstlevel">LOGO</span>
            </a>
          </li>
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-4 py-2 md:mb-0"
            id="button_admin"
          >
            <a
              className="whitespace-no-wrap font-semibold text-gray-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/index.php?action=admin"
            >
              <span className="firstlevel">About</span>
            </a>
            <ul className="absolute left-0 top-0 z-10 mt-10 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <svg
                className="absolute left-0 top-0 z-0 ml-16 -mt-3 block h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              </svg>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=featuresettings"
                >
                  <span className="">Funzioni ed opzioni</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=packages"
                >
                  <span className="">Gestore Pacchetti</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=permissions"
                >
                  <span className="">Permessi</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-1 py-2 md:mb-0"
            id="button_moderate"
          >
            <a
              className="whitespace-no-wrap font-semibold text-gray-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/moderate/"
            >
              <span className="firstlevel">Services</span>
            </a>
            <ul className="absolute left-0 top-0 z-10 mt-10 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <svg
                className="absolute left-0 top-0 z-0 ml-3 -mt-3 block h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              </svg>
              <li className="whitespace-no-wrap p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/moderate/?area=modlog"
                >
                  <span className="">Registro moderazione</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/moderate/?area=reports"
                >
                  <span className="">Post segnalati</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-1 py-2 md:mb-0"
            id="button_profile"
          >
            <a
              className="whitespace-no-wrap font-semibold text-gray-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/profile/"
            >
              <span className="firstlevel">Testimonials</span>
            </a>
            <ul className="absolute left-0 top-0 z-10 mt-10 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <svg
                className="absolute left-0 top-0 z-0 ml-3 -mt-3 block h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              </svg>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/"
                >
                  <span className="">Sommario</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=account"
                >
                  <span className="">Impostazioni account</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=forumprofile"
                >
                  <span className="">Profilo forum</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=mentions"
                >
                  <span className="">Tag</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-1 py-2 md:mb-0"
            id="button_pm"
          >
            <a
              className="whitespace-no-wrap font-semibold text-gray-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/pm/"
            >
              <span className="firstlevel">Portfolio</span>
            </a>
            <ul className="absolute left-0 top-0 z-10 mt-10 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <svg
                className="absolute left-0 top-0 z-0 ml-3 -mt-3 block h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              </svg>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/pm/"
                >
                  <span className="">Leggi i tuoi messaggi</span>
                </a>
              </li>
              <li className="whitespace-no-wrap rounded-full p-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 md:text-base">
                <a
                  className="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/pm/?sa=send"
                >
                  <span className="">Invia un messaggio privato</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="group relative mx-1 mb-1 rounded-full bg-gray-300 px-1 py-2 md:mb-0"
            id="button_like"
          >
            <a
              className="whitespace-no-wrap font-semibold text-gray-600 hover:text-blue-800"
              href="http://www.italiansubs.local:8081/forum/profile/?area=showposts;sa=liked"
            >
              <span className="firstlevel">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header2
