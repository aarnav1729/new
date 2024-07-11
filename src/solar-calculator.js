import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import solcalImage from "./images/solcal.jpg";

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
    const { option, state, category, electricityCost } = formData;

    let baseSavings = 1000; // Base savings amount
    if (option === "totalRoofTopArea") {
      baseSavings += 500; // Add more savings if total roof top area is selected
    } else if (option === "solarPanelCapacity") {
      baseSavings += 700; // Add more savings if solar panel capacity is selected
    } else if (option === "budget") {
      baseSavings += 300; // Add more savings if budget is selected
    }

    const stateFactor = state === "state1" ? 1.1 : state === "state2" ? 1.2 : 1;
    const categoryFactor = category === "residential" ? 1.5 : category === "commercial" ? 1.3 : 1;
    const electricityCostFactor = electricityCost * 50;

    const savings = baseSavings * stateFactor * categoryFactor + electricityCostFactor;

    return savings;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savings = calculateSavings();
    setEstimatedSavings(savings);
  };

  return (
    <>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={solcalImage} className="w-full object-cover h-96" />
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
                <div className="ir-container" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once="true" data-aos-duration="500">
                  <div className="max-w-lg mx-auto bg-white text-black shadow-md rounded p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">1. Choose any one of the following</h3>
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
                        <h3 className="font-semibold mb-2">2. Select State and Customer Category</h3>
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
                        <h3 className="font-semibold mb-2">3. What is your average Electricity Cost?</h3>
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
                        className="block w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
                      >
                        Calculate
                      </button>
                    </form>
                    {estimatedSavings !== null && (
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-bold text-green-600">Estimated Savings: Rs. {estimatedSavings.toFixed(2)}</h3>
                      </div>
                    )}
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