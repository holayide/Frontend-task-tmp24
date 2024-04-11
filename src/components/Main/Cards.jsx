import "./Card.css";

export default function Cards() {
  return (
    <div className="cards">
      <div className="blackcard">
        <Card title="Up for a challenge?">
          Animate the text fading in on both page load and while scrolling.
        </Card>
      </div>

      <div className="nudecard">
        <Card title="Too easy?">
          Create the blurred glass effect on the fixed navigation menu.
        </Card>
      </div>

      <div className="whitecard">
        <h2>Too hard?</h2>
        <p>That's ok!</p>
        <a href="#/">View other project</a>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
