import axios from 'axios'

export const postData = (data) => {

  return async (dispatch) => {
    try {
      const response = await axios.post('https://658aa7e7ba789a96223780e2.mockapi.io/practic', data)
      if (response.status >= 200 || response.status <= 204) {
        alert('Запрос прошел успешно')
      }
      else if (response.status === 404) {
        alert('Ошибка запроса')
      }
      dispatch({ type: 'POST_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'POST_ERROR', payload: error.message })
    }
  }
}
