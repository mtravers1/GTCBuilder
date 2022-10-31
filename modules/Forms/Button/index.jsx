import styles from "./Index.module.css";
export const Button = ({ children, className, title = "Caption", ...rest }) => {
  return (
    <div className={`mt-[30px]`}>
      <button
        className={`px-[100px] py-5 bg-[#ff0000] text-white font-semibold rounded-lg ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};
