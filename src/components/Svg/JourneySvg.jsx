import * as React from "react";
import image1 from "../../images/journey (1).png";
import image2 from "../../images/journey (2).png";
import image3 from "../../images/journey (3).png";
import image4 from "../../images/journey (4).png";
import image5 from "../../images/journey (5).png";
import image6 from "../../images/journey (6).png";
import gsap from "gsap";

const JourneySvg = () => {
  const polylineRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const polyline = polylineRef.current;
            const length = polyline.getTotalLength();
            gsap.set(polyline, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
            gsap.to(polyline, {
              strokeDashoffset: 0,
              duration: 9,
              ease: "power1.inOut",
            });
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the animation triggers
    );

    const sectionElement = sectionRef.current;
    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);
  return (
    <>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1081.1 513.5"
        className="journey_svg"
        style={{
          enableBackground: "new 0 0 1081.1 513.5",
        }}
        ref={sectionRef}
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M1071.1,103.2l-0.2,333.5h0.2l0,76.8H897.3l0-77h0.1c0-84.1-0.1-243-0.1-327.1c3.5,0,6.4-2.9,6.4-6.4 C959.5,103,1015.3,103.1,1071.1,103.2L1071.1,103.2z"
        />
        <path
          className="st1"
          d="M1071.1,103.2l-0.2,333.5h0.2l0,76.8H897.3l0-77h0.1c0-84.1-0.1-243-0.1-327.1c3.5,0,6.4-2.9,6.4-6.4 C959.5,103,1015.3,103.1,1071.1,103.2L1071.1,103.2z"
        />
        <path
          className="st0"
          d="M856.5,247.4l-0.2,222.1h0.2l0,43.9H694.7l0-44.1h0.1c0-78.1-0.1-137.6-0.1-215.7c3.5,0,6.4-2.9,6.4-6.4 C752.9,247.3,804.7,247.4,856.5,247.4L856.5,247.4z"
        />
        <path
          className="st1"
          d="M856.5,247.4l-0.2,222.1h0.2l0,43.9H694.7l0-44.1h0.1c0-78.1-0.1-137.6-0.1-215.7c3.5,0,6.4-2.9,6.4-6.4 C752.9,247.3,804.7,247.4,856.5,247.4L856.5,247.4z"
        />
        <path
          className="st0"
          d="M653.9,279.4l-0.1,222.9h0.1l0,11.2H504.2l0-11.3h0.1c0-72.1-0.1-144.3-0.1-216.4c3.5,0,6.4-2.9,6.4-6.4 C558.4,279.3,606.1,279.4,653.9,279.4L653.9,279.4z"
        />
        <path
          className="st1"
          d="M653.9,279.4l-0.1,222.9h0.1l0,11.2H504.2l0-11.3h0.1c0-72.1-0.1-144.3-0.1-216.4c3.5,0,6.4-2.9,6.4-6.4 C558.4,279.3,606.1,279.4,653.9,279.4L653.9,279.4z"
        />
        <path
          className="st0"
          d="M463.4,330.2l-0.1,183.2H325.7c0-59,0-118,0-177c3.5,0,6.4-2.9,6.4-6.4C375.9,330.1,419.6,330.2,463.4,330.2z"
        />
        <path
          className="st1"
          d="M463.4,330.2l-0.1,183.2H325.7c0-59,0-118,0-177c3.5,0,6.4-2.9,6.4-6.4C375.9,330.1,419.6,330.2,463.4,330.2z"
        />
        <path
          className="st0"
          d="M284.9,381l-0.1,132.5H159.3c0-42.1,0-84.1,0-126.2c3.5,0,6.4-2.9,6.4-6.4C205.4,380.9,245.1,380.9,284.9,381z"
        />
        <path
          className="st1"
          d="M284.9,381l-0.1,132.5H159.3c0-42.1,0-84.1,0-126.2c3.5,0,6.4-2.9,6.4-6.4C205.4,380.9,245.1,380.9,284.9,381z"
        />
        <path
          className="st0"
          d="M118.4,431.7l-0.1,81.7H4.9c0-25.1,0-50.3,0-75.4c3.5,0,6.4-2.9,6.4-6.4C47,431.6,82.7,431.7,118.4,431.7z"
        />
        <path
          className="st1"
          d="M118.4,431.7l-0.1,81.7H4.9c0-25.1,0-50.3,0-75.4c3.5,0,6.4-2.9,6.4-6.4C47,431.6,82.7,431.7,118.4,431.7z"
        />
        <text
          transform="matrix(1 0 0 1 161.4298 294.9492)"
          className="st2 st3 st4"
        >
          {"2017"}
        </text>
        <text transform="matrix(1 0 0 1 7.0602 338)" className="st2 st3 st4">
          {"2011"}
        </text>
        <text
          transform="matrix(1 0 0 1 327.8653 230.7793)"
          className="st2 st3 st4"
        >
          {"2021"}
        </text>
        <text
          transform="matrix(1 0 0 1 506.3481 192.9805)"
          className="st2 st3 st4"
        >
          {"2022"}
        </text>
        <text
          transform="matrix(1 0 0 1 696.8781 81.5566)"
          className="st2 st3 st4"
        >
          {"2023"}
        </text>
        <text
          transform="matrix(1 0 0 1 899.4553 43.9766)"
          className="st2 st3 st4"
        >
          {"2024"}
        </text>
        <line className="st5" x1={707.9} y1={138} x2={728.3} y2={138} />
        <path
          className="st6"
          d="M3.8,427.3v-69.7h2.1v69.7c2,0.5,3.4,2.2,3.4,4.3c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5 C0.4,429.5,1.9,427.8,3.8,427.3z M4.9,351.9c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2C2.7,352.9,3.7,351.9,4.9,351.9 z"
        />
        <path
          className="st6"
          d="M158.2,376.5v-69.7h2.1v69.7c2,0.5,3.4,2.2,3.4,4.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5 C154.8,378.8,156.3,377,158.2,376.5L158.2,376.5z M159.3,301.2c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2 C157.1,302.2,158.1,301.2,159.3,301.2z"
        />
        <path
          className="st6"
          d="M324.6,325.8v-83.1h2.1v83.1c2,0.5,3.4,2.2,3.4,4.3c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5 C321.2,328,322.7,326.2,324.6,325.8z M325.7,237c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2 C323.5,238,324.5,237,325.7,237z"
        />
        <path
          className="st6"
          d="M503.1,275v-70.1h2.1V275c2,0.5,3.4,2.2,3.4,4.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5 C499.7,277.2,501.2,275.4,503.1,275L503.1,275z M504.2,199.2c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2 C502,200.2,503,199.2,504.2,199.2z"
        />
        <path
          className="st6"
          d="M693.7,243V93.4h2.1V243c2,0.5,3.4,2.1,3.4,4.3s-2,4.5-4.5,4.5c-2.5,0-4.5-2.2-4.5-4.5 C690.2,245,691.7,243.4,693.7,243L693.7,243z M694.7,87.8c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2s-2.2-1-2.2-2.2 C692.5,88.8,693.5,87.8,694.7,87.8z"
        />
        <path
          className="st6"
          d="M896.2,98.7V55.8h2.1v42.9c2,0.5,3.4,2.2,3.4,4.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5 C892.8,100.9,894.3,99.2,896.2,98.7L896.2,98.7z M897.3,50.2c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2s-2.2-1-2.2-2.2 S896.1,50.2,897.3,50.2z"
        />
        <circle className="st6" cx={4.9} cy={306.4} r={4.9} />
        <circle className="st6" cx={159.3} cy={256.1} r={4.9} />
        <circle className="st6" cx={325.7} cy={191.9} r={4.9} />
        <circle className="st6" cx={504.2} cy={153.9} r={4.9} />
        <circle className="st6" cx={694.7} cy={42} r={4.9} />
        <circle className="st6" cx={897.3} cy={4.9} r={4.9} />
        <line className="st5" x1={707.9} y1={191.6} x2={728.3} y2={191.6} />
        <polyline
          className="st5"
          ref={polylineRef}
          points="4.9,306.4 159.3,256.1 325.7,191.9 504.2,153.9 694.7,42 897.3,4.9 "
        />
        <rect x={18.2} y={358.4} className="st1" width={114.8} height={74.9} />
        <text transform="matrix(1 0 0 1 16.5 366.1863)">
          <tspan x={0} y={-5} className="st3 st7">
            {"ESTABLISHED A SOLAR"}
          </tspan>
          <tspan x={0} y={8.7} className="st3 st7">
            {"CELL LINE WITH AN"}
          </tspan>
          <tspan x={0} y={21.4} className="st3 st7">
            {"ANNUAL CAPACITY OF 75  "}
          </tspan>
          <tspan x={0} y={35} className="st3 st7">
            {"MW AND A SOLAR MODULE  "}
          </tspan>
          <tspan x={0} y={47} className="st3 st7">
            {" LINE WITH AN ANNUAL "}
          </tspan>
          <tspan x={0} y={60} className="st3 st7">
            {" CAPACITY OF 100 MW."}
          </tspan>
        </text>
        <rect x={172.6} y={307.1} className="st1" width={114.8} height={74.9} />
        <text transform="matrix(1 0 0 1 172.5994 314.9096)">
          <tspan x={0} y={0} className="st3 st7">
            {"EXPANDED THE "}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"INSTALLED CAPACITY "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"OF THE AUTOMATED "}
          </tspan>
          <tspan x={0} y={39.6} className="st3 st7">
            {"SOLAR MODULE LINE "}
          </tspan>
          <tspan x={0} y={52.8} className="st3 st7">
            {" BY 370 MW"}
          </tspan>
        </text>
        <rect x={339} y={243.2} className="st1" width={136.7} height={74.9} />
        <text transform="matrix(1 0 0 1 339.0247 253)">
          <tspan x={0} y={0} className="st3 st7">
            {"ESTABLISHED A FULLY "}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"INTEGRATED 500 MW "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"CAPACITY SOLAR CELL LINE"}
          </tspan>

          <tspan x={0} y={39.6} className="st3 st7">
            {"AND 750 MW CAPACITY"}
          </tspan>
          <tspan x={0} y={52.8} className="st3 st7">
            {"SOLAR MODULE LINE. "}
          </tspan>
          {/* <tspan x={0} y={66} className="st3 st7">
            {"MODULE LINE AT UNIT 2 "}
          </tspan> */}
        </text>
        <rect x={517.5} y={205.7} className="st1" width={136.7} height={74.9} />
        <text transform="matrix(1 0 0 1 517.5001 213.4807)">
          <tspan x={0} y={0} className="st3 st7">
            {"EXPANDED THE INSTALLED "}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"CAPACITY OF THE SOLAR "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"CELL AND MODULE LINES"}
          </tspan>
          <tspan x={0} y={39.6} className="st3 st7">
            {"BY 250 MW AND 150 "}
          </tspan>
          <tspan x={0} y={52.8} className="st3 st7">
            {"MW, RESPECTIVELY"}
          </tspan>
        </text>
        <rect x={707.9} y={94} className="st1" width={157.6} height={39.9} />
        <text transform="matrix(1 0 0 1 707.9193 101.8491)">
          <tspan x={0} y={0} className="st3 st7">
            {"ESTABLISHED A SOLAR CELL"}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"LINE WITH AN ANNUAL "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"CAPACITY OF 1,250 MW"}
          </tspan>
        </text>
        <rect x={707.9} y={147.1} className="st1" width={157.6} height={42.2} />
        <text transform="matrix(1 0 0 1 707.9198 154.8688)">
          <tspan x={0} y={0} className="st3 st7">
            {"ESTABLISHED A SOLAR MODULE "}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"LINE IN UNIT IV WITH AN "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"ANNUAL CAPACITY OF 1,600 MW  "}
          </tspan>
        </text>
        <rect x={707.9} y={200.1} className="st1" width={181} height={41} />
        <text transform="matrix(1 0 0 1 707.9198 207.8913)">
          <tspan x={0} y={0} className="st3 st7">
            {"EXPANDED THE INSTALLED"}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"CAPACITY OF THE SOLAR MODULE"}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"LINE BY 500 MW "}
          </tspan>
        </text>
        <rect x={910.6} y={55.8} className="st1" width={162.7} height={74.9} />
        <text transform="matrix(1 0 0 1 910.6013 63.6323)">
          <tspan x={0} y={0} className="st3 st7">
            {"EXPANDED THE INSTALLED "}
          </tspan>
          <tspan x={0} y={13.2} className="st3 st7">
            {"CAPACITY OF THE SOLAR MODULE "}
          </tspan>
          <tspan x={0} y={26.4} className="st3 st7">
            {"LINE AT UNIT V BY 100 MW"}
          </tspan>
        </text>
        <image
          style={{
            overflow: "visible",
          }}
          width={788}
          height={568}
          xlinkHref={image1}
          transform="matrix(0.144 0 0 0.144 4.9176 431.6232)"
        />
        <image
          style={{
            overflow: "visible",
          }}
          width={872}
          height={921}
          xlinkHref={image2}
          transform="matrix(0.144 0 0 0.144 159.2562 380.8509)"
        />
        <image
          style={{
            overflow: "visible",
          }}
          width={956}
          height={1273}
          xlinkHref={image3}
          transform="matrix(0.144 0 0 0.144 325.6916 330.099)"
        />
        <image
          style={{
            overflow: "visible",
          }}
          width={1040}
          height={1626}
          xlinkHref={image4}
          transform="matrix(0.144 0 0 0.144 504.1745 279.3102)"
        />
        <image
          style={{
            overflow: "visible",
          }}
          width={1123}
          height={1848}
          xlinkHref={image5}
          transform="matrix(0.144 0 0 0.144 694.7044 247.2896)"
        />
        <image
          style={{
            overflow: "visible",
          }}
          width={1207}
          height={2850}
          xlinkHref={image6}
          transform="matrix(0.144 0 0 0.144 897.2821 103.0412)"
        />
      </svg>
    </>
  );
};

export default JourneySvg;
