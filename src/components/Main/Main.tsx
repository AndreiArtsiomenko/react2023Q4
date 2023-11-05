import style from './Main.module.css';
import { Link, Outlet, useNavigation, useOutletContext } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';
import Loading from '../Loading/Loading';

export default function Main() {
  const people = useOutletContext<PeopleType[]>();
  const navigation = useNavigation();
  return (
    <main className={style.main}>
      {people.length ? (
        <div className={style.people}>
          {people.map((person) => {
            const id = person.url.split('/')[5];
            return (
              <Link to={`people/${id.toString()}`} key={person.name}>
                <CardPerson person={person} />
              </Link>
            );
          })}
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
      <div className={style.details}>
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </div>
    </main>
  );
}
