import React from 'react';
import MainContainer from './components/Main/MainContainer';
import Personal from './components/Personal';
import Hostpital from './components/Hospital';
import Services from './components/Services';
import Dispans from './components/Dispans';
import Organis from './components/Organis';
import Issues from './components/Issues';
import Addons from './components/Addons';
import NewsContainer from './components/News/NewsContainer';
import NewsIndexContainer from './components/News/NewsIndexContainer';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Error from './components/Error';
import SigninContainer from './components/Forms/signin/SigninContainer';
import SignupContainer from './components/Forms/signup/SignupContainer';
import checkLogin from './common/checkLogin';

import {Route, IndexRoute, browserHistory} from 'react-router';

function changeRoute() {
    if (typeof checkLogin('token') == 'undefined') {
        browserHistory['replace']('/signin');
    }
}

function preventEnter() {
    if (typeof checkLogin('token') != 'undefined') {
        browserHistory['replace']('/');
    }
}

export const routes = (
    <Route path='/' component={MainContainer}>
        <IndexRoute onEnter={changeRoute} component={Personal}/>
        <Route onEnter={preventEnter} path='/signup' component={SignupContainer}/>
        <Route onEnter={preventEnter} path='/signin' component={SigninContainer}/>
        <Route onEnter={changeRoute} path='/services' component={Services}/>
        <Route onEnter={changeRoute} path='/dispans' component={Dispans}/>
        <Route onEnter={changeRoute} path='/hospital' component={Hostpital}/>
        <Route onEnter={changeRoute} path='/issues' component={Issues}/>
        <Route onEnter={changeRoute} path='/organisations' component={Organis}/>
        <Route onEnter={changeRoute} path='/addons' component={Addons}/>
        <Route onEnter={changeRoute} path='/news' component={NewsContainer}/>
        <Route onEnter={changeRoute} path='/news/:url' component={NewsIndexContainer}/>
        <Route onEnter={changeRoute} path='/faq' component={FAQ}/>
        <Route onEnter={changeRoute} path='/contacts' component={Contacts}/>
        <Route onEnter={changeRoute} path='*' component={Error}/>
    </Route>
);

