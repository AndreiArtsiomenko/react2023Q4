import React, { useRef } from 'react';

const FirstForm = () => {
  const inputName = useRef('');
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };
  return (
    <>
      <h2>FirstForm</h2>
      <p>The form created using uncontrolled components approach</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" id="name" ref={inputName} />
        <label htmlFor="age">Age :</label>
        <input type="number" name="age" id="age" />
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" />
        <fieldset>
          <label htmlFor="passwordFirst">Password :</label>
          <input type="password" name="passwordFirst" id="passwordFirst" />
          <label htmlFor="passwordSecond">Password Confirmation :</label>
          <input type="password" name="passwordSecond" id="passwordSecond" />
        </fieldset>
        <label htmlFor="gender">Password Confirmation :</label>
        <select name="gender" id="gender">
          <option selected disabled>
            Choose gender
          </option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
        <label htmlFor="accept">Accept :</label>
        <input type="checkbox" name="accept" id="accept" />

        <button type="submit">Submit</button>
      </form>
      <h1>{inputName.current.value}</h1>
    </>
  );
};

export default FirstForm;
