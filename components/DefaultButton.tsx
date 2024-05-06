import { ReactNode } from "react";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
  textAnimation?: boolean;
  children?: ReactNode;
}

export const DefaultButton = ({
  className,
  onClick,
  textAnimation,
  text,
  children,
}: Props) => (
  <div className={className} onClick={onClick}>
    {text ? <p className="font-bold text-black">{text}</p> : children}
  </div>
);
