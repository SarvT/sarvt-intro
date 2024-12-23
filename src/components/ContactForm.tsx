const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      e.target,
      process.env.PUBLIC_KEY
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
  e.target.reset();
};
export { handleOnSubmit };
