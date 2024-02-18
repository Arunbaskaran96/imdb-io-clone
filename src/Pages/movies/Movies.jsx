import Button from "../../compoenets/ui/button/Button";
import classes from "./movie.module.css";

function Movies() {
  const movies = [
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
    {
      poster:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/01/full/1704098626-7063.png?im=FeatureCrop,size=(826,465)",
      name: "GOAT",
      year: "2018",
      plot: "The Greatest of All Time is an upcoming Indian Tamil-language science fiction action film directed by Venkat Prabhu and produced by AGS Entertainment. The film stars Vijay in dual roles, leading an ensemble cast that includes Prashanth, Prabhu Deva, Sneha, Laila, Meenakshi Chaudhary, Parvati Nair, Mohan, Jayaram, Ajmal Ameer, Yogi Babu, VTV Ganesh, Vaibhav, Premgi Amaren, Aravind Akash and Ajay Raj.",
      Producer: "Sun Pictures",
    },
  ];
  return (
    <div>
      <div className={classes.newBtnContainer}>
        <Button value="Add Movie" variant="primary" />
      </div>
      <div className={classes.movieContainer}>
        {movies &&
          movies.map((movie) => {
            return (
              <div className={classes.movie}>
                <div>
                  <img
                    className={classes.img}
                    src={movie.poster}
                    alt="movie-image"
                  />
                </div>
                <div>
                  <h2>
                    <span style={{ color: "#b68d08" }}>Name : </span>
                    {movie.name}
                  </h2>
                  <h2>
                    <span style={{ color: "#b68d08" }}>Producer : </span>
                    {movie.Producer}
                  </h2>
                  <h2>
                    <span style={{ color: "#b68d08" }}>Year : </span>
                    {movie.year}
                  </h2>
                  <p>
                    <span style={{ color: "#b68d08" }}>Year : </span>
                    {movie.plot}
                  </p>
                  <div className={classes.btnContainer}>
                    <Button height="30px" value="View" variant="primary" />
                    <Button height="30px" value="Edit" variant="secondary" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
