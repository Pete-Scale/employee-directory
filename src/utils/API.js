import axios from 'axios'

export default {
  randomEmployee: function() {
    return axios.get('https://randomuser.me/api/?results=20')
  }
}