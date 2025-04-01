import { useState } from "react"
import { updateArticleVotes } from "../../api"

function ArticleByIdCard({article, comments}) {
    const {article_id, title, topic, author, created_at, article_img_url, body, votes, comment_count} = article.article
    const commentsArr = comments.comments

    const [optimisticArticleVote, setOptimisticArticleVote] = useState(0)

    function articleHandleUPClick() {
        updateArticleVotes(article_id, 1).catch(() => {
            setOptimisticArticleVote(optimisticArticleVote -1)
            alert("Error, please try voting again later")
        })
        setOptimisticArticleVote(optimisticArticleVote +1)
    }
    function articleHandleDOWNClick() {
        updateArticleVotes(article_id, -1).catch(() => {
            setOptimisticArticleVote(optimisticArticleVote +1)
            alert("Error, please try voting again later")
        })
        setOptimisticArticleVote(optimisticArticleVote -1)
    }


    return (
        <div className="articles-grid">
            <div key={article_id} className="article-card">
                    <div className="article-details">
                        <h2>{title}</h2>
                        <p>{topic}</p>
                        <p>{author}</p>
                        <p>{created_at}</p>
                        <img src={article_img_url} alt={title} className="article-img"></img>
                        <p>{body}</p>
                        <p>Votes: {votes + optimisticArticleVote}</p>
                        <button type="button" onClick={articleHandleUPClick}>upvote</button>
                        <button type="button" onClick={articleHandleDOWNClick}>downvote</button>
                        <p>Comments: {comment_count}</p>
                    </div>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        {commentsArr.map((comment) => {
                            return <div key={comment.comment_id}>
                                <p>{comment.author}</p>
                                <p>{comment.created_at}</p>
                                <p>{comment.body}</p>
                                <p>Votes: {comment.votes}</p>
                            </div>
                        })}
                    </div>
                </div>
        </div>
    )
}


export default ArticleByIdCard