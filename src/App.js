import './App.css';
import Header from './Components/Header'
import Contenedor_Principal from './Components/Contenedor_Principal';
import Footer from './Components/Footer';
import Reloj_Horas_Minutos from './Components/Reloj_Horas_Minutos';
import Reloj_Segundos from './Components/Reloj_Segundos';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {   
  
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author)    
        }         
      )  
  }, [])


  let fetchNewQuote = () => {
    fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);
        setAuthor(quote.author)    
      }         
    ) 
  }
 
  return (
    <div className="App">
      <Header />
      <Contenedor_Principal
        horas_minutos={<Reloj_Horas_Minutos />}
        segundos={<Reloj_Segundos />}
        frase= {quote}
        autor={'- ' + author}
        click= {fetchNewQuote}
      />
      
      <Footer />
      
    </div>
  );

}

export default App;
