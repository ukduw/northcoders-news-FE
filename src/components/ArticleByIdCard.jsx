

function ArticleByIdCard({article}) {
    const {article_id, title, topic, author, created_at, article_img_url, body, votes, comment_count} = article.article

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
                </div>
        </div>
    )
}


export default ArticleByIdCard