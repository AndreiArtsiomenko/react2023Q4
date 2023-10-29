import React, { Component } from 'react';
import { PeopleType } from './types/types';
import getData from './utils/api';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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

  getDataState = (searchData: string) => {
    getData(searchData).then((res) => {
      this.setState({ ...this.state, people: res, loading: false });
    });
  };

  handleChange = (search: string) => {
    this.setState({ ...this.state, value: search });
  };

  handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.setItem('searchParam', this.state.value.trim());
    this.setState({ ...this.state, loading: true });
    this.getDataState(this.state.value);
  };

  componentDidMount(): void {
    const searchParam = localStorage.getItem('searchParam') || '';
    this.setState({ ...this.state, value: searchParam });
    this.getDataState(searchParam);
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header
            value={this.state.value}
            onChange={this.handleChange}
            onClick={this.handleSearch}
          />
        </ErrorBoundary>
        {this.state.loading ? (
          <h2 className={'loading'}>Loading...</h2>
        ) : (
          <ErrorBoundary>
            <Main people={this.state.people} />
          </ErrorBoundary>
        )}
      </>
    );
  }
}
