import React, { useState } from "react";
import "./TestimonialSlider.css"; // Make sure to include your CSS here

const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  const currentTestimonial = testimonials[index];

  return (
    <div className="testimonial-container">
        <h1>Testimonials</h1>
      <div className="btn" id="btn-prev" onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="btn" id="btn-next" onClick={handleNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="testimonial">{currentTestimonial.text}</p>
      <div className="user">
        <img src={currentTestimonial.photo} alt="user" className="user-image" />
        <div className="user-details">
          <h4 className="username">{currentTestimonial.name}</h4>
          <p className="role">{currentTestimonial.position}</p>
        </div>
      </div>
      <div className="progress-dots">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`progress-dot ${index === idx ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
