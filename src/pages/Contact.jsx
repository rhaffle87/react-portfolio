import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="Contact p-6 sm:p-8 md:p-10 mt-32 max-w-4xl w-full mx-auto">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center opacity-50 mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Let's get connected with me!
        </p>

        <form
          action="https://formsubmit.co/rhaffle87@gmail.com"
          method="POST"
          className="bg-zinc-800 p-6 sm:p-8 md:p-10 rounded-md w-full sm:max-w-md md:max-w-2xl mx-auto"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold flex items-center gap-2">
                <FiUser /> Name
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Input your name ..."
                className="border border-zinc-500 p-3 rounded-md bg-transparent focus:outline-none focus:border-yellow-600 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold flex items-center gap-2">
                <FiMail /> Email
              </label>
              <input
                type="email"
                name="Email"
                placeholder="Input your email ..."
                className="border border-zinc-500 p-3 rounded-md bg-transparent focus:outline-none focus:border-yellow-600 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Message"
                className="font-semibold flex items-center gap-2"
              >
                <FiMessageSquare /> Message
              </label>
              <textarea
                name="Message"
                id="Message"
                rows={6}
                placeholder="Give me your message ..."
                className="border border-zinc-500 p-3 rounded-md bg-transparent focus:outline-none focus:border-yellow-600 transition-all"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-yellow-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
