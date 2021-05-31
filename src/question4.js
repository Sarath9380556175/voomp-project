import React from 'react'
import axios from 'axios';
import qs from 'query-string'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Question4 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers4:[],
            score:0,
            previousscore2:undefined,
            previousscore1:undefined,
            previousscore3:undefined

        }
    }

    componentDidMount()
{
    const skr=qs.parse(this.props.location.search)
    this.setState({previousscore2:skr.previousscore2,previousscore1:skr.previousscore1,previousscore3:skr.score3})


    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers4:res.data.results[3].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))


    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,previousscore1,previousscore2,previousscore3,score}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question5/?previousscore1=${previousscore1}&&previousscore2=${previousscore2}&&previousscore3=${previousscore3}&&score4=${score}`)
    }
}

bujala=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[3])
    {
        this.setState({score:score+1})
    }

}


    render()
    {
        const {time,questions,correctanswers,wronganswers4}=this.state;
        return(
            <div>
               <div style={{float:'right',color:'white',marginRight:'40px',marginTop:'7px'}} className="time">{time}</div>
 
                <span style={{float:'right',marginRight:'5px',color:'white',marginTop:'3px',fontSize:'25px'}}>&#9200;</span>
 
                 <Bounce top cascade><div className="mt-3 pl-3">4. {questions[3]}</div></Bounce>
            
            <input type="radio" name="bujala" className="mt-3 ml-3" onChange={()=>this.bujala(wronganswers4[2])} />&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers4[2]}</span></Zoom><br/>

            <input type="radio" name="bujala" className="mt-3 ml-3" onChange={()=>this.bujala(wronganswers4[0])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers4[0]}</span></Zoom><br/>

            <input type="radio" name="bujala" className="mt-3 ml-3" onChange={()=>this.bujala(correctanswers[3])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[3]}</span></Zoom><br/>

            <input type="radio" name="bujala" className="mt-3 ml-3" onChange={()=>this.bujala(wronganswers4[1])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers4[1]}</span></Zoom><br/>


            </div>
        )
    }
}

export default Question4;
