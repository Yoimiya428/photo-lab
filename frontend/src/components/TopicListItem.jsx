import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onTopicSelect }) => {
  

  const handleClick = () => {
    onTopicSelect(id);  
  };

  return (
    <div 
      className="topic-list__item"
      onClick={handleClick}                   
      style={{ cursor: 'pointer' }}           
    >
      {title}
    </div>
  );
};

export default TopicListItem;