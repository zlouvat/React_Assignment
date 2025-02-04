import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const Card = ({ children, onClose, title }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <button
            type="button"
            onClick={onClose}
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </h2>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default Card;
