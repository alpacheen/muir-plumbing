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
      className="grid grid-cols-1 gap-0.5 m-2 p-4 border-3 border-winter-sky rounded-lg space-y-4 mx-auto max-w-xl px-4 text-center bg-secondary/75 font-carter-one"
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
        className="form p-3 rounded-lg border-4 border-primary bg-winter-sky text-2xl text-black"
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
        className="form text-2xl border-4 border-primary rounded-lg p-3 text-primary bg-winter-sky"
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
        className="form text-2xl border-4 border-primary rounded-lg p-3 text-primary bg-winter-sky"
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="form text-2xl border-4 border-primary  rounded-lg p-3 text-primary h-32 resize-none bg-winter-sky focus:ring-0 focus:outline-none"
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
