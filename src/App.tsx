import React, { Component } from 'react';
import { PeopleType } from './types/types';
import getData from './utils/api';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

type AppProps = object;

type AppState = {
  people: PeopleType[];
  value: string;
  loading: boolean;
};

export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    people: [],
    value: '',
    loading: true,
  };

  handleChange = (search: string) => {
    this.setState({ ...this.state, value: search });
  };

  handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.setItem('searchParam', this.state.value.trim());
    this.setState({ ...this.state, loading: true });
    getData(this.state.value).then((res) => {
      this.setState({ ...this.state, people: res, loading: false });
    });
  };

  componentDidMount(): void {
    const searchParam = localStorage.getItem('searchParam') || '';
    this.setState({ ...this.state, value: searchParam });
    getData(searchParam).then((res) => {
      this.setState({ ...this.state, people: res, loading: false });
    });
  }

  render() {
    return (
      <>
        <Header value={this.state.value} onChange={this.handleChange} onClick={this.handleSearch} />
        {this.state.loading ? (
          <h2 className={'loading'}>Loading...</h2>
        ) : (
          <Main people={this.state.people} />
        )}
      </>
    );
  }
}
