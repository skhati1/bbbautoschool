import React, { useState } from 'react';

import Pricing from '../../data/pricing.pdf'
import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'

import SplitSection from '../../components/SplitSection'

import { VIEW } from '../Constants';

import Private from './Private'
import DriversEd from './DriversEd'
import RoadTest from './RoadTest'

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ServicesMain() {
    const [showDialog, setShowDialog] = useState(false)
    const [view, setView] = useState(VIEW.NONE)

    const setChild = (flag, view) => {
        console.log('changing view to ', view)
        setShowDialog(flag)
        setView(view)
    }
    
    let component = null;
    switch (view) {
        case VIEW.DRIVERS_ED:
            component = <DriversEd setChild={setChild}/>;
            break;
        case VIEW.PRIVATE:
            component = <Private setChild={setChild}/>;
            break;
        case VIEW.ROAD_TEST:
            component = <RoadTest setChild={setChild} />
            break;
        default:
            component = <div>lolidk</div>;
    }

    return <div>
        <h2 className="text-center text-3xl lg:text-5xl font-semibold">Services</h2>
        <Dialog disableBackdropClick disableEscapeKeyDown open={showDialog} onClose={() => setShowDialog(false)}>
            {component}
        </Dialog>

        <SplitSection
            id="services"
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Driver's ED Program</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>30 Hours in Class Lessons</li>
                            <li>12 Hours in Car Instruction</li>
                            <li>6 Hours of Observation</li>
                            <li>2 Hours Parent Class</li>
                        </ul>
                        <div className="mt-8 md:mt-12">
                            <a href={Pricing} target="_blank">Pricing &nbsp;&nbsp;&nbsp;</a>
                            <button onClick={() => setChild(true, VIEW.DRIVERS_ED)} type="button" className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image1} alt="Private Lesson Sample Image" />}
        />
        <SplitSection
            reverseOrder
            primarySlot={
                <div className="lg:pl-32 xl:pl-48">
                    <h3 className="text-3xl font-semibold leading-tight">Private Lesson</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>1 Hour Driving Lesson</li>
                            <li>6 Hour Driving Lessons</li>
                            <li>12 Hours Driving Lessons</li>
                        </ul>
                        <div className="mt-8 md:mt-12">
                            <a href={Pricing} target="_blank">Pricing &nbsp;&nbsp;&nbsp;</a>
                            <button onClick={() => setChild(true, VIEW.PRIVATE)} type="button" className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image2} alt="Private Lesson Sample Image" />}
        />
        <SplitSection
            primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                    <h3 className="text-3xl font-semibold leading-tight">Road Test Sponsorship</h3>
                    <div className="mt-8 text-xl font-light leading-relaxed">
                        <ul>
                            <li>Group Road Test</li>
                            <li>Road Test at RMV</li>
                        </ul>
                        <p className="mt-8 md:mt-12">
                            <a href={Pricing} target="_blank">Pricing &nbsp;&nbsp;&nbsp;</a>
                            <button onClick={() => setChild(true, VIEW.ROAD_TEST)} type="button"
                                className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                                Register Now
                            </button>
                        </p>
                    </div>
                </div>
            }
            secondarySlot={<img src={Image3} alt="Private Lesson Sample Image" />}
        />
    </div>
}