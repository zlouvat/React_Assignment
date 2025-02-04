import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  link: string;
  title: string;
}

const Card = ({ children, onClose, link, title }: Props) => {
  return (
    <div className="card" onClick={onClose}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href="#" className="btn btn-primary">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
