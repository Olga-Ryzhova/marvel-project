import { useState, useCallback } from "react";

// хук, который будет работать с запросами
export const useHttp = () => {
  const [process, setProcess] = useState('waiting'); //ожидание

  // функция, которая делает запросы
  const request = useCallback(async (
    url,
    method = 'GET',
    body = null,
    headers = { 
      'Content-Type': 'application/json' 
    },
  ) => {
    
    // обозначаем процесс загрузки
    setProcess('loading')

    // обработка асинхронного запроса
    try {
    // создаем fetch-запрос
      const response = await fetch(url, {method, body, headers});
    // выбрасываем ошибку, если что-то пошло не так
      if (!response.ok) {
        throw new Error(`Could not featch ${url}, status: ${response.status}`);
      }
    // получаем данные в формате JSON:
      const data = await response.json();

    // возвращаем данные
      return data;
    } catch (e) {
    // процесс возникновения ошибки
    setProcess('error')
    // выкидывем ошибку
      throw e;
    }
  }, []);

  // очищаем ошибку
  const clearError = useCallback(() => {
    // обозначаем процесс загрузки
    setProcess('loading')
  }, []);

  return {request, clearError, process, setProcess};
};
