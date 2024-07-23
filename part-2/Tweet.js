const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <p className="message">{ message }</p>
            <span className="tweet-origin">{ username }</span> 
            <span className="tweet-origin">{ name }</span>
            <span className="tweet-origin">{ date }</span>
        </div>
    );
};