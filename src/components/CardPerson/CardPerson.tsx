import style from './CardPerson.module.css';
import { PeopleType } from '../../types/types';

export default function CardPerson({ person }: { person: PeopleType }) {
  return (
    <div className={style.person_cards}>
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
    </div>
  );
}
