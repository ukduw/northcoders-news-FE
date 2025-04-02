import { useNavigate } from "react-router-dom"

function TopicFilter({topics, setSearch}) {
    const topicsArr = topics.topics
    const navigate = useNavigate()

    function handleFilterChange(event) {
        const selectedTopic = event.target.value
        if (selectedTopic) {
            navigate(`/articles?topic=${selectedTopic}`)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="topics-dropdown">
            <label htmlFor="topics">Filter by:</label>
            <select id="topics" onChange={handleFilterChange}>
                <option value="">Topics</option>
            {topicsArr.map((topic) => {
                return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
            })}
            </select>
        </div>
    )
}


export default TopicFilter