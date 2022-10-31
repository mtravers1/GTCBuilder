export const AuthWrapper = ({
  image = "/images/homepage.jpg",
  children,
  containerClassName,
}) => {
  return (
    <div className={`bg-[#000] mt-[70px] ${containerClassName}`}>
      <section className={`grid grid-cols-[1.15fr_1fr]`}>
        <div className="h-full">
          <img
            src={image}
            alt="image of page"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-[70px]">{children}</div>
      </section>
    </div>
  );
};
