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
      <div className="numbers">
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
                            start={state.turnover === 1 ? 1 : 115}
                            end={115}
                            duration={3}
                            onEnd={() => setState({ turnover: 115 })}
                          />
                        ) : (
                          <CountUp start={1} end={115} duration={0} />
                        )}
                        <div className="labelcont">
                          LAKH SQ. FT. OF
                          <br />
                          PROJECT DEVLOPMENT
                        </div>
                      </div>
                    </div>
                    <div className="App">
                      <div className="countnum">
                        {isVisible ? (
                          <CountUp
                            start={state.workforce === 1 ? 1 : 88}
                            end={88}
                            duration={2}
                            onEnd={() => setState({ workforce: 88 })}
                          />
                        ) : (
                          <CountUp start={1} end={88} duration={0} />
                        )}
                        <div className="labelcont">
                          LAKH SQ. FT. <br />
                          DELIVERED
                        </div>
                      </div>
                    </div>
                    <div className="App">
                      <div className="countnum">
                        {isVisible ? (
                          <CountUp
                            start={state.states === 1 ? 1 : 8}
                            end={8}
                            duration={1}
                            onEnd={() => setState({ states: 8 })}
                          />
                        ) : (
                          <CountUp start={1} end={8} duration={0} />
                        )}
                        <div className="labelcont">
                          DECADES OF TRUST
                          <br />
                          BUILDING
                        </div>
                      </div>
                    </div>
                    <div className="App">
                      <div className="countnum">
                        {isVisible ? (
                          <CountUp
                            start={state.cities === 1 ? 1 : 3000}
                            end={3000}
                            duration={3}
                            onEnd={() => setState({ cities: 3000 })}
                          />
                        ) : (
                          <CountUp start={1} end={3000} duration={0} />
                        )}{" "}
                        +
                        <div className="labelcont">
                          HAPPY CUSTOMER
                          <br />
                          BASE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </>
  );
};