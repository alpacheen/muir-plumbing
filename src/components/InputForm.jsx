import React, { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
  };

  return (
    <form
      className="form-container"
      method="POST"
    >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="form form-input"
      />
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />
      <br />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="form form-input"
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="form form-input"
      ></textarea>
      <br />
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded-xl border-2 w-24 bg-secondary text-primary py-2 mx-auto hover:bg-winter-sky hover:text-black transition-colors duration-200 text-2xl cursor-pointer "  
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
