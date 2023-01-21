import { Dispatch, SetStateAction, useCallback, useState } from 'react';

function useToggle(
  defaultState: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = useState(defaultState);

  const onChange = useCallback(() => setState((flag) => !flag), []);

  return [state, onChange, setState];
}

export default useToggle;
