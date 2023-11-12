import { ErrorInfo } from 'react';
import style from './ModalError.module.css';

interface ModalProps {
  error: Error;
  info: ErrorInfo;
  onClose: () => void;
}

export default function ModalError({ error, info, onClose }: ModalProps) {
  return (
    <div className={style.modal}>
      <div className={style.modal__content}>
        <h3>{error && error.toString()}</h3>
        <p className={style.modal__info}>{info.componentStack}</p>
        <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }} onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
}
