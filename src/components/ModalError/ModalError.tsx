import { Component, ErrorInfo } from 'react';
import style from './ModalError.module.css';

type ModalProps = {
  error: Error;
  info: ErrorInfo;
  onClose: () => void;
};

export default class ModalError extends Component<ModalProps> {
  render() {
    return (
      <div className={style.modal}>
        <div className={style.modal__content}>
          <h3>{this.props.error && this.props.error.toString()}</h3>
          <p className={style.modal__info}>{this.props.info.componentStack}</p>
          <button
            style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
            onClick={() => this.props.onClose()}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
