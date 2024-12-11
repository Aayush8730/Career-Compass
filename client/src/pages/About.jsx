import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Welcome to Career Compass!</h1>
      <p className="text-lg md:text-xl mb-6">
Your ultimate placement preparation platform for IET DAVV. Discover company insights, read and share interview experiences, explore job openings, and access valuable placement resources. Personalize your journey with your dashboard and get ready to navigate your career with confidence!
      </p>
      <h2 className="text-xl md:text-2xl font-semibold mb-2">Features:</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-2"> 
          <span className="font-semibold">User Authentication:</span> Safely sign in or register to unlock personalized features tailored just for you.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Admin Dashboard:</span> Empowering administrators with comprehensive tools to manage posts, users, comments, and more, all from one centralized hub.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Create, Edit, and Manage Posts:</span> Share your thoughts with the world by effortlessly creating and editing posts. Admins maintain full control over the publishing process.
        </li>
        <li className="mb-2">
          <span className="font-semibold">User Management:</span> Admins have the ability to manage users, ensuring a safe and welcoming environment for everyone.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Comment Moderation:</span> Foster constructive discussions by effectively moderating comments. Admins can remove inappropriate content to uphold a positive community atmosphere.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Responsive Design:</span> Enjoy a seamless browsing experience across devices, whether you're on a desktop, tablet, or smartphone.
        </li>
      </ol>
      <p className="text-lg md:text-xl">
        Career Compass is committed to providing a user-friendly platform where creators can express themselves freely, and readers can engage with enriching content. Join us on this journey of discovery, connection, and inspiration.
      </p>
    </div>
  );
};

export default About;
