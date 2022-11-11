import './App.css';
import Header from './Components/Header'
import ContenedorPrincipal from './Components/Contenedor_Principal';
import Footer from './Components/Footer';
import RelojHorasMinutos from './Components/Reloj_Horas_Minutos';
import RelojSegundos from './Components/Reloj_Segundos';
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
      <ContenedorPrincipal
        horas_minutos={<RelojHorasMinutos />}
        segundos={<RelojSegundos />}
        frase= {quote}
        autor={'- ' + author}
        click= {fetchNewQuote}
      />
      
      <Footer />
      
    </div>
  );

}

export default App;
