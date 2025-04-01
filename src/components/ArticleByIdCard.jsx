

function ArticleByIdCard({article, comments}) {
    const {article_id, title, topic, author, created_at, article_img_url, body, votes, comment_count} = article.article
    const commentsArr = comments.comments

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
                        <p>Votes: {votes}</p>
                        <p>Comments: {comment_count}</p>
                    </div>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        {commentsArr.map((comment) => {
                            return <div key={comment.article_id}>
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