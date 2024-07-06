import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const Numbers = () => {
    const [state, setState] = useState({turnover:1, workforce:1, states:1, cities:1});
  return (
    <>
                       <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
                    <div className='numberbanner'>
                      <div className='container'>
                        <div className='web-container'>
                        <div className="count">
                        <div className="App">
            <div className="countnum">
            {/* {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 1.4} end={1.4} duration={2} separator=" " decimals={1}  decimal="."  onEnd={()=> setState({ workforce:1.4 })} /> : <CountUp start={1} end={1.4} duration={0} />} GW                 */}
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 3} end={3} duration={2} onEnd={()=> setState({ workforce:3 })} /> : <CountUp start={1} end={3} duration={0} />} GW<em>*</em>     
             <div className='labelcont'>
             SOLAR MODULE MANUFACTURING LINE
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 2} end={2} duration={2} onEnd={()=> setState({ workforce:2 })} /> : <CountUp start={1} end={2} duration={0} />} GW               
             <div className='labelcont'>
             SOLAR CELL MANUFACTURING CAPACITY
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 3} end={3} duration={2} onEnd={()=> setState({ workforce:3 })} /> : <CountUp start={1} end={3} duration={0} />} GW                
             <div className='labelcont'>
             Solar modules sold worldwide
              </div>
            </div>     
            
      </div>
      {/* <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 2} end={2} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={3000} duration={0} />} GW
             <div className='labelcont'>
             SOLAR MODULE MANUFACTURING LINE UNDER CONSTRUCTION  
             </div>
            </div>
      </div> */}
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.states===1) ? 1 : 30} end={30} duration={2} onEnd={()=> setState({ states:30 })} /> : <CountUp start={1} end={30} duration={0}/>}+ 
             <div className='labelcont'>
             Countries of business footprint
             </div>
            </div>     
            
      </div>
      
      </div>    
      </div> 
        
      </div>
      
                        </div>
                        
            )}
        </VisibilitySensor>
        
    </>
  )
}
