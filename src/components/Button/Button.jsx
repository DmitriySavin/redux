import s from "./Button.module.css";

const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={selected ? `${s.btn} ${s.isSelected}` : `${s.btn}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};


export default Button;