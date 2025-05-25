import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({ topics }) => {
  return (
    <ul className="top-nav-bar__topic-list">
    {topics.map((topic) => (
      <TopicListItem key={topic.id} title={topic.title} />
    ))}
    </ul>
  );
};

export default TopicList;
