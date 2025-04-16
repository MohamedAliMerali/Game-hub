import "normalize.css";
import "./App.css";
import PageContainer from "./UI/PageContainer";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Main from "./component/Main";

function App() {
  return (
    <PageContainer>
      <Nav />
      <div className="flex flex-row mt-16">
        <Aside />
        <Main />
      </div>
    </PageContainer>
  );
}

export default App;
