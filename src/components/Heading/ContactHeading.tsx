import AOS from "../AOS";
import data from "../../constants";

const ContactHeading = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
      <AOS animation="fade-up" delay="500">
        <div className="relative">
          <p className="mb-2 font-medium text-gray-700 uppercase dark:text-white">
            Want to get in touch?
          </p>
          <section>
            <h1 className="flex my-2 text-4xl font-bold text-gray-100 md:text-8xl dark:text-white">
              <span
                style={{
                  backgroundColor:
                    data.colors[Math.floor(Math.random() * data.colors.length)],
                }}
              >
                <p className="pt-2 font-monaco">Contact?</p>
              </span>
            </h1>
          </section>
        </div>
        <p className="pt-4 text-2xl text-gray-700 dark:text-gray-200">
          If your interesting in leaving a message feel free to use this simple
          form.
        </p>
      </AOS>
    </div>
  );
};

export default ContactHeading;
