import React from 'react';
import Main from './components/Main';
import Hostpital from './components/Hospital';
import Services from './components/Services';
import Dispans from './components/Dispans';
import Organis from './components/Organis';
import Issues from './components/Issues';
import Addons from './components/Addons';

import {Route} from 'react-router';

export const routes = (
    <Route path='/' component={Main}>
        <Route path='/services' component={Services}/>
        <Route path='/dispans' component={Dispans}/>
        <Route path='/hospital' component={Hostpital}/>
        <Route path='/issues' component={Issues}/>
    </Route>
);

