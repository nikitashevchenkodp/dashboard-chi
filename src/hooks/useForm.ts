import { useState } from 'react';

export function useForm<T>(initialData: T): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState(initialData);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, changeHandler];
}
