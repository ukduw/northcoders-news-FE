import { Link } from "react-router-dom"

function TopicFilter({topics}) {
    const topicsArr = topics.topics

    return (
        <div className="topics-dropdown">
            <label htmlFor="topics">Topics</label>
            <select name="topics" id="topics">
            {topicsArr.map((topic) => {
                return <Link to={`?topic=${topic.slug}`} key={topic.slug}> <option key={topic.slug} value={topic.slug}>{topic.slug}</option> </Link>
            })}
            </select>
        </div>
    )
}


export default TopicFilter