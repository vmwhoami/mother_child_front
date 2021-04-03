import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    gender: '',
    age: '',
    password: '',
  });
  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, values } = e.target;
    setValues({
      ...values,
      [name]: values,
    });
  };
  return [handleChange, values];
};

export default useForm;
