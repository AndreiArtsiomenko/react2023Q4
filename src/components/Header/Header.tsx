import { Component } from 'react';
import style from './Header.module.css';

type HeaderProps = {
  value: string;
  onChange: (e: string) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default class Header extends Component<HeaderProps> {
  state = { error: false };
  getError = () => {
    this.setState({ error: true });
  };
  render() {
    if (this.state.error) {
      throw Error('Error!!!');
    }
    return (
      <header className={style.header}>
        <h1>The Star Wars</h1>
        <div>
          <input
            className={style.search}
            type="text"
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
          />
          <button type="submit" onClick={(e) => this.props.onClick(e)}>
            Search
          </button>
          <button style={{ marginLeft: '1rem' }} onClick={() => this.getError()}>
            Error
          </button>
        </div>
      </header>
    );
  }
}
