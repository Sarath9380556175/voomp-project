import React from 'react';
import '../src/quiz.css';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce'
class Header extends React.Component{

    skr=()=>{
        this.props.history.push('/question1')
    }

    componentDidMount()
    {
        alert('click on the button to start the test')
    }
    render()
    {
        return(
            <div className="text-center">
    <Bounce left cascade><div className="quiz  pl-3 pt-1" style={{color:'darkorange',fontSize:'20px'}}>Voomp Technologies </div></Bounce>

   <Zoom top className><button className=" btn btn-danger btn-sm" onClick={this.skr} style={{marginTop:'200px'}}>start the test</button></Zoom>
            </div>
        )
    }
}
export default Header;