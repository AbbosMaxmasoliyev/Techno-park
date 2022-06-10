import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Service from './components/service';
import Home from './pages/home';


class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename="/">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/blogs' exact component={Service} />				
					          </Switch>
                </div>
				<ScrollToTop />
				<ThemeButton />
      </BrowserRouter>	
		)
	}
	
}

export default Markup;