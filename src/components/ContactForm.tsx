import emailjs from "emailjs-com";

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
export { handleOnSubmit };
