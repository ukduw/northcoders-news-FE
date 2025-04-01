import { Link } from "react-router-dom"

function ArticleCard({articles}) {
    const articleArr = articles.articles

    return (
        <div className="articles-grid">
            {articleArr.map((article) => {
                return <Link to={`/article/${article.article_id}`} key={article.article_id}>
                <div className="article-card">
                    <img src={article.article_img_url} alt={article.title} className="article-img"></img>
                    <div className="article-details">
                        <h2>{article.title}</h2>
                        <p>{article.topic}</p>
                        <p>{article.author}</p>
                        <p>{article.created_at}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Comments: {article.comment_count}</p>
                    </div>
                </div>
                </Link>
            })}
        </div>
    )
}


export default ArticleCard