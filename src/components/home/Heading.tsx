import TypeWriter from "typewriter-effect";

import AOS from "../AOS";
import data from "../../constants";

const Heading: React.FC = () => {
  return (
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div className="flex flex-wrap items-center sm:-mx-4">
        <div className="w-full md:w-1/2 md:px-2">
          {data.highlights.map((highlight) => {
            let i = data.highlights.indexOf(highlight);
            return (
              <AOS
                animation="fade-left"
                duration={i * 250}
                delay={i * 400}
                key={highlight}
              >
                <h1 className="flex my-2 text-3xl font-bold text-gray-100 sm:text-5xl lg:text-8xl md:text-7xl dark:text-white">
                  <span style={{ backgroundColor: data.colors[i] }}>
                    <p className="pt-2">{highlight}</p>
                  </span>
                </h1>
              </AOS>
            );
          })}
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
            <AOS delay="200" duration="300" animation="fade-down">
              <img
                src={data.social.avatar}
                className="rounded-full shadow hover:animate-pulse"
              />
            </AOS>

            <AOS duration="400" delay="400" animation="fade-left">
              <div className="flex flex-row justify-between mt-4 pl-36">
                <div className="flex flex-row space-x-4 hover:-rotate-2 rotate-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-90deg-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                    />
                  </svg>
                  <TypeWriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Yep, thats me")
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </div>
              </div>
            </AOS>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
