import React, { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    const isValid = Object.keys(formData).every(key => 
      validateField(key, formData[key])
    );

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      alert(`Thank you, ${formData.name}! Your message has been received. We'll contact you within 24 hours.`);
    } catch (error) {
      alert("Sorry, there was an error sending your message. Please try calling us directly at (07) 1234-5678.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="form-container" 
      onSubmit={handleSubmit}
      noValidate
    >
    {/*name */}
      <div className="w-full">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name "
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`} 
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1 text-left">
            {errors.name}
          </p>
        )}
      </div>

      {/* email*/}
      <div className="w-full">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1 text-left">
            {errors.email}
          </p>
        )}
      </div>

      {/* phone */}
      <div className="w-full">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone "
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`form-input ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1 text-left">
            {errors.phone}
          </p>
        )}
      </div>

      {/* message */}
      <div className="w-full">
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your plumbing needs "
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          rows="4"
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`form-input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1 text-left">
            {errors.message}
          </p>
        )}
      </div>

      {/* submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

    </form>
  );
};

export default InputForm;