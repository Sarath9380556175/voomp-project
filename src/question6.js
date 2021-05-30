import React from 'react'
import axios from 'axios';
import qs from 'query-string'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Question6 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers6:[],
            score:0,
            previousscore2:undefined,
            previousscore1:undefined,
            previousscore3:undefined,
            previousscore4:undefined,
            previousscore5:undefined

        }
    }

    componentDidMount()
{
    const skr=qs.parse(this.props.location.search)
    this.setState({previousscore2:skr.previousscore2,previousscore1:skr.previousscore1,previousscore3:skr.previousscore3,previousscore4:skr.previousscore4,previousscore5:skr.score5})


    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers6:res.data.results[5].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))


    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,previousscore1,previousscore2,previousscore3,score,previousscore4,previousscore5}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question7/?previousscore1=${previousscore1}&&previousscore2=${previousscore2}&&previousscore3=${previousscore3}&&previousscore4=${previousscore4}&&previousscore5=${previousscore5}&&score6=${score}`)
    }
}

sarath=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[5])
    {
        this.setState({score:score+1})
    }

}


    render()
    {
        const {time,questions,correctanswers,wronganswers6}=this.state;
        return(
            <div>
            
            <div style={{float:'right',marginRight:'40px',color:'white'}} className="time">{time}</div>

 
            <Bounce top cascade><div className="mt-3 pl-3">6. {questions[5]}</div></Bounce>
            
            <input type="radio" name="sarath" className="mt-3 ml-3"  onChange={()=>this.sarath(wronganswers6[1])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers6[1]}</span></Zoom><br/>

            <input type="radio" name="sarath" className="mt-3  ml-3" onChange={()=>this.sarath(wronganswers6[2])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers6[2]}</span></Zoom><br/>

            <input type="radio" name="sarath" className="mt-3 ml-3" onChange={()=>this.sarath(correctanswers[5])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[5]}</span></Zoom><br/>

            <input type="radio" name="sarath" className="mt-3 ml-3" onChange={()=>this.sarath(wronganswers6[0])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers6[0]}</span></Zoom><br/>


            </div>
        )
    }
}

export default Question6;