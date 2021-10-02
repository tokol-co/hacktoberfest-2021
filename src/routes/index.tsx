import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Base from '../pages/Base';
import Guilherme from '../pages/Guilherme';
import Schuansk from '../pages/Schuansk';
import Tabata from '../pages/Tabata';
import Vitoria from '../pages/Vitoria';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Base} />
    <Route path="/guilherme" exact component={Guilherme} />
    <Route path="/schuansk" exact component={Schuansk} />
    <Route path="/tabata" exact component={Tabata} />
    <Route path="/vitoria" exact component={Vitoria} />
  </Switch>
);

export default Routes;