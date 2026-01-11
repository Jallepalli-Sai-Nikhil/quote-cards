import QuoteCard from "./components/QuoteCard";
import ParticlesBg from "./components/ParticlesBG";
import quotes from "./data/quotes";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ParticlesBg />

      <div className="content">
        <h1>✨ Quote Cards</h1>

        <div className="grid">
          {quotes.map((q, i) => (
            <QuoteCard key={i} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
