import { Component, ErrorInfo, ReactNode } from 'react';
import ModalError from '../ModalError/ModalError';

type ErrorBoundaryProps = {
  children?: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
  info: ErrorInfo | null;
  showModal: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    info: null,
    showModal: false,
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ ...this.state, error: error, info: info });
  }

  handleClose = () => {
    this.setState({ ...this.state, showModal: false });
  };

  render() {
    if (this.state.info && this.state.error) {
      return (
        <div>
          <h2 style={{ color: '#FF0000' }}>Oops!</h2>
          <p>Reload the page</p>
          <button
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              color: '#810505',
            }}
            onClick={() => this.setState({ ...this.state, showModal: true })}
          >
            Details
          </button>
          {this.state.showModal && (
            <ModalError
              error={this.state.error}
              info={this.state.info}
              onClose={this.handleClose}
            ></ModalError>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
