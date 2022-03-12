import ContainerBlock from "@/components/Layout/ContainerBlock";
import data from "@/constants/data";

export default function AboutPage() {
  return (
    <ContainerBlock
      title="Eric Quelch - About"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <div class="max-w-6xl pb-28 px-6 mx-auto lg:px-12">
        <section class="py-10">
          <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <div className="pl-4">
              <h1 className="text-4xl md:text-8xl flex font-bold text-gray-100 dark:text-white my-2">
                <span
                  style={{
                    backgroundColor:
                      data.colors[
                        Math.floor(Math.random() * data.colors.length)
                      ],
                  }}
                >
                  <p className="font-monaco pt-2">My Journey</p>
                </span>
              </h1>
            </div>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              I'm a full stack web developer currently living in the London
              Ontario area. I have spent the last 4 years perfecting my craft
              and absolutely love what I do!
            </p>
          </div>
        </section>

        <ol class="relative border-l border-gray-800 dark:border-gray-500">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time class="hvr-pulse-grow mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
              February 2019
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              My college education begins!
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I decided to leave my old position at my previous job to take up
              Computer Science. I began my education spending the first six
              months learning various mathematical algorithms and methods at
              Mohawk College. The first language I learned was Python before
              moving heavily into Java. At first I struggled, but through hard
              work, a lot of time and determination -- I slowly got better.
            </p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time class="mb-1 hvr-pulse-grow text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
              April 2020
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              End of first full semester -- Covid 19 Pandemic
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Due to the pandemic and some major life altering changes causing
              me to move and shift gears in life, I decided to move and contunie
              my education at a different College. I began studying and
              perfecting my web development skills at Fanshawe College.
            </p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time class="hvr-pulse-grow mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
              April 2022
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Graduation after 3 1/2 years of school.
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              I will be graduating and seeking full time work this upcoming
              April 2022, so look out!
            </p>
          </li>
        </ol>
      </div>
    </ContainerBlock>
  );
}
