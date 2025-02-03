import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  title: string;
}

const Card = ({ children, onClick, title }: Props) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default Card;
