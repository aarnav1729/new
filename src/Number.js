import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Numbers = () => {
  const [state, setState] = useState({
    turnover: 1,
    workforce: 1,
    states: 1,
    cities: 1,
  });
  return (
    <>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className="numberbanner">
            <div className="container">
              <div className="web-container">
                <div className="count">
                  <div className="App">
                    <div className="countnum">
                      {isVisible ? (
                        <CountUp
                          start={state.workforce === 1 ? 1 : 2}
                          end={2}
                          duration={2}
                          onEnd={() => setState({ workforce: 2 })}
                        />
                      ) : (
                        <CountUp start={1} end={2} duration={0} />
                      )}{" "}
                      GW
                      <div className="labelcont">
                        ANNUAL MANUFACTURING CAPACITY OF SOLAR CELLS
                      </div>
                    </div>
                  </div>

                  <div className="App">
                    <div className="countnum">
                      3.36 GW
                      <div className="labelcont">
                        MANUFACTURING CAPACITY OF SOLAR MODULES
                      </div>
                    </div>
                  </div>

                  <div className="App">
                    <div className="countnum">
                      {isVisible ? (
                        <CountUp
                          start={state.workforce === 1 ? 1 : 1}
                          end={1}
                          duration={2}
                          onEnd={() => setState({ workforce: 1 })}
                        />
                      ) : (
                        <CountUp start={1} end={1} duration={0} />
                      )}{" "}
                      GW
                      <div className="labelcont">
                        MODULE LINE UNDER CONSTRUCTION
                      </div>
                    </div>
                  </div>
                  <div className="App">
                    <div className="countnum">
                      {isVisible ? (
                        <CountUp
                          start={state.workforce === 1 ? 1 : 1}
                          end={1}
                          duration={2}
                          onEnd={() => setState({ workforce: 1 })}
                        />
                      ) : (
                        <CountUp start={1} end={1} duration={0} />
                      )}{" "}
                      GW
                      <div className="labelcont">
                        TOPCON CELL LINE UNDER CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="numberDisclaimer">
              Disclaimer: As on 31st March 2024
            </span>
          </div>
        )}
      </VisibilitySensor>
    </>
  );
};