import './App.css';
import React from 'react';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs";
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 6;
const serviceURL="http://metaphorpsum.com/paragraphs/1/9";
const defaultState={
  selectedParagraph: 'My name is rohan',
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo:[]
}

class App extends React.Component {
  state = defaultState;
  fetchNewParagraph=()=>{
    fetch(serviceURL).then(response=>response.text()).then(information=>{
      // console.log("API RESPONSE IS ",information);
       this.setState({selectedParagraph:information});
       const selectedParagraphArray=this.state.selectedParagraph.split("");
       //console.log(selectedParagraphArray);
       const testInfo=selectedParagraphArray.map(selectedletter =>{
         return{
          testLetter:selectedletter,
          status:'notAttempted'
         }
       })
       this.setState({
         ...defaultState,
         testInfo,
         selectedParagraph:information
        });
     })
   
  }
  fetchNewParagraphFallback = () => {
    const data =
        SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];
 //console.log(data);
    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
            testLetter: selectedLetter,
            status: "notAttempted",
        };
    });

    this.setState({
        ...defaultState,
        testInfo,
        selectedParagraph: data,
    });
    console.log(this.state.selectedParagraph);
};
  componentDidMount(){
    this.fetchNewParagraphFallback();
   // console.log(1);
  }
  
  startAgain=()=>{
   this.fetchNewParagraphFallback();
    console.log(1);
  }

  handleUserInput=(inputValue)=>{
    //console.log(inputValue);
    if(this.state.timerStarted === false)
      this.StartTimer();

    const characters = inputValue.length;
    const words=inputValue.split(" ").length;
    const index =characters -1;
    if(index < 0){
      //set the first letter as unattempted
      this.setState({
        testInfo : [
          {
              testLetter:this.state.testInfo[0].testLetter,
              status:'notAttempted'
          },
          ...this.state.testInfo.slice(1)
        ],
        characters,
        words
      })
      return;
    }
    if(index >=this.state.selectedParagraph.length)
    {
      this.setState({characters,words});
      return;
    }
    const testInfo=this.state.testInfo;
    if(!(index === this.state.selectedParagraph.length -1)){
      testInfo[index+1].status="notAttempted"
    }
    const isCorrect =inputValue[index] === testInfo[index].testLetter;
    testInfo[index].status=isCorrect?"correct":"incorect";
    this.setState({testInfo,words,characters});
  }
  StartTimer=()=>{
    this.setState({timerStarted:true});

    const timer=setInterval(()=>{
      if(this.state.timeRemaining){
     
        const timeSpent=TotalTime-this.state.timeRemaining;
        
        const wpm=timeSpent > 0 ? (this.state.words/timeSpent)*TotalTime : 0;
        //console.log(timeSpent,this.state.words);
        this.setState({
          timeRemaining:this.state.timeRemaining-1,
          wpm:parseInt(wpm)
        });
      }
      else
      clearInterval(timer)
    },1000)
  }
  
  
 
  render() {
   //console.log(111);
   //console.log(this.state.handleUserInput);
  // console.log(this.state.testInfo);
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
