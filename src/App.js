import {useState} from 'react' // hook -> useState
import Header from './components/Header'
import MainContainer from './components/MainContainer'


function App() {
  var [quote, setQuote] = useState({
    "text":"This is stupid!",
    "author":"Nabeel"
  })
  const quotes = [
    {
      "text":"The only thing granted equally to all is an unfair equality",
      "author":"From Jujutsu Kaisen"
    },
    {
      "text":"Nothing destroys spirit like poverty",
      "author":"Unknown"
    },
    {
      "text":"The decisions of our past are the architects of our present",
      "author":"Dan Brown"
    },
    {
      "text":"This is stupid!",
      "author":"Nabeel"
    }
  ]
  const getRandomQuote = () => {
    console.log("QUOTE HERE!!!!");
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  return (
    <div className="App">
      <Header/>
      <MainContainer quote={quote} onClick={getRandomQuote}/>
    </div>
  );
}

export default App;
