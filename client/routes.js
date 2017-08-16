import React from 'react';
import Main from './components/Main/Main';
import Personal from './components/Personal';
import Hostpital from './components/Hospital';
import Services from './components/Services';
import Dispans from './components/Dispans';
import Organis from './components/Organis';
import Issues from './components/Issues';
import Addons from './components/Addons';
import News from './components/News';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Error from './components/Error';
import SigninContainer from './components/Forms/signin/SigninContainer';
import SignupContainer from './components/Forms/signup/SignupContainer';
import checkLogin from './common/checkLogin';

import {Route, IndexRoute, browserHistory} from 'react-router';

function changeRoute() {
    if (checkLogin) {
        browserHistory['replace']('/signin');
    }
}

export const routes = (
    <Route path='/' component={Main}>
        <IndexRoute onEnter={changeRoute} component={Personal}/>
        <Route path='/signup' component={SignupContainer}/>
        <Route path='/signin' component={SigninContainer}/>
        <Route path='/services' component={Services}/>
        <Route path='/dispans' component={Dispans}/>
        <Route path='/hospital' component={Hostpital}/>
        <Route path='/issues' component={Issues}/>
        <Route path='/organisations' component={Organis}/>
        <Route path='/addons' component={Addons}/>
        <Route path='/news' component={News}/>
        <Route path='/faq' component={FAQ}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='*' component={Error}/>
    </Route>
);

