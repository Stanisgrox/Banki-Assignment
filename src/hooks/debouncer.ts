import { useState, useEffect } from 'react';

//Хук для отложенного обновления результатов поиска чтобы лимитировать запросы value - то что будет меняться, delay - с какой задержкой

export default function useDebounce<T>(value: T, delay: number) {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  },[value, delay]);

  return debouncedValue;
}