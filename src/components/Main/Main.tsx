import React, { Component } from 'react';
import CardPerson from '../CardPerson/CardPerson';
import { PeopleType } from '../../types/types';
import style from './Main.module.css';

type MainProps = {
  people: PeopleType[];
};

export default class Main extends Component<MainProps> {
  render() {
    return (
      <main className={style.main}>
        {this.props.people.length ? (
          <div className={style.people}>
            {this.props.people.map((person) => (
              <CardPerson person={person} key={person.name} />
            ))}
          </div>
        ) : (
          <h2>Not Found</h2>
        )}
      </main>
    );
  }
}
