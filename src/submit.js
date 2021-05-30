import React from 'react';
import qs from 'query-string';
  class Submit extends React.Component{
      constructor()
      {
          super();
          this.state=
          {
            firstquestionscore:[],
            score:[]
          
            
          }
      }
      componentDidMount()
      {
        alert('Click on score to know your score')

const skr=qs.parse(this.props.location.search);

this.setState({firstquestionscore:[skr.previousscore1,skr.previousscore2,skr.previousscore3,skr.previousscore4,skr.previousscore5,skr.previousscore6,skr.previousscore7,skr.previousscore8,skr.previousscore9,skr.score10]})
      }

      

      submit=()=>{
      
        
        const {firstquestionscore}=this.state;
      this.setState({score:firstquestionscore.map((item)=>{return Number(item)})}) 

      
        
      }

      


      render()
      {
       const {score}=this.state;
          return(
              <div className="text-center">
                {score.length!==0?<div style={{color:'dodgerblue'}} className="mt-3">Your score is &nbsp;{score[0]+score[1]+score[2]+score[3]+score[4]+score[5]+score[6]+score[7]+score[8]+score[9]}/10</div>:null}
                 <button onClick={this.submit} className="btn btn-success btn-sm mt-3">score</button>


              </div>
          )
      }
  }

  export default Submit;