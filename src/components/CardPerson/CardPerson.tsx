import React, { Component } from 'react';
import { PeopleType } from '../../types/types';
import style from './CardPerson.module.css';

export default class CardPerson extends Component<{ person: PeopleType }> {
  person = this.props.person;
  render() {
    return (
      <div className={style.person_cards}>
        <h2>{this.person.name}</h2>
        <p>Birth year: {this.person.birth_year}</p>
        <p>Gender: {this.person.gender}</p>
        <p>Mass: {this.person.mass}kg</p>
        <p>Height: {this.person.height}</p>
      </div>
    );
  }
}
