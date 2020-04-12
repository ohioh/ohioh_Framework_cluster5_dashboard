import { useState } from 'react';

export default function useToggleComponent(isShow = false) {
  const [showComponent, setToggleComponent] = useState(isShow);

  const handleToggle = () => {
    setToggleComponent(!showComponent);
  };

  return [showComponent, handleToggle];
}
