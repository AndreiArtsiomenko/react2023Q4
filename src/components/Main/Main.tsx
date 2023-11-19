import style from './Main.module.css';
import { Link, Outlet } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';
import Pagination from '../Pagination/Pagination';
import { useGetPeopleQuery } from '../../store/apiSlice';
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Main() {
  const valueSearch = useSelector((state: RootState) => state.people.valueSearch);
  const page = useSelector((state: RootState) => state.people.page);
  const { data, isLoading } = useGetPeopleQuery({ search: valueSearch, page: page });

  let content;

  if (isLoading) {
    content = <Loading />;
  } else {
    const peopleArr: PeopleType[] = data.results;

    content = (
      <main className={style.main}>
        {peopleArr.length ? (
          <div className={style.container}>
            <div className={style.people}>
              {peopleArr.map((person) => {
                const id = person.url ? person.url.split('/')[5] : '';
                return (
                  <Link to={`people/${id.toString()}`} key={person.name}>
                    <CardPerson person={person} />
                  </Link>
                );
              })}
            </div>
            <Pagination countPeople={data.count} />
          </div>
        ) : (
          <h2>Not Found</h2>
        )}
        <div className={style.details}>
          <Outlet />
        </div>
      </main>
    );
  }

  return <>{content}</>;
}
