import { getAllArticles, getTopics } from "../../api"
import {useState, useEffect} from 'react'

import ArticleCard from './ArticleCard'
import TopicFilter from './TopicFilter'

function AllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function fetchArticlesAndTopics() {
            Promise.all([getAllArticles(), getTopics()])
            .then(([articles, topics]) => {
                setAllArticles(articles)
                setAllTopics(topics)
                setLoading(false)
            })
        }
        
        fetchArticlesAndTopics()
    }, [])


    return (
        <section>
            {loading ? <p className="loading-message">Articles Loading...</p> : 
                <div>
                <TopicFilter topics={allTopics} />
                <ArticleCard articles={allArticles} />
                </div>
            }
        </section>
    )
}


export default AllArticles