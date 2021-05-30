import './App.css';
import Weather from "./Weather";
import Quote from "./Quote";

export default function App() {
  return (
    <div className="App">
    <div className="container font-link">
      <Weather defaultCity="Solothurn"/>

<section className="Quote">
      <div className="Quote"><Quote /></div>
</section>

<footer>
    <p className="m-0">
      This is an <a href="https://github.com/cslylla" target="_blank" rel="noreferrer" title="Open Lilla`s GitHub profile">open-sourced</a> project coded by <a href="https://www.linkedin.com/in/lilla-csanaky-a850a617/" target="_blank" rel="noreferrer" title="Open Lilla`s LinkedIn profile" >cslylla</a> 
    </p>

</footer>
    </div>
    </div>
  );
}
