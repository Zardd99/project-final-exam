const TextContent = ({ title }) => {
  return (
    <div>
      <div className="p-4"></div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-0.5 tracking-tighter">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TextContent;
