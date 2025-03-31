import axios from 'axios'

const api = axios.create({baseURL: 'https://backend-nc-news-gozg.onrender.com/api'})

function getAllArticles() {
    return api.get('/articles').then(({data}) => {
        return data
    })
}





export { getAllArticles }