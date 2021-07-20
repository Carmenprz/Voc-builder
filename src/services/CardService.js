import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export default {
  getAlbums() {
    return apiClient.get('/albums')
  },
  postCard(card) {
    return apiClient.post('/cards', card)
  },
}
