import { useState, useContext } from "react"
import { updateArticleVotes, postCommentbyArticleId, deleteCommentById } from "../../api"
import {UserContext} from "../contexts/User"

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


    const [commentPost, setCommentPost] = useState("")
    const [optimisticCommentPost, setOptimisticCommentPost] = useState("")
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)

    function handleInputChange(event) {
        setCommentPost(event.target.value)
        console.log(commentPost)
    }

    function handleSubmit(event) {
        postCommentbyArticleId(article_id, loggedInUser, commentPost).catch(() => {
            setOptimisticCommentPost("")
            alert("Error, try posting a comment again later")
        })
        setOptimisticCommentPost(commentPost)
        setCommentPost("")
    }


    const [deleteClickedId, setDeleteClickedId] = useState([])

    function handleDelete(comment_id) {
        deleteCommentById(comment_id)
        setDeleteClickedId((previousIds) => [...previousIds, comment_id])
    }


    return (
        <div className="articles-grid">
            {/* ARTICLE */}
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
                        {/* COMMENT FORM */}
                        <form action={handleSubmit}>
                            <label htmlFor="comment-box"></label>
                            <input type="textarea" id="comment-box" name="comment-box" placeholder="Add a comment..."
                                value={commentPost}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Comment</button>
                        </form>
                        {/* OPTIMISTIC COMMENT */}
                        {optimisticCommentPost.length !== 0 ? 
                            <div className="optimistic-comment">
                                <p>{loggedInUser}</p>
                                <p>{optimisticCommentPost}</p>
                                <p>Votes: 0</p>
                            </div> : 
                            <></>
                        }
                        {/* ALL COMMENTS */}
                        {commentsArr.map((comment) => {
                            return <div key={comment.comment_id} className={deleteClickedId.includes(comment.comment_id) ? "deleted-comment" : ""}>
                                <div className="comment-details">
                                    <p>{comment.author}</p>
                                    <p>{comment.created_at}</p>
                                    <p>{comment.body}</p>
                                    <p>Votes: {comment.votes}</p>
                                </div>
                                {comment.author === loggedInUser ? <button id="delete-button" onClick={() => handleDelete(comment.comment_id)}>Delete</button> : <></>}
                            </div>
                        })}
                    </div>
                </div>
        </div>
    )
}


export default ArticleByIdCard