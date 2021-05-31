import React from 'react';
import axios from 'axios';
import '../src/quiz.css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
class Quiz extends React.Component{
    constructor()
    {
        super();
        this.state=
        {
            quizdetails:[],
            time:0,
            questions:[],
            wronganswers1:[],
            correctanswers:[],
            wronganswers2:[],
            wronganswers3:[],
            wronganswers4:[],
            wronganswers5:[],
            wronganswers6:[],
            wronganswers7:[],
            wronganswers8:[],
            wronganswers9:[],
            wronganswers10:[],
            score:0
        }
    }

componentDidMount()
{
    
 
    axios({
        url:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
        method:'GET',
        headers:{'content-Type':'application/json'}
    })

    .then(res=>this.setState({quizdetails:res.data.results,questions:res.data.results.map((item)=>{return item.question}),wronganswers1:res.data.results[0].incorrect_answers.map((item)=>{return item}),correctanswers:res.data.results.map((item)=>{return item.correct_answer})}))

    .catch(err=>console.log(err))

 
    setInterval(()=>{
        const {time}=this.state;
        this.setState({time:time+1})
    },1000)

    

}
componentDidUpdate()
{


    const {time,score}=this.state;
    if(time===30)
    {
        this.props.history.push(`/question2/?score1=${score}`)
    }
   


}

skr=(answer)=>{
    const {score}=this.state;
    const {correctanswers}=this.state;
    console.log(answer)
    
    if(answer===correctanswers[0])
    {
        this.setState({score:score+1})
    }

}



    render()
    {
        const {time,questions,wronganswers1,correctanswers}=this.state;
        return(
            <div>
          <ol>
            <div style={{float:'right',color:'white',marginRight:'40px',marginTop:'7px'}} className="time">{time}</div>
 
                <span style={{float:'right',marginRight:'5px',color:'white',marginTop:'3px',fontSize:'25px'}}>&#9200;</span>
                   <Bounce top cascade><li className="mt-3">{questions[0]}</li></Bounce>
                   
                       <input type="radio" name="quiz" className="mt-3" onChange={()=>this.skr(wronganswers1[0])} required/>&nbsp;&nbsp; <Zoom bottom cascade><span>{wronganswers1[0]}</span></Zoom><br/>

                        <input type="radio" name="quiz" className="mt-3" onChange={()=>this.skr(wronganswers1[1])} />&nbsp;&nbsp; <Zoom bottom cascade><span>{wronganswers1[1]}</span></Zoom><br/>

                        <input type="radio" name="quiz" className="mt-3" onChange={()=>this.skr(correctanswers[0])} />&nbsp;&nbsp; <Zoom bottom cascade><span>{correctanswers[0]}</span></Zoom><br/>

                        <input type="radio" name="quiz" className="mt-3" onChange={()=>this.skr(wronganswers1[2])} />&nbsp;&nbsp; <Zoom bottom cascade><span>{wronganswers1[2]}</span></Zoom><br/>


                     
          </ol>

          
             
            

                      
   
            </div>
        )
    }
}

export  default Quiz;
