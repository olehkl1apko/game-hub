import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
  color = "primary",
  type = "button",
  disabled = false,
}: Props) => {
  return (
    <button
      className={`btn btn-${color}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
