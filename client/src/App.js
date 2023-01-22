import './App.css';
import React,{ useState , useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('');
  const [moviewList, setMovieList] = useState([]);

  // useEffect(() => {
  //   Axios.get('http://localhost:3001/api/get').then((response) => {
  //     setMovieList(response.data)
  //   })
  // }, [])

  const submitReview = () => {
    
    Axios.post('http://localhost:3001/api/insert', {
      movieName:movieName,
      movieReview:review,
    }).then(function (response) {
      return alert('Ok ! insertado con exito !')
      console.log(response);
    })
    

   
  }


  const listFilms = () => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data)
    })
  }

  return (
    <div className="App">
     <h1>CRUD EXAMPLE</h1>
     <div className="container">
        <div className="row">
          <div className="col-6">
            <div className='form'>

              <label>Titulo:</label>
              <input type="text" name="titulo"  onChange ={(e) => {setMovieName(e.target.value)
              }}/>

              <label>Review:</label>
              <input type="textarea" name="review"  onChange ={(e) => {
                setReview(e.target.value)
              }}/>

              <button className="btn btn-success" onClick={submitReview}>Enviar</button>
              

              
            </div>
          </div>
          <div className="col-6">
            <button  className="btn btn-info" onClick={listFilms}>Listar peliculas</button>
            {moviewList.length >0 ? listFilms : ''}

              {moviewList.map((val,index) => {
                  return(
                    <h1>Listado de peliculas</h1>,
                    <h6 key={index}> Movie Name : {val.movieName} | Movie Review : {val.movieReview}</h6>
                  );
              })}
          </div>
        </div>
    </div>
   

     
    </div>
  );
}

export default App;
