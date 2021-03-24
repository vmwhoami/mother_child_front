import React, { useState } from 'react';

const Registration = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('gender');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullname':
        return setFullName(value);
      case 'email':
        return setEmail(value);
      case 'gender':
        return setGender(value);
      case 'age':
        return setAge(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const final = {
      fullname,
      email,
      gender,
      age,
      password,
    };
    console.log(final);
  };
  const genders = ['masculine', 'feminine'];
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fullname">
          Full Name
          <input name="fullname" type="text" value={fullname} onChange={(e) => handleChange(e)} placeholder="Full Name" />
        </label>

        <label htmlFor="email">
          Email
          <input name="email" type="text" value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
        </label>

        <label htmlFor="gender">
          Gender
          <select name="gender" className={gender} onClick={(e) => handleChange(e)}>
            {genders.map((gen) => (
              <option key={gen} value={gen}>{gen}</option>
            ))}
          </select>
        </label>

        <label htmlFor="age">
          Age
          <input name="age" type="number" value={age} onChange={(e) => handleChange(e)} placeholder="Age in years" />
        </label>

        <label htmlFor="password">
          Passoword
          <input name="password" type="password" value={password} onChange={(e) => handleChange(e)} placeholder="Password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
