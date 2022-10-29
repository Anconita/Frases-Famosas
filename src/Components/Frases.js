import { useEffect, useState } from "react";

const Frase = (props) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {

    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);

        }
      )
  }, [])


  return (
    <>
    <p></p>

      
    </>
  );
}

export default Frase;

