import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './style.css';

class Movies extends React.Component {

    getMovie = (movieName,banner,likes,hero) => {
        return <Movie movieName={movieName} 
                      banner={banner}
                      likes={likes} 
                      hero={hero}/>
    };

 render() {
     return (
         <div class='moviesClass'>
             {
             this.getMovie('Maharshi',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nZauL8j8AoY1CeDqC_x6OxX60-xV_w_1Xw&usqp=CAU',
                  '123.0k',
                  'MaheshBabu'
             )}

            {
            this.getMovie('Avengers',
                 'https://lh3.googleusercontent.com/3FeBX0ZgQ9DeBu18JyaLmDe2VTRjQesfGsjP01zK3gTbPD_laBD7zOw1oMe_OnIVWylB_IYl5DyyEoWNpu_KA5IhKM4=w640-h400-e365-rj-sc0x00ffffff',
                  '1M',
                  ''
             )}

             {
                 this.getMovie('Jersey',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDtqmmsiNloWNmfASQDw_GtZAjAL2GJ6SPA&usqp=CAU',
                            '100K',
                            'Nani'

                 )}
         </div>
     );
 }
}

export default Movies;