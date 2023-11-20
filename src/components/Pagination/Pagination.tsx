import style from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useChangeSearchMutation } from '../../store/apiSlice';
import { changePage } from '../../store/peopleSlice';

interface Props {
  countPeople: string;
}

function Pagination({ countPeople }: Props) {
  const valueSearch = useSelector((state: RootState) => state.people.valueSearch);
  const currentPage = useSelector((state: RootState) => state.people.page);
  const [changeSearch] = useChangeSearchMutation();
  const dispatch = useDispatch();

  const sumPages = Math.ceil(+countPeople / 10);
  const arrPage = [];

  for (let i = 1; i <= sumPages; i++) {
    arrPage.push(`${i}`);
  }

  const handleClick = (param: string) => {
    dispatch(changePage(param));
    changeSearch({ search: valueSearch, page: param });
  };

  return (
    <div className={style.container}>
      {arrPage.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handleClick(pageNum)}
          className={pageNum === currentPage ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
