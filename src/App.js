import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div classname="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <div>
          <main>
            <Dictionary />
          </main>
          <footer>
            Coded by Christine Soropa and open-sourced on {""}
            <a
              href="https://github.com/Chrissy-coder/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://tubular-paprenjak-7c66ab.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
