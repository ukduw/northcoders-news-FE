import { getArticleById, getCommentsByArticleId } from "../../api"
import ArticleByIdCard from "./ArticleByIdCard"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import NotFound from "./NotFound"

function ArticleById() {
    const [article, setArticle] = useState('')
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const {article_id} = useParams()
    
    useEffect(() => {
        function fetchArticleComments() {
            Promise.all([getArticleById(article_id), getCommentsByArticleId(article_id)])
            .then(([article, comments]) => {
                setArticle(article)
                setComments(comments)
            })
            .catch((error) => {
                setIsError(true)
            })
            .finally(() => {
                setLoading(false)
            })
        }
        
        fetchArticleComments()
    }, [article_id])

    if(isError) {
        return <NotFound />
    } else return (
        <div>
            {loading ? <p className="loading-message">Article Loading...</p> : 
                <ArticleByIdCard article={article} comments={comments} />
            }
        </div>
    )
}

export default ArticleById