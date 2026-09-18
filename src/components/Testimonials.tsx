"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "CEO, BrightTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    review:
      "Working with Void & Key was a fantastic experience. Their team delivered a fast, modern website that exceeded our expectations.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Founder, Nexa Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review:
      "From planning to deployment, everything was handled professionally. Our platform is now faster, cleaner, and easier to scale.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review:
      "The attention to detail and design quality were outstanding. We received excellent support throughout the entire project.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-orange-400">
          What Clients Say
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Trusted by teams and businesses who value precision, performance,
          and long-term reliability.
        </p>

        <div className="relative mt-10">

          {/* Left Arrow */}
          <button
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
    w-12 h-12 rounded-full border border-[#3A3A3A]
    flex items-center justify-center
    text-white hover:border-[#F4A024]
    hover:text-[#F4A024]
    transition-all duration-300"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#F3F3F3] rounded-[20px] p-7 h-[250px]
      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
      flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7">{`"${item.review}"`}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow — filled orange as in design */}
          <button
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
    w-12 h-12 rounded-full bg-[#F4A024]
    flex items-center justify-center
    text-black
    hover:bg-[#dd7900]
    transition-all duration-300"
          >
            <FaArrowRight className="text-sm" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="h-3 w-3 rounded-full bg-[#F4A024]" />
          <span className="h-3 w-3 rounded-full bg-[#3A3A3A]" />
          <span className="h-3 w-3 rounded-full bg-[#3A3A3A]" />
        </div>
      </div>
    </section>
  );
}