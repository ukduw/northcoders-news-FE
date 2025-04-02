import { getAllArticles, getTopics } from "../../api"
import {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"

import ArticleCard from './ArticleCard'
import TopicFilter from './TopicFilter'

function AllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [loading, setLoading] = useState(true)

    const [searchParams, setSearchParams] = useSearchParams()
    const topicQuery = searchParams.get("topic")
    const sortByQuery = searchParams.get("sort_by")

    useEffect(() => {
        function fetchArticlesAndTopics() {
            if(topicQuery && !sortByQuery) {
                Promise.all([getAllArticles(topicQuery), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            }
            if(!topicQuery && sortByQuery) {
                Promise.all([getAllArticles(undefined, sortByQuery), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            }
            if(topicQuery && sortByQuery) {
                Promise.all([getAllArticles(topicQuery, sortByQuery), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            }
            if(!topicQuery && !sortByQuery) {
                Promise.all([getAllArticles(), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            }
            
        }
        
        fetchArticlesAndTopics()
    }, [topicQuery, sortByQuery])


    return (
        <section>
            {loading ? <p className="loading-message">Articles Loading...</p> : 
                <div>
                <TopicFilter topics={allTopics} queries={[topicQuery, sortByQuery]}/>
                <ArticleCard articles={allArticles} />
                </div>
            }
        </section>
    )
}


export default AllArticles