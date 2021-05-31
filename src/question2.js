import React from 'react'
import axios from 'axios';
import qs from 'query-string';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Question2 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            quizdetails:[],
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers2:[],
            score:0,
            previousscore:undefined
        }
    }

    componentDidMount()
{
   const skr=qs.parse(this.props.location.search)
   this.setState({previousscore:skr.score1})
    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers2:res.data.results[1].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))

    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,score,previousscore}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question3/?score=${score}&&onescore=${previousscore}`)
    }
   
}

rmr=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[1])
    {
        this.setState({score:score+1})
    }

}
    render()
    {
        const {time,questions,correctanswers,wronganswers2}=this.state;
        return(
            <div>
               <div style={{float:'right',color:'white',marginRight:'40px',marginTop:'7px'}} className="time">{time}</div>
 
                <span style={{float:'right',marginRight:'5px',color:'white',marginTop:'3px',fontSize:'25px'}}>&#9200;</span>
 
                <Bounce top cascade><div className="mt-3 pl-3">2. {questions[1]}</div></Bounce>
            
            <input type="radio" name="skr" className="mt-3 ml-3" onChange={()=>this.rmr(wronganswers2[0])} />&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers2[0]}</span></Zoom><br/>
 
            <input type="radio" name="skr" className="mt-3 ml-3" onChange={()=>this.rmr(wronganswers2[1])} />&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers2[1]}</span></Zoom><br/>

            <input type="radio" name="skr" className="mt-3 ml-3" onChange={()=>this.rmr(correctanswers[1])}  />&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[1]}</span></Zoom><br/>

            <input type="radio" name="skr" className="mt-3 ml-3" onChange={()=>this.rmr(wronganswers2[2])}  />&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers2[2]}</span></Zoom><br/>

            </div>
        )
    }
}

export default Question2;
