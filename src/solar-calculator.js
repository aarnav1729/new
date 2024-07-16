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
    option: "",
    state: "",
    category: "",
    electricityCost: 8,
    roofTopArea: "",
    shadowFreeArea: "",
    panelCapacity: "",
    budget: "",
  });
  const [estimatedSavings, setEstimatedSavings] = useState(null);
  const [annualProduction, setAnnualProduction] = useState(null);
  const [paybackPeriod, setPaybackPeriod] = useState(null);
  const savingsChartRef = useRef(null);
  const costChartRef = useRef(null);
  const productionChartRef = useRef(null);

  useEffect(() => {
    if (estimatedSavings !== null) {
      renderCharts();
    }
  }, [estimatedSavings]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      option: checked ? value : "",
    }));
  };

  const handleSliderChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      electricityCost: e.target.value,
    }));
  };

  const calculateSavings = () => {
    const { option, electricityCost, panelCapacity } = formData;

    const systemSize =
      option === "solarPanelCapacity" ? parseFloat(panelCapacity) : 10; // Default to 10KW if not specified
    const dailyUnitsPerKW = 4; // Use 4 as an average value for simplicity
    const dailyProduction = systemSize * dailyUnitsPerKW;
    const annualProd = dailyProduction * 365;
    const annualSavings = annualProd * electricityCost;

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

  const sizingChartRef = useRef(null);
  const financingChartRef = useRef(null);
  const capexDpaChartRef = useRef(null);
  const energyForecastingChartRef = useRef(null);

  const renderCharts = () => {
    const systemSize = formData.panelCapacity
      ? parseFloat(formData.panelCapacity)
      : 10; // Define systemSize
    const dailyUnitsPerKW = 4; // Average value for simplicity
    const dailyProduction = systemSize * dailyUnitsPerKW;
    const annualProd = dailyProduction * 365; // Define annualProd

    const capexCost = 500000; // Example value, replace with actual calculation logic if needed
    const dpaCost = 300000; // Example value, replace with actual calculation logic if needed
    const ppaCost = 200000; // Example value, replace with actual calculation logic if needed

    const capexSavings = estimatedSavings; // Adjust logic as needed
    const dpaSavings = estimatedSavings * 0.9; // Adjust logic as needed

    const savingsCtx = savingsChartRef.current.getContext("2d");
    new Chart(savingsCtx, {
      type: "bar",
      data: {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        datasets: [
          {
            label: "Net Annual Savings",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
            hoverBorderColor: "rgba(75, 192, 192, 1)",
            data: [
              estimatedSavings,
              estimatedSavings * 1.1,
              estimatedSavings * 1.2,
              estimatedSavings * 1.3,
              estimatedSavings * 1.4,
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    const costCtx = costChartRef.current.getContext("2d");
    const initialCost = 500000; // Define initialCost variable
    new Chart(costCtx, {
      type: "line",
      initialCost: initialCost, // Use the defined variable
      data: {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        datasets: [
          {
            label: "Cumulative Cost",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
            hoverBorderColor: "rgba(255, 99, 132, 1)",
            data: [
              initialCost,
              initialCost - estimatedSavings,
              initialCost - estimatedSavings * 2,
              initialCost - estimatedSavings * 3,
              initialCost - estimatedSavings * 4,
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    const productionCtx = productionChartRef.current.getContext("2d");
    new Chart(productionCtx, {
      type: "bar",
      data: {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        datasets: [
          {
            label: "Annual Production (kWh)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(153, 102, 255, 0.4)",
            hoverBorderColor: "rgba(153, 102, 255, 1)",
            data: [
              annualProduction,
              annualProduction * 1.05,
              annualProduction * 1.1,
              annualProduction * 1.15,
              annualProduction * 1.2,
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

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
            data: [systemSize, annualProd],
          },
        ],
      },
    });

    const financingCtx = financingChartRef.current.getContext("2d");
    new Chart(financingCtx, {
      type: "bar",
      data: {
        labels: ["CAPEX", "DPA", "PPA"],
        datasets: [
          {
            label: "Financing Options",
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            data: [capexCost, dpaCost, ppaCost],
          },
        ],
      },
    });

    const capexDpaCtx = capexDpaChartRef.current.getContext("2d");
    new Chart(capexDpaCtx, {
      type: "line",
      data: {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        datasets: [
          {
            label: "CAPEX",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
            hoverBorderColor: "rgba(255, 99, 132, 1)",
            data: [
              capexSavings,
              capexSavings * 1.1,
              capexSavings * 1.2,
              capexSavings * 1.3,
              capexSavings * 1.4,
            ],
          },
          {
            label: "DPA",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
            hoverBorderColor: "rgba(75, 192, 192, 1)",
            data: [
              dpaSavings,
              dpaSavings * 1.1,
              dpaSavings * 1.2,
              dpaSavings * 1.3,
              dpaSavings * 1.4,
            ],
          },
        ],
      },
    });

    const energyForecastingCtx =
      energyForecastingChartRef.current.getContext("2d");
    new Chart(energyForecastingCtx, {
      type: "bar",
      data: {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        datasets: [
          {
            label: "Energy Forecasting",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(153, 102, 255, 0.4)",
            hoverBorderColor: "rgba(153, 102, 255, 1)",
            data: [
              annualProduction,
              annualProduction * 1.05,
              annualProduction * 1.1,
              annualProduction * 1.15,
              annualProduction * 1.2,
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

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
                        <h3 className="font-semibold mb-2">
                          1. Choose any one of the following
                        </h3>
                        <div className="mb-2">
                          <input
                            type="checkbox"
                            name="option"
                            value="totalRoofTopArea"
                            onChange={handleCheckboxChange}
                            checked={formData.option === "totalRoofTopArea"}
                            className="mr-2"
                          />
                          Total Area
                          {formData.option === "totalRoofTopArea" && (
                            <div className="mt-2">
                              <input
                                type="text"
                                name="roofTopArea"
                                value={formData.roofTopArea}
                                onChange={handleInputChange}
                                className="block w-full p-2 border rounded mb-2"
                                placeholder="Enter roof top area"
                              />
                              <input
                                type="text"
                                name="shadowFreeArea"
                                value={formData.shadowFreeArea}
                                onChange={handleInputChange}
                                className="block w-full p-2 border rounded mb-2"
                                placeholder="% of Shadow Free Open Space Available"
                              />
                            </div>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type="checkbox"
                            name="option"
                            value="solarPanelCapacity"
                            onChange={handleCheckboxChange}
                            checked={formData.option === "solarPanelCapacity"}
                            className="mr-2"
                          />
                          Solar Panel Capacity you want to install
                          {formData.option === "solarPanelCapacity" && (
                            <div className="mt-2">
                              <input
                                type="text"
                                name="panelCapacity"
                                value={formData.panelCapacity}
                                onChange={handleInputChange}
                                className="block w-full p-2 border rounded mb-2"
                                placeholder="Enter panel capacity in kW"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="option"
                            value="budget"
                            onChange={handleCheckboxChange}
                            checked={formData.option === "budget"}
                            className="mr-2"
                          />
                          Your budget
                          {formData.option === "budget" && (
                            <div className="mt-2">
                              <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="block w-full p-2 border rounded mb-2"
                                placeholder="Enter your budget in Rs."
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">
                          2. Select State and Customer Category
                        </h3>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="block w-full p-2 border rounded mb-2"
                        >
                          <option value="">Select State</option>
                          {statesInIndia.map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="block w-full p-2 border rounded"
                        >
                          <option value="">Select Category of Customer</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="institutional">Institutional</option>
                          <option value="government">Government</option>
                          <option value="social">Social</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">
                          3. What is your average Electricity Cost?
                        </h3>
                        <div className="flex items-center mb-2">
                          <input
                            type="number"
                            name="electricityCost"
                            value={formData.electricityCost}
                            onChange={handleSliderChange}
                            min="4"
                            max="20"
                            className="w-20 p-2 border rounded mr-2"
                          />
                          Rs. / kWh
                        </div>
                        <input
                          type="range"
                          name="electricityCost"
                          value={formData.electricityCost}
                          onChange={handleSliderChange}
                          min="4"
                          max="20"
                          className="w-full"
                        />
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
                          Estimated Savings: Rs. {estimatedSavings.toFixed(2)}
                        </h3>
                        <h3 className="text-xl font-bold text-green-600">
                          Annual Production: {annualProduction.toFixed(2)} kWh
                        </h3>
                        <h3 className="text-xl font-bold text-green-600">
                          Payback Period: {paybackPeriod.toFixed(2)} years
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
                <div className="charts-container mt-8">
                  <h3 className="text-center font-bold text-lg mb-4">
                    Financial Analysis
                  </h3>
                  <div className="chart mb-8">
                    <canvas id="savingsChart" ref={savingsChartRef}></canvas>
                  </div>
                  <div className="chart mb-8">
                    <canvas id="costChart" ref={costChartRef}></canvas>
                  </div>
                  <div className="chart mb-8">
                    <canvas
                      id="productionChart"
                      ref={productionChartRef}
                    ></canvas>
                  </div>
                </div>
                <div className="charts-container mt-8">
                  <h3 className="text-center font-bold text-lg mb-4">
                    System Sizing
                  </h3>
                  <div className="chart mb-8">
                    <canvas id="sizingChart" ref={sizingChartRef}></canvas>
                  </div>
                </div>
                <div className="charts-container mt-8">
                  <h3 className="text-center font-bold text-lg mb-4">
                    Financing Options
                  </h3>
                  <div className="chart mb-8">
                    <canvas
                      id="financingChart"
                      ref={financingChartRef}
                    ></canvas>
                  </div>
                </div>
                <div className="charts-container mt-8">
                  <h3 className="text-center font-bold text-lg mb-4">
                    CAPEX vs DPA
                  </h3>
                  <div className="chart mb-8">
                    <canvas id="capexDpaChart" ref={capexDpaChartRef}></canvas>
                  </div>
                </div>
                <div className="charts-container mt-8">
                  <h3 className="text-center font-bold text-lg mb-4">
                    Energy Forecasting
                  </h3>
                  <div className="chart mb-8">
                    <canvas
                      id="energyForecastingChart"
                      ref={energyForecastingChartRef}
                    ></canvas>
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
