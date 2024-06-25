const CustomComment = ({ author, avatar, content, datetime })=> {
    return (
      <div className="custom-comment">
        <div className="avatar">{avatar}</div>
        <div className="content">
          <div className="author">{author}</div>
          {content}
          <div className="datetime">{datetime}</div>
        </div>
      </div>
    );
  }
  export default CustomComment;