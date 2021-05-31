import React from 'react'
import axios from 'axios';
import qs from 'query-string'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Question8 extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            time:0,
            questions:[],
            correctanswers:[],
            wronganswers8:[],
            score:0,
            previousscore2:undefined,
            previousscore1:undefined,
            previousscore3:undefined,
            previousscore4:undefined,
            previousscore5:undefined,
            previousscore6:undefined,
            previousscore7:undefined

        }
    }

    componentDidMount()
{
    const skr=qs.parse(this.props.location.search)
    this.setState({previousscore2:skr.previousscore2,previousscore1:skr.previousscore1,previousscore3:skr.previousscore3,previousscore4:skr.previousscore4,previousscore5:skr.previousscore5,previousscore6:skr.previousscore6,previousscore7:skr.score7})


    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({questions:res.data.results.map((item)=>{return item.question}),correctanswers:res.data.results.map((item)=>{return item.correct_answer}),wronganswers8:res.data.results[7].incorrect_answers.map((item)=>{return item})}))
    .catch(err=>console.log(err))


    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

}

componentDidUpdate()
{


    const {time,previousscore1,previousscore2,previousscore3,score,previousscore4,previousscore5,previousscore6,previousscore7}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question9/?previousscore1=${previousscore1}&&previousscore2=${previousscore2}&&previousscore3=${previousscore3}&&previousscore4=${previousscore4}&&previousscore5=${previousscore5}&&previousscore6=${previousscore6}&&previousscore7=${previousscore7}&&score8=${score}`)
    }
}

chandana=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[7])
    {
        this.setState({score:score+1})
    }

}


    render()
    {
        const {time,questions,correctanswers,wronganswers8}=this.state;
        return(
            <div>

            <div style={{float:'right',color:'white',marginRight:'40px',marginTop:'7px'}} className="time">{time}</div>
 
                <span style={{float:'right',marginRight:'5px',color:'white',marginTop:'3px',fontSize:'25px'}}>&#9200;</span>

 
            <Bounce top cascade><div className="mt-3 pl-3">8. {questions[7]}</div></Bounce>
            
            <input type="radio" name="chandana" className="mt-3 ml-3"  onChange={()=>this.chandana(wronganswers8[2])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers8[2]}</span></Zoom><br/>

            <input type="radio" name="chandana" className="mt-3 ml-3" onChange={()=>this.chandana(wronganswers8[1])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers8[1]}</span></Zoom><br/>

            <input type="radio" name="chandana" className="mt-3 ml-3" onChange={()=>this.chandana(correctanswers[7])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{correctanswers[7]}</span></Zoom><br/>

            <input type="radio" name="chandana" className="mt-3 ml-3" onChange={()=>this.chandana(wronganswers8[0])}/>&nbsp;&nbsp;<Zoom bottom cascade><span>{wronganswers8[0]}</span></Zoom><br/>
    

            </div>
        )
    }
}

export default Question8;
