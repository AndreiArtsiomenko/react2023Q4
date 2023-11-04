import style from './CardPerson.module.css';
import { PeopleType } from '../../types/types';

export default function CardPerson({ person }: { person: PeopleType }) {
  return (
    <div className={style.person_cards}>
      <h2>{person.name}</h2>
      <p>Birth year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Mass: {person.mass}kg</p>
      <p>Height: {person.height}</p>
    </div>
  );
}
