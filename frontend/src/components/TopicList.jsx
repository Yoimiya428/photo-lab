import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({ topics = [], onTopicSelect }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          id={topic.id}                    
          title={topic.title}
          onTopicSelect={onTopicSelect}  
        />
      ))}
    </ul>
  );
};


export default TopicList;
