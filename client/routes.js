import React from 'react';
import Main from './components/Main';
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
import SignupContainer from './components/Forms/signup/SignupContainer';

import {Route, IndexRoute} from 'react-router';

export const routes = (
    <Route path='/' component={Main}>
        <IndexRoute component={SignupContainer}/>
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

