import axios from 'axios'

const api = axios.create({baseURL: 'https://backend-nc-news-gozg.onrender.com/api'})

function getAllArticles() {
    return api.get('/articles').then(({data}) => {
        return data
    })
}

function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data
    })
}

function getCommentsByArticleId(article_id) {
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data
    })
}

function updateArticleVotes(article_id, vote) {
    return api.patch(`/articles/${article_id}`, {inc_votes: vote}).then(({data}) => {
        return data
    })
}


export { getAllArticles, getArticleById, getCommentsByArticleId, updateArticleVotes }