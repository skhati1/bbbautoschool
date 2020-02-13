import React, { useState } from 'react';
import DriversEd from './DriversEd';
import ServicesMain from './ServicesMain';
import RoadTest from './RoadTest';

import { VIEW } from '../Constants';

export default function ServicesContainer() {
    const [view, setView] = useState(VIEW.SERVICES_MAIN)
    
    let component = null;
    switch(view) {
      case VIEW.SERVICES_MAIN:
        component = <ServicesMain updateView={(viewName) => setView(viewName)} />;
        break;
      case VIEW.DRIVERS_ED:
        component = <DriversEd />;
        break;
      case VIEW.ROAD_TEST:
        component = <RoadTest />;
        break;
      case VIEW.PRIVATE:
        component = <Private />
        break;
      default:
        component = <DriversEd />;
    }
    return <div>
       {component}
    </div>
}