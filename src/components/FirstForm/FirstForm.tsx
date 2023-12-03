import React, { useRef } from 'react';

const FirstForm = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPasswordFirst = useRef<HTMLInputElement>(null);
  const inputPasswordSecond = useRef<HTMLInputElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const selectGender = useRef<HTMLSelectElement>(null);
  const selectCountry = useRef<HTMLSelectElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>FirstForm</h2>
      <p>The form created using uncontrolled components approach</p>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" ref={inputName} />
          <label htmlFor="age">Age :</label>
          <input type="number" name="age" id="age" ref={inputAge} />
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" ref={inputEmail} />
          <label htmlFor="passwordFirst">Password :</label>
          <input type="password" name="passwordFirst" id="passwordFirst" ref={inputPasswordFirst} />
          <label htmlFor="passwordSecond">Password Confirmation :</label>
          <input
            type="password"
            name="passwordSecond"
            id="passwordSecond"
            ref={inputPasswordSecond}
          />
          <div className="container__select">
            <label className="label__select" htmlFor="gender">
              Gender:
              <select name="gender" id="gender" ref={selectGender} defaultValue="">
                <option disabled></option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </label>
            <label className="label__select" htmlFor="country">
              Country:
              <select name="country" id="country" ref={selectCountry} defaultValue="">
                <option disabled></option>
                <option value="BLR">BLR</option>
                <option value="RUS">RUS</option>
              </select>
            </label>
          </div>
          <label htmlFor="picture">Upload picture:</label>
          <input type="file" name="picture" id="picture" ref={inputFile} />
          <label className="label__checkbox" htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" ref={inputCheckbox} /> Accept
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FirstForm;
