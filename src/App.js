import React,{ Component, Fragment} from 'react';
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import fighters from "./fighters.json";
import FighterImg from "./components/FighterImg";

class App extends Component {

  state =
  {
    fighters: fighters,
    clickedFighters: [],
    score: 0,
    topScore: 0,
    status: "Click an image to start!"
  }

  fighterClick = (id) =>
  {
    if(this.state.clickedFighters.includes(id))
    {
      this.setState({status: "Incorrect!", score: 0, clickedFighters: []});
    }
    else
    {
      this.setState({status: "Correct!"});
      this.state.clickedFighters.push(id);
      const newScore = this.state.score + 1;
      this.setState({score: newScore});
      if(newScore > this.state.topScore)
      {
        this.setState({topScore: newScore});
      }
    }

    const randomizedFighters = this.state.fighters.sort((a,b) => 0.5 - Math.random());
    this.setState({fighters: randomizedFighters});
  }

  render() {
    return (
      <Fragment>
        <Jumbotron 
          title={"Clicky Game"} 
          description1={"The goal of the game is to click on each image once."}
          description2={"One point is awarded each time an image is clicked for the first time."}
          description3={"The images will randomize after each click."}
          description4={"The game ends when an image is clicked more than once."}
          status={this.state.status} 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          {this.state.fighters.map(fighter =>
            <FighterImg
              key={fighter.id}
              id={fighter.id}
              image={fighter.image}
              fighterClick={this.fighterClick}
              />
            )}
        </Container>
      </Fragment>
    );
  }
}

export default App;