import { useState } from 'react';

const useInput = (initial: string | number): any => {
  const [value, setValue] = useState(initial);

  const onChange = (event: any) => {
    const data = event.target.value.trim();
    setValue(data);
  };

  return { value, onChange };
};

export default useInput;
