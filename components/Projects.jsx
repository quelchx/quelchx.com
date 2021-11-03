import React from "react";

export default function Projects() {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
      <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium tracking-tight text-green-600 uppercase">
              What I have been up to
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Side Projects
            </h2>
            <p className="my-6 text-lg text-gray-600">
              Here are a few useful packages and side projects I have created.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-8">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                    Awesome product! And the customer service is exceptionally
                    well.
                  </p>
                </div>

                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                  Jane Cooper
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
              </div>
              <img
                className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                    I can't express enough, how amazing this service has been
                    for my company.
                  </p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                  John Doe
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
              </div>
              <img
                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                    I can't express enough, how amazing this service has been
                    for my company.
                  </p>
                </div>

                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                  John Smith
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
              </div>
              <img
                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
