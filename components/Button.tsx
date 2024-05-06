import { ReactNode } from "react";

interface Props {
  text: string;
  onClick: () => void;
  children?: ReactNode;
}

const Button = ({ onClick, text, children }: Props) => (
  <div
    className="w-64 border border-neo-pink px-6 py-4 rounded-md bg-gradient-full-nibi-v1 cursor-pointer hover:scale-105"
    onClick={onClick}
  >
    {text ? (
      <p className="font-bold text-white truncate text-center">{text}</p>
    ) : (
      children
    )}
  </div>
);

export default Button;
