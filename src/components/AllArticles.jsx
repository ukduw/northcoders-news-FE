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

    useEffect(() => {
        function fetchArticlesAndTopics() {
            if(topicQuery) {
                Promise.all([getAllArticles(topicQuery), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            } else {
                Promise.all([getAllArticles(), getTopics()])
                .then(([articles, topics]) => {
                    setAllArticles(articles)
                    setAllTopics(topics)
                    setLoading(false)
                })
            }
            
        }
        
        fetchArticlesAndTopics()
    }, [topicQuery])


    return (
        <section>
            {loading ? <p className="loading-message">Articles Loading...</p> : 
                <div>
                <TopicFilter topics={allTopics} setSearch={setSearchParams}/>
                <ArticleCard articles={allArticles} />
                </div>
            }
        </section>
    )
}


export default AllArticles