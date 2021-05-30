import React from 'react';

import {Route,BrowserRouter} from 'react-router-dom';
import Quiz from './quiz';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
import Question6 from './question6';
import Question7 from './question7';
import Question8 from './question8';
import Question9 from './question9';
import Question10 from './question10';
import Submit from './submit';
import Thankyou from './thankyou';
import Header from './header'
class Router extends React.Component{
    render()
    {
        return(
           <BrowserRouter>
           
            <Route exact path="/" component={Header}/>
            <Route exact path="/question1" component={Quiz}/>
            <Route exact path="/question2" component={Question2}/>
            <Route exact path="/question3" component={Question3}/>
            <Route exact path="/question4" component={Question4}/>
            <Route exact path="/question5" component={Question5}/>
            <Route exact path="/question6" component={Question6}/>
            <Route exact path="/question7" component={Question7}/>
            <Route exact path="/question8" component={Question8}/>
            <Route exact path="/question9" component={Question9}/>
            <Route exact path="/question10" component={Question10}/>
            <Route exact path="/submit" component={Submit}/>
            <Route exact path="/thankyou" component={Thankyou}/>
           </BrowserRouter>
        )
    }
}

export default Router;