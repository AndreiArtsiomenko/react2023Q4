import { Link } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import formDataType from '../../types/type';

function App() {
  const { formData } = useSelector((state: RootState) => state);
  return (
    <div className={style.container}>
      <div>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to={`first`} className={style.link}>
                One form
              </Link>
            </li>
            <li>
              <Link to={`second`} className={style.link}>
                Two form
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.containerData}>
        {formData.map((item: formDataType, index) => {
          return (
            <div key={index} className={style.userData}>
              <p className={style.userData__item}>
                <span>Name: </span> {item.name}
              </p>
              <p className={style.userData__item}>
                <span>Age: </span>
                {item.age}
              </p>
              <p className={style.userData__item}>
                <span>Email: </span>
                {item.email}
              </p>
              <p className={style.userData__item}>
                <span>Password: </span>
                {item.passwordFirst}
              </p>
              <p className={style.userData__item}>
                <span>Gender: </span>
                {item.gender}
              </p>
              <p className={style.userData__item}>
                <span>Country: </span>
                {item.country}
              </p>
              <p className={style.userData__item}>
                <span>Picture: </span>
                {item.picture}
              </p>
              <p className={style.userData__item}>
                <span>Accept: </span>
                {item.accept}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
