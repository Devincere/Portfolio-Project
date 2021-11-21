import { useState } from "react";
import axios from "axios";
import useForm from "./useForm";
import validate from "./validateInfo";

const ContactForm = ({ submitForm }) => {
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    if (handleSubmit()) {
      const { data } = await axios.post(
        `https://formspree.io/f/mdoyqznp`,
        values
      );

      if (!data.ok) {
        setError(true);
      }

      setIsSubmitted(true);
    }
  };

  return (
    <div className=" containter-fluid form mx-4">
      <form onSubmit={onSubmit} noValidate>
        <div className="row justify-content-center">
          <div className="col text-center form-title">
            <h2>How to reach me out</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col mb-3 col-lg-5">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Smith"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && !isSubmitted && <p>{errors.name}</p>}
          </div>
          <div className="col mb-3 col-lg-5">
            <label for="exampleFormControlInput2" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && !isSubmitted && <p>{errors.email}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col mb-3 col-lg-10">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <input
              className="form-control"
              type="text"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && !isSubmitted && <p>{errors.message}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <button type="submit" className="btn btn-outline-light form-button">
              Submit
            </button>
          </div>
        </div>
        {!error && isSubmitted && (
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="alert alert-success">
                We have received your message!
              </div>
            </div>
          </div>
        )}
        {error && isSubmitted && (
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="alert alert-danger">
                Sorry, something went wrong!
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
