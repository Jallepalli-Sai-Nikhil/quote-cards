const QuoteCard = ({ text, author, color }) => {
  return (
    <div className="quote-card" style={{ borderLeft: `5px solid ${color}` }}>
      <p className="quote-text">“{text}”</p>
      <span className="quote-author" style={{ color }}>
        — {author}
      </span>
    </div>
  );
};

export default QuoteCard;
