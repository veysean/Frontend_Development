
import Header from "./components/Header";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { HTML_RESULTS} from "./data";
import { ENGLISH_RESULTS } from "./data";
import Scores from "./components/Scores";

function App() {
  return (
    <>
      <Header batchName="CADT GENERATION 10"/>

      <main className="scores-container">
          <Scores courseName="JAVA" scores={JAVA_RESULTS} />
          <Scores courseName="PYTHON" scores={PYTHON_RESULTS} />
          <Scores courseName="HTML" scores={HTML_RESULTS} />
          <Scores courseName="ENGLISH" scores={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
