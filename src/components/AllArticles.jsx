import { getAllArticles } from "../../api"
import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'

function AllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            getAllArticles().then((articles) => {
                setAllArticles(articles)
                setLoading(false)
            })
    }, [])


    return (
        <section>
            {loading ? <p className="loading-message">Articles Loading...</p> : 
                <ArticleCard articles={allArticles} />
            }
        </section>
    )
}


export default AllArticles