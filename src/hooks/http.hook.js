import { useState, useCallback } from "react";

// хук, который будет работать с запросами
export const useHttp = () => {
  const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

  // функция, которая делает запросы
  const request = useCallback(async (
    url,
    method = 'GET',
    body = null,
    headers = { 
      'Content-Type': 'application/json' 
    },
  ) => {
    
    // перед отправкой запроса показываем спиннер
    setLoading(true);

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

    // после успешной загрузки скрываем спиннер
    setLoading(false);

    // возвращаем данные
      return data;
    } catch (e) {
    // в любом случае скрываем спиннер
      setLoading(false);
    // в состояние error добавляем сообщение об ошибке
      setError(e.message);
    // выкидывем ошибку
      throw e;
    }
  }, []);

  // очищаем ошибку
  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError};
};
