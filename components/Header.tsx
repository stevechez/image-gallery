import type { NextPage } from 'next'

const Header: NextPage = () => {
  return (
    <>
      <section className="w-full bg-white px-8 text-gray-700">
        <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="mb-5 flex items-center font-medium text-gray-900 md:mb-0 lg:w-auto lg:items-center lg:justify-center"
            >
              <span className="mx-auto select-none text-xl font-black leading-none text-gray-900">
                tails<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="mb-5 flex flex-wrap items-center text-base md:mb-0 md:ml-8 md:border-l md:border-gray-200 md:pl-8">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
            </nav>
          </div>

          <div className="ml-5 inline-flex items-center space-x-6 lg:justify-end">
            <a
              href="#"
              className="whitespace-no-wrap text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
