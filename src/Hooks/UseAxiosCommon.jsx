import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: 'https://xcellinace-tech-server-side.vercel.app'
})

const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon