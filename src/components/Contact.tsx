import emailjs from "emailjs-com";

export const Contact = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target as HTMLFormElement,
      import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
    e.currentTarget.reset();
  };
  return (
    <div>
      <div className="main-contact">
        <p></p>
        <div className="contact">
          <h4 className="cnt-tagline">Have an idea?</h4>

          <h4 className="cnt-tagline2">Let's work on it!</h4>

          <p className="tag">
            I believe to bring up ideas into reality.
            <br />
            Let's Research, Design and Develop the solution .
          </p>
          <form className="formContainer" onSubmit={handleOnSubmit}>
            <input placeholder="Your name" name="name" id="name" type="text" />
            <input
              placeholder="Your email"
              name="email"
              id="email"
              type="email"
              required
            />
            <textarea
              placeholder="Your message"
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
            ></textarea>
            <button className="submit-btn" type="submit">
              Send message
            </button>
          </form>
        </div>

        <div className="contact-det">
          <h4>Contact details</h4>
          <a href="mailto:motesarv@gmail.com">Mail</a>
          <a href="https://www.linkedin.com/in/sarvesh-mote-881818221">
            Meta address
          </a>
          <br />
          <h4>I'm available here</h4>
          <a href="https://twitter.com/SarvT_3?">X/Twitter</a>
          <a href="https://github.com/SarvT">Github</a>

          <br />
          <h4>My Profiles</h4>
          <a href="https://www.geeksforgeeks.org/user/sarveshmt/">
            GeeksForGeeks
          </a>
          <a href="https://leetcode.com/sarveshmt_/">LeetCode</a>
        </div>
      </div>
      <div className="top-btn">&uarr;</div>
    </div>
  );
};
