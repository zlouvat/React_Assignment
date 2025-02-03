import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Card = ({ children, onClick }: Props) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{children}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
