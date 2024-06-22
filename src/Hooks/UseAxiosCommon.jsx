import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: 'https://b9a12-server-side-jaynab94.vercel.app'
})

const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon