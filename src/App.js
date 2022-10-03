
import './App.css';


import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';



function App() {

  return (
    <div className="App">
      <Header />
      <div className="share-button">
        <span>
          <i className="fas fa-share-alt"></i>
        </span>

        <a href="https://twitter.com/intent/tweet?text=APPLE BITE&url=https://bit.ly/3rsDqEd/&via=gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-twitter" ></i></a>
        <a href="https://www.facebook.com/sharer.php?u=https://bit.ly/3rsDqEd&t=APPLE BITE" target="_blank" ><i className="fab fa-facebook" rel="noreferrer"></i></a>
        <a href="http://www.linkedin.com/shareArticle?url=https://bit.ly/3rsDqEd" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a title="Whatsapp" href="https://api.whatsapp.com/send?text=Son%20una%20gran%20%20empresa%20https://bit.ly/3rsDqEd " target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
      </div>

    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;
