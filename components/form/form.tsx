import Field from "./field";

const Form = () => {
  return (
    <form
      method="POST"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="relative">
        <Field label="Name" name="name" type="text" placeholder="Your Name" />
      </div>
      <div className="relative my-4">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="relative">
        <label className="font-medium">Message</label>
        <textarea
          name="message"
          rows={10}
          className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-500 border rounded-lg dark:placeholder-gray-400 dark:text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          placeholder="Message"
        />
      </div>
      <div className="relative">
        <div data-netlify-recaptcha="true"></div>
      </div>
      <div className="relative mt-4">
        <button
          type="submit"
          className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-700 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
