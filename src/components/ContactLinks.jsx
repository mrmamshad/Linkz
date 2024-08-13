import React from 'react';

const ContactLinks = ({ icon: Icon, name, hoverBg }) => {
  const defaultBg = '#FFFFFF'; // Default background color

  return (
    <div
      className="flex items-center w-5/5 sm:w-4/5 justify-between mx-auto space-x-3 p-4 rounded-2xl cursor-pointer group"
      style={{
        backgroundColor: defaultBg,
        transition: 'background-color 0.6s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBg}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = defaultBg}
    >
      <Icon className="text-white w-6 h-6 group-hover:scale-[2.7] group-hover:rotate-90 duration-700" />
      <span className="text-black/80 font-medium flex-1 text-center">{name}</span>
    </div>
  );
};

export default ContactLinks;
