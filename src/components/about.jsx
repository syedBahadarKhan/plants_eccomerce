import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section with Background Image */}
     <div
  className="h-125 bg-cover bg-center relative flex flex-col items-center justify-center text-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
  }}
>
  {/* this is the blurnes applys on the whole div backgound image whic is black overly is applyed */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Text content */}
  <div className="relative text-white z-10">
    <h6 className="text-sm uppercase tracking-widest">About</h6>
    <h2 className="text-4xl md:text-7xl  mt-2">
      We are Passionate <br />  About Our Work
    </h2>
  </div>
</div>


      {/* About Text Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1679921582421-f770b37cd4d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50cyUyMGluJTIwcG90c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="About"
          className="w-full md:w-1/2 h-94 rounded-xl shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            We strive to provide our customers with the highest quality
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Happy Leaves Co. was founded in 1960 by a group of plant
            enthusiasts who recognized the positive impact that plants can have
            on our lives. Whether it’s purifying the air, reducing stress, or
            simply adding a touch of beauty to your environment, plants are more
            than just decoration—they’re a lifestyle.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values that Drive Everything We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Passionate About Work",
                desc: "Passion for work is enthusiasm and excitement for what you do.",
              },
              {
                title: "Creative Team Members",
                desc: "A creative team designs and executes campaigns & encourages innovation.",
              },
              {
                title: "Innovative Solutions",
                desc: "Finding new ways of using concepts and improving existing ideas.",
              },
              {
                title: "Quality Products",
                desc: "Product quality refers to how well a product satisfies our customers.",
              },
              {
                title: "Customer Satisfaction",
                desc: "Happy customers are delighted because of great service & care.",
              },
              {
                title: "Simple Interfaces",
                desc: "Simplicity minimizes complexity and makes processes user-friendly.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-green-600 text-4xl mb-4">🌱</div>
                <h5 className="text-xl font-semibold mb-2">{value.title}</h5>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1712912387959-e60633fd08b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8"
          alt="Mission"
          className="w-full lg:w-1/2  h-104 rounded-xl shadow-lg object-cover"
        />
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to make the world a greener place, one plant at a
            time. We strive to provide our customers with the highest quality
            plants and plant care products, along with the knowledge and support
            to help them thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
