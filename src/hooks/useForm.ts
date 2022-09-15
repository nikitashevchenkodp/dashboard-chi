import { useState } from 'react';

export function useForm(initialData: {}) {
  const [form, setForm] = useState(initialData);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, changeHandler];
}
