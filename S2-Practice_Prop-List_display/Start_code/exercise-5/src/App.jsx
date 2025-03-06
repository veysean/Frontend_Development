import {Data} from './data.js';
import Card from './components/Card.jsx';
function App() {
  return <>
    <header>
      <h1>Person List</h1>
      <p>People I know</p>
    </header>
    <main>
      <section className="person-category">
        <ul className="person">
          {Data.map((person) => (
            <Card key={person.id} person={person} />
          ))}
        </ul>
      </section>
    </main>
          
  </>;
}

export default App;
