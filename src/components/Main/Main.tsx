import style from './Main.module.css';
import { Link, Outlet } from 'react-router-dom';
import { PeopleType } from '../../types/types';
import CardPerson from '../CardPerson/CardPerson';
import Pagination from '../Pagination/Pagination';
import { useGetPeopleQuery } from '../../store/apiSlice';
import Loading from '../Loading/Loading';

interface Props {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Main({ currentPage, setCurrentPage }: Props) {
  const { data, isLoading } = useGetPeopleQuery({ search: '', page: '1' });

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
            <Pagination
              countPeople={data.count}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
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
