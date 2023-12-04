import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../utils/formSchema';
import formDataType from '../../types/type';
import { addFormData } from '../../store/slices/formDataSlice';
import { RootState } from '../../store/store';

const SecondForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countriesData } = useSelector((state: RootState) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: formDataType) => {
    navigate('/');
    dispatch(addFormData({ ...data }));
  };

  return (
    <div>
      <h2>SecondForm</h2>
      <p>The form created using React Hook Form</p>
      <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label htmlFor="name">Name :</label>
          <input type="text" {...register('name')} id="name" />
          {errors.name && <p className="error__massage">{errors.name?.message}</p>}
          <label htmlFor="age">Age :</label>
          <input type="number" {...register('age')} id="age" />
          {errors.age && <p className="error__massage">{errors.age?.message}</p>}
          <label htmlFor="email">Email :</label>
          <input type="email" {...register('email')} id="email" />
          {errors.email && <p className="error__massage">{errors.email?.message}</p>}
          <label htmlFor="passwordFirst">Password :</label>
          <input type="password" {...register('passwordFirst')} id="passwordFirst" />
          {errors.passwordFirst && (
            <p className="error__massage">{errors.passwordFirst?.message}</p>
          )}
          <label htmlFor="passwordSecond">Password Confirmation :</label>
          <input type="password" {...register('passwordSecond')} id="passwordSecond" />
          {errors.passwordSecond && (
            <p className="error__massage">{errors.passwordSecond?.message}</p>
          )}
          <div className="container__select">
            <label className="label__select" htmlFor="gender">
              Gender:
              <select {...register('gender')} id="gender" defaultValue="">
                <option disabled></option>
                <option value="man">Male</option>
                <option value="woman">Female</option>
              </select>
            </label>
            {errors.gender && <p className="error__massage">{errors.gender?.message}</p>}
            <label className="label__select" htmlFor="country">
              Country:
              <select {...register('country')} id="country" autoComplete="on">
                {countriesData.countries.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
            {errors.country && <p className="error__massage">{errors.country?.message}</p>}
          </div>
          <label htmlFor="picture">Upload picture:</label>
          <input type="file" {...register('picture')} id="picture" accept="image/png, image/jpeg" />
          {errors.picture && <p className="error__massage">{errors.picture?.message}</p>}
          <label className="label__checkbox" htmlFor="accept">
            <input type="checkbox" {...register('accept')} id="accept" /> Accept
          </label>
          {errors.accept && <p className="error__massage">{errors.accept?.message}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SecondForm;
