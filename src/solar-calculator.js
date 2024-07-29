import React, { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import solcalImage from "./images/solcal.jpg";
import Chart from "chart.js";

const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

const SolarCalculator = () => {
  const [formData, setFormData] = useState({
    sanctionedLoad: 9,
    unitsConsumed: 1136,
    highestTariff: 10.07,
    solarNotInUse: 0,
    daytimeConsumption: 20,
    roofArea: 900,
    shading: "No",
    systemSize: 9,
  });
  const [estimatedSavings, setEstimatedSavings] = useState(null);
  const [annualProduction, setAnnualProduction] = useState(null);
  const [paybackPeriod, setPaybackPeriod] = useState(null);
  const sizingChartRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateAnnualGeneration = () => {
    const { sanctionedLoad, daytimeConsumption, roofArea } = formData;
    // Use the formulas from the Excel file here
    const annualGeneration = sanctionedLoad * daytimeConsumption * roofArea; // Simplified example
    return annualGeneration;
  };

  const calculateSavings = () => {
    const {
      sanctionedLoad,
      highestTariff,
      daytimeConsumption,
      roofArea,
      systemSize,
    } = formData;
    const dailyUnitsPerKW = 4; // Use 4 as an average value for simplicity
    const dailyProduction = systemSize * dailyUnitsPerKW;
    const annualProd = dailyProduction * 365;
    const annualSavings = annualProd * highestTariff;

    // Assuming some values for payback period calculation
    const initialCost = systemSize * 50000; // Assumed initial cost per KW
    const payback = initialCost / annualSavings;

    setAnnualProduction(annualProd);
    setPaybackPeriod(payback);
    return annualSavings;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savings = calculateSavings();
    setEstimatedSavings(savings);
  };

  useEffect(() => {
    if (sizingChartRef.current) {
      const sizingCtx = sizingChartRef.current.getContext("2d");
      new Chart(sizingCtx, {
        type: "doughnut",
        data: {
          labels: ["System Size (kW)", "Annual Generation (kWh)"],
          datasets: [
            {
              label: "System Sizing",
              backgroundColor: ["#FF6384", "#36A2EB"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB"],
              data: [formData.systemSize, calculateAnnualGeneration()],
            },
          ],
        },
      });
    }
  }, [formData]);

  return (
    <>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img
            src={solcalImage}
            className="w-full object-cover h-96"
            alt="img"
          />
        </div>
        )
      </section>
      <div className="breadcrum pt-2">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Solar Calculator</li>
              </ul>
            </div>
            )
          </div>
        </div>
      </div>
      <section>
        <div className="career _investor_relation">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="title centerheading">
                    <div className="centerit _investor_relation">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Solar Calculator
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="ir-container"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div className="max-w-lg mx-auto bg-white text-black shadow-md rounded p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">1. System Sizing</h3>
                        <div className="mb-2">
                          <label>Sanctioned Load (kW):</label>
                          <input
                            type="number"
                            name="sanctionedLoad"
                            value={formData.sanctionedLoad}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Units Consumed (kWh):</label>
                          <input
                            type="number"
                            name="unitsConsumed"
                            value={formData.unitsConsumed}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Highest Tariff (₹):</label>
                          <input
                            type="number"
                            name="highestTariff"
                            value={formData.highestTariff}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Days Solar Not In Use:</label>
                          <input
                            type="number"
                            name="solarNotInUse"
                            value={formData.solarNotInUse}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Daytime Consumption (%):</label>
                          <input
                            type="number"
                            name="daytimeConsumption"
                            value={formData.daytimeConsumption}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Roof Area (sqft):</label>
                          <input
                            type="number"
                            name="roofArea"
                            value={formData.roofArea}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Shading:</label>
                          <select
                            name="shading"
                            value={formData.shading}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label>System Size (kW):</label>
                          <input
                            type="number"
                            name="systemSize"
                            value={formData.systemSize}
                            onChange={handleInputChange}
                            className="block w-full p-2 border rounded mb-2"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="block w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
                      >
                        Calculate
                      </button>
                    </form>
                    {estimatedSavings !== null && (
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-bold text-green-600">
                          Estimated Savings
                        </h3>
                        {estimatedSavings !== null && (
                          <div className="mt-6 text-center">
                            <h3 className="text-xl font-bold text-green-600">
                              Estimated Savings: Rs.{" "}
                              {estimatedSavings.toFixed(2)}
                            </h3>
                            <h3 className="text-xl font-bold text-green-600">
                              Annual Production: {annualProduction.toFixed(2)}{" "}
                              kWh
                            </h3>
                            <h3 className="text-xl font-bold text-green-600">
                              Payback Period: {paybackPeriod.toFixed(2)} years
                            </h3>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="charts-container mt-8">
                    <h3 className="text-center font-bold text-lg mb-4">
                      System Sizing
                    </h3>
                    <div className="chart mb-8">
                      <canvas id="sizingChart" ref={sizingChartRef}></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SolarCalculator;