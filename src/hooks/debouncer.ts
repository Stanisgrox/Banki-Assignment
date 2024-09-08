import { useState, useEffect } from 'react';

//Хук для отложенного обновления результатов поиска чтобы лимитировать запросы

export default function useDebounce(value: any, delay: number) {

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