import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setStoredValue = (newValue) => {
    localStorage.setItem(keyName, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStoredValue];
};
