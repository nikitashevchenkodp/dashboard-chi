import { useEffect, useState } from 'react';

export function useForm<T>(
  initialData: T
): [
  T,
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
] {
  const initial = Object.values(initialData as any).join('');

  const [form, setForm] = useState(initialData);
  useEffect(() => {
    setForm(initialData);
  }, [initial]);

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const name = e.target.name;
    let value = e.target.value;
    const type = e.target.type;
    console.log(e);

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
