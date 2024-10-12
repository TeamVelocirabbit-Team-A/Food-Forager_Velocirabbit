import NavBar from './components/common/navbar/navbar';
import Footer from './components/common/footer/footer';
import MainContainer from './components/common/mainContainer/mainContainer';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;