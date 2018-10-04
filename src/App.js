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
      this.setState({status: "Incorrect!"});
      this.setState({score: 0});
    }
    else
    {
      this.setState({status: "Correct!"});
      this.state.clickedFighters.push(id);
      const newScore = this.state.score + 1;
      this.setState({score: newScore});
    }

    const randomizedFighters = this.state.fighters.sort((a,b) => 0.5 - Math.random());
    this.setState({fighters: randomizedFighters});
    // this.randomizeFighters();
  }

  // randomizeFighters = () =>
  // {
  //   const randomizedFighters = this.state.fighters.sort((a,b) => 0.5 - Math.random());
  //   this.setState({fighters: randomizedFighters});
  // }

  render() {
    return (
      <Fragment>
        <Jumbotron title={"Clicky Game"} status={this.state.status} score={this.state.score}/>
        <Container>
          {this.state.fighters.map(fighter =>
            <FighterImg
              key={fighter.id}
              id={fighter.id}
              image={fighter.image}
              // randomizeFighters={this.randomizeFighters}
              fighterClick={this.fighterClick}
              />
            )}
        </Container>
      </Fragment>
    );
  }
}

export default App;