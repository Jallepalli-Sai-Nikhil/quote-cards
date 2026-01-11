import QuoteCard from "./components/QuoteCard";
import ParticlesBg from "./components/ParticlesBG";
import quotes from "./data/quotes";
import "./index.css";

function App() {
  // Group quotes by category
  const groupedQuotes = quotes.reduce((acc, quote) => {
    if (!acc[quote.category]) acc[quote.category] = [];
    acc[quote.category].push(quote);
    return acc;
  }, {});

  return (
    <div className="app">
      <ParticlesBg />

      <div className="content">
        <h1>✨ Quote Cards</h1>

        {Object.entries(groupedQuotes).map(([category, quotesInCategory]) => (
          <div key={category} className="category-section">
            <h2 className="category-heading">{category}</h2>
            <div className="grid">
              {quotesInCategory.map((q, i) => (
                <QuoteCard key={i} {...q} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
