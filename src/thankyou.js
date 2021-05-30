import React from 'react';
import qs from 'query-string';
class Thankyou extends React.Component{
    constructor()
    {
        super();
        this.state={
            score:[]

        }
    }

    componentDidMount()
    {
        const skr=qs.parse(this.props.location.search)
        this.setState({score:skr.score})
    }
    render()
    {
        const {score}=this.state;
        return(
            <div>
     <div><span>Your Score is</span>{score[0]+score[1]+score[2]+score[3]+score[4]+score[5]+score[6]+score[7]+score[8]+score[9]}/10</div>
            </div>
        )
    }
}

export default Thankyou;