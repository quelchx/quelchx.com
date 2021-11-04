import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import NetlifyForm from "@/components/NetlifyForm";
import AOS from "@/components/AOS";
export default function Home() {
  return (
    <div>
      <Hero id="top" />
      <Content />
      <AOS delay="500" duration="500">
        <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-6xl px-10 mx-auto border-solid lg:px-12">
            <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
              <div className="box-border flex-1 text-center border-solid sm:text-left">
                <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                  Need a Boost?
                </h2>
                <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                  Looking for a developer? My services will help you maximize
                  and boost your productivity.
                </p>
              </div>
              <a
                href="#form"
                className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-green-600 border border-green-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-green-700 hover:border-green-700 hover:text-white focus-within:bg-green-700 focus-within:border-green-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </AOS>
      <Projects />
      <Features />
      <NetlifyForm />
    </div>
  );
}
