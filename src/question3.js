import React from 'react'
import axios from 'axios';
import qs from 'query-string';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

class Question3 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            quizdetails:[],
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers3:[],
            score:0,
            previousscore2:undefined,
            previousscore1:undefined
        }
    }

    componentDidMount()
{

    const skr=qs.parse(this.props.location.search)
    this.setState({previousscore2:skr.onescore,previousscore1:skr.score})
    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers3:res.data.results[2].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))


    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,previousscore1,previousscore2,score}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question4/?previousscore1=${previousscore1}&&previousscore2=${previousscore2}&&score3=${score}`)
    }
}

tarun=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[2])
    {
        this.setState({score:score+1})
    }

}



    render()
    {
        const {time,questions,correctanswers,wronganswers3}=this.state;
        return(
            <div>
                  <div style={{float:'right',marginRight:'40px',color:'white'}} className="time">{time}</div>
 
                  <Bounce top cascade><div className="mt-3 pl-3">3. {questions[2]}</div></Bounce>
            
            <input type="radio" name="rmr" className="mt-3 ml-3" onChange={()=>this.tarun(wronganswers3[1])} />&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers3[1]}</span></Zoom><br/>

            <input type="radio" name="rmr" className="mt-3 ml-3" onChange={()=>this.tarun(wronganswers3[0])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers3[0]}</span></Zoom><br/>

            <input type="radio" name="rmr" className="mt-3 ml-3" onChange={()=>this.tarun(correctanswers[2])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[2]}</span></Zoom><br/>

            <input type="radio" name="rmr" className="mt-3 ml-3" onChange={()=>this.tarun(wronganswers3[2])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers3[2]}</span></Zoom><br/>


            </div>
        )
    }
}

export default Question3;