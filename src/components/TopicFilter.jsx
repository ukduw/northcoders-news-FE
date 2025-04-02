import { useNavigate } from "react-router-dom"
import { useState } from "react"

function TopicFilter({topics, queries}) {
    const topicsArr = topics.topics
    const navigate = useNavigate()

    const [clickState, setClickState] = useState(false)

    function handleAscDesc() {
        console.log(clickState)
        setClickState(prevState => 
            prevState === false ? true : false
        )
    }


    const [topicQuery, sortByQuery] = queries

    function handleFilterChange(event) {
        const selectedTopic = event.target.value
        console.log(selectedTopic)
        if (selectedTopic && !sortByQuery) {
            if(clickState === true) {
                navigate(`/articles?topic=${selectedTopic}&order=asc`)
            } else {
                navigate(`/articles?topic=${selectedTopic}`)
            }
        }
        if (selectedTopic && sortByQuery) {
            if(clickState === true) {
                navigate(`/articles?topic=${selectedTopic}&sort_by=${sortByQuery}&order=asc`)
            } else {
                navigate(`/articles?topic=${selectedTopic}&sort_by=${sortByQuery}`)
            }
        } 
        if (!selectedTopic && !sortByQuery) {
            navigate('/')
        }
    }
    function handleSortByChange(event) {
        const selectedSortBy = event.target.value
        console.log(selectedSortBy)
        if (selectedSortBy && !topicQuery) {
            if(clickState === true) {
                navigate(`/articles?sort_by=${selectedSortBy}&order=asc`)
            } else {
                navigate(`/articles?sort_by=${selectedSortBy}`)
            }
        }
        if (selectedSortBy && topicQuery) {
            if(clickState === true) {
                navigate(`/articles?topic=${topicQuery}&sort_by=${selectedSortBy}&order=asc`)
            } else {
                navigate(`/articles?topic=${topicQuery}&sort_by=${selectedSortBy}`)
            }
        }
        if (!selectedSortBy && !topicQuery){
            navigate('/')
        }
    }



    return (
        <section className="filter-sort-options">
            <div className="topics-dropdown">
                <label htmlFor="topics">Filter by:</label>
                <select id="topics" onChange={handleFilterChange}>
                    <option value="">Topics</option>
                {topicsArr.map((topic) => {
                    return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
                </select>
            </div>
            <div className="sort-by-dropdown">
            <label htmlFor="sort-by"></label>
            <select id="sort-by" onChange={handleSortByChange}>
                <option value="">Sort By</option>
                <option value="created_at">date</option>
                <option value="comment_count">comment count</option>
                <option value="votes">votes</option>
            </select>
            <button onClick={handleAscDesc}>Order: {clickState === false ? "Descending" : "Ascending"}</button>
            </div>
        </section>
    )
}


export default TopicFilter