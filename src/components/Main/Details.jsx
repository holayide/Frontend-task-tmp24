import "./Details.css";

export default function Details() {
  return (
    <div className="detail_section">
      <div className="recreate">
        <h3>Recreate this to learn:</h3>
        <ul>
          <li>Minimal design.</li>
          <li>Scroll animations.</li>
          <li>Hover effects.</li>
          <li>and more!</li>
        </ul>
      </div>

      <div className="palette">
        <h3>Color Palette:</h3>
        <div className="colors">
          <div>
            <div className="white">
              <div></div>
              <p>#ffffff</p>
            </div>
            <div className="black">
              <div></div>
              <p>#000000</p>
            </div>
          </div>
          <div>
            <div className="silver">
              <div></div>
              <p>#7f7f7f</p>
            </div>
            <div className="gold">
              <div></div>
              <p>#e8e5e480</p>
            </div>
          </div>
        </div>
      </div>

      <div className="resource">
        <h3>Resources:</h3>
        <div className="text">
          <a href="#/">Fading with Intersection Observer</a>
          <a href="#/">WOW.js animations</a>
          <a href="#/">Google Fonts</a>
        </div>
      </div>
    </div>
  );
}
