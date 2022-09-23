import { useEffect, useState } from 'react';

export function useForm<T>(
  initialData: T
): [T, (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void] {
  const [form, setForm] = useState(initialData);
  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const name = e.target.name;
    let value = e.target.value;
    const type = e.target.type;

    if (type === 'number') {
      value = parseInt(value) as any;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, changeHandler];
}
