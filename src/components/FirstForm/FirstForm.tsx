import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addFormData } from '../../store/slices/formDataSlice';
import schema from '../../utils/formSchema';
import formDataType from '../../types/type';
import { RootState } from '../../store/store';

const FirstForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countriesData } = useSelector((state: RootState) => state);

  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPasswordFirst = useRef<HTMLInputElement>(null);
  const inputPasswordSecond = useRef<HTMLInputElement>(null);
  const selectGender = useRef<HTMLSelectElement>(null);
  const selectCountry = useRef<HTMLSelectElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: formDataType = {
      name: inputName.current!.value,
      age: +inputAge.current!.value,
      email: inputEmail.current!.value,
      passwordFirst: inputPasswordFirst.current!.value,
      passwordSecond: inputPasswordSecond.current!.value,
      gender: selectGender.current!.value,
      country: selectCountry.current!.value,
      picture: inputFile.current!.value,
      accept: inputCheckbox.current!.checked,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(addFormData({ ...formData }));
      setErrors([]);
      navigate('/');
    } catch (error) {
      setErrors((error as ValidationError).inner);
    }
  };

  return (
    <div>
      <h2>FirstForm</h2>
      <p>The form created using uncontrolled components approach</p>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" ref={inputName} />
          <p className="error__massage">{errors.find((event) => event.path === 'name')?.message}</p>
          <label htmlFor="age">Age :</label>
          <input type="number" name="age" id="age" ref={inputAge} />
          <p className="error__massage">{errors.find((event) => event.path === 'age')?.message}</p>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" ref={inputEmail} />
          <p className="error__massage">
            {errors.find((event) => event.path === 'email')?.message}
          </p>
          <label htmlFor="passwordFirst">Password :</label>
          <input type="password" name="passwordFirst" id="passwordFirst" ref={inputPasswordFirst} />
          <p className="error__massage">
            {errors.find((event) => event.path === 'passwordFirst')?.message}
          </p>
          <label htmlFor="passwordSecond">Password Confirmation :</label>
          <input
            type="password"
            name="passwordSecond"
            id="passwordSecond"
            ref={inputPasswordSecond}
          />
          <p className="error__massage">
            {errors.find((event) => event.path === 'passwordSecond')?.message}
          </p>
          <div className="container__select">
            <label className="label__select" htmlFor="gender">
              Gender:
              <select name="gender" id="gender" ref={selectGender} defaultValue="">
                <option disabled></option>
                <option value="man">Male</option>
                <option value="woman">Female</option>
              </select>
            </label>
            <p className="error__massage">
              {errors.find((event) => event.path === 'gender')?.message}
            </p>
            <label className="label__select" htmlFor="country">
              Country:
              <select name="country" id="country" ref={selectCountry} autoComplete="on">
                {countriesData.countries.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
            <p className="error__massage">
              {errors.find((event) => event.path === 'country')?.message}
            </p>
          </div>
          <label htmlFor="picture">Upload picture:</label>
          <input
            type="file"
            name="picture"
            id="picture"
            ref={inputFile}
            accept="image/png, image/jpeg"
          />
          <p className="error__massage">
            {errors.find((event) => event.path === 'picture')?.message}
          </p>
          <label className="label__checkbox" htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" ref={inputCheckbox} /> Accept
          </label>
          <p className="error__massage">
            {errors.find((event) => event.path === 'accept')?.message}
          </p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FirstForm;
