import Button from "../../compoenets/ui/button/Button";
import classes from "./actor.module.css";

function Actors() {
  const actors = [
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
    {
      name: "Vijay",
      gender: "male",
      DOB: "22-06-1976",
      Bio: "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor who works predominantly in Tamil cinema. Vijay has acted in over 65 films and is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest-grossing Tamil films of all time and is amongst the highest paid actors in India.",
      image: "https://static.toiimg.com/photo/101191296.cms",
    },
  ];
  return (
    <div>
      <div className={classes.newBtnContainer}>
        <Button value="Add Actor" variant="primary" />
      </div>
      <div className={classes.container}>
        {actors.map((actor, index) => {
          return (
            <div key={index} className={classes.actorContainer}>
              <div>
                <img
                  className={classes.img}
                  src={actor.image}
                  alt="actor-image"
                />
              </div>
              <div>
                <h2>
                  <span style={{ color: "#b68d08" }}>Name :</span> {actor.name}
                </h2>
                <h2>
                  <span style={{ color: "#b68d08" }}>Gender :</span>
                  {actor.gender}
                </h2>
                <h2>
                  <span style={{ color: "#b68d08" }}>DOB :</span>
                  {actor.DOB}
                </h2>
                <p>
                  <span style={{ color: "#b68d08", fontWeight: "bolder" }}>
                    Bio :{" "}
                  </span>
                  {actor.Bio}
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

export default Actors;
