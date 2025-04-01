import { getArticleById } from "../../api"
import ArticleByIdCard from "./ArticleByIdCard"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function ArticleById() {
    const [article, setArticle] = useState('')
    const [loading, setLoading] = useState(true)
    const {article_id} = useParams()
    
    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
            setLoading(false)
        })
    }, [article_id])

    return (
        <div>
            {loading ? <p className="loading-message">Article Loading...</p> : 
                <ArticleByIdCard article={article} />
            }
        </div>
    )
}

export default ArticleById