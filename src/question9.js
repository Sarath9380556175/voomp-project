import React from 'react'
import axios from 'axios';
import qs from 'query-string'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Question9 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers9:[],
            score:0,
            previousscore2:undefined,
            previousscore1:undefined,
            previousscore3:undefined,
            previousscore4:undefined,
            previousscore5:undefined,
            previousscore6:undefined,
            previousscore7:undefined,
            previousscore8:undefined

        }
    }

    componentDidMount()
{
    const skr=qs.parse(this.props.location.search)
    this.setState({previousscore2:skr.previousscore2,previousscore1:skr.previousscore1,previousscore3:skr.previousscore3,previousscore4:skr.previousscore4,previousscore5:skr.previousscore5,previousscore6:skr.previousscore6,previousscore7:skr.previousscore7,previousscore8:skr.score8})


    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers9:res.data.results[8].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))


    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,previousscore1,previousscore2,previousscore3,score,previousscore4,previousscore5,previousscore6,previousscore7,previousscore8}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question10/?previousscore1=${previousscore1}&&previousscore2=${previousscore2}&&previousscore3=${previousscore3}&&previousscore4=${previousscore4}&&previousscore5=${previousscore5}&&previousscore6=${previousscore6}&&previousscore7=${previousscore7}&&previousscore8=${previousscore8}&&score9=${score}`)
    }
}

gopal=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[8])
    {
        this.setState({score:score+1})
    }

}


    render()
    {
        const {time,questions,correctanswers,wronganswers9}=this.state;
        return(
            <div>
                           <div style={{float:'right',marginRight:'40px',color:'white'}} className="time">{time}</div>

 
                           <Bounce top cascade><div className="mt-3 pl-3">9. {questions[8]}</div></Bounce>
            
            <input type="radio" name="gopal" className="mt-3 ml-3"  onChange={()=>this.gopal(wronganswers9[1])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers9[1]}</span></Zoom><br/>

            <input type="radio" name="gopal" className="mt-3 ml-3" onChange={()=>this.gopal(wronganswers9[0])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers9[0]}</span></Zoom><br/>
 
            <input type="radio" name="gopal" className="mt-3 ml-3" onChange={()=>this.gopal(correctanswers[8])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[8]}</span></Zoom><br/>

            <input type="radio" name="gopal" className="mt-3 ml-3" onChange={()=>this.gopal(wronganswers9[2])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers9[2]}</span></Zoom><br/>
  

            </div>
        )
    }
}

export default Question9;