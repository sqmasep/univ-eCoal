import { useState } from "react";

export type Toggle = (force?: boolean) => void;

const useToggle = (defaultValue: boolean) => {
  const [state, setState] = useState(defaultValue);
  const toggle: Toggle = force => setState(prev => force ?? !prev);

  return [state, toggle] as const;
};

export default useToggle;
