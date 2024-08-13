const ContactsHeader = ({name = ""}) => {
  return (
    <div className="flex  w-[200px]  mx-auto items-center justify-center space-x-2 text-white/70">
      <div className="flex-grow border-t border-gray-600"></div>
      <span className="font-medium text-black ">{name}</span>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>
  );
};
export default ContactsHeader
