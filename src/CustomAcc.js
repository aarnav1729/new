import React, { useState, useEffect } from "react";
import pdg from "./images/pdf.png";
import siteData from "./json/investorSiteMap.json";
import DownloadIcon from "./components/Svg/DownloadIcon";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import PDfIcon from "./components/Svg/PDfIcon";

const CustomAcc = ({ onCategoryHeadingChange }) => {
  const [pagedata, setPagedata] = useState([]);
  const { slug } = useParams(); // Fetch the slug from the URL

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://www.premierenergies.com/api/investor_relation.php"
        );
        console.log("API response:", response.data); // Log the API response
        if (mounted) {
          setPagedata(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [slug]);

  const [activeHumberger, setActiveHumberger] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  console.log("this is the subcat", selectedSubcategory);
  const [selectedYear, setSelectedYear] = useState(null);
  console.log("this is the year", selectedYear);

  useEffect(() => {
    // Find the category matching the slug from the URL
    const currentCategory = pagedata.find((item) => item.slug === slug);
    // console.log("slug item selected ", currentCategory.heading);
    // onCategoryHeadingChange(currentCategory );
    if (currentCategory) {
      setSelectedCategory(currentCategory.id);
      console.log("this is the cat", selectedCategory);

      setActiveIndex(currentCategory.id - 1);
      const firstSubheading = currentCategory.subheadings[0];
      console.log("this is the cat", firstSubheading);
      if (firstSubheading) {
        setSelectedSubcategory(firstSubheading.id);
        console.log("this is the cat", selectedSubcategory);
        const firstYear = Object.keys(firstSubheading.fy)[0];
        setSelectedYear(firstYear);
      }
    }
  }, [slug, pagedata]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setSelectedCategory(pagedata[index].id);
      setSelectedSubcategory(pagedata[index].subheadings[0]?.id);
      setSelectedYear(Object.keys(pagedata[index].subheadings[0]?.fy)[0]);
    }
  };

  const handleSubcategoryClick = (categoryIndex, subcategoryIndex) => {
    setSelectedCategory(pagedata[categoryIndex].id);
    setSelectedSubcategory(
      pagedata[categoryIndex].subheadings[subcategoryIndex]?.id
    );
    setSelectedYear(
      Object.keys(pagedata[categoryIndex].subheadings[subcategoryIndex]?.fy)[0]
    );
    setActiveHumberger(false);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const filteredSubcategories = () => {
    const currentCategory = pagedata.find(
      (item) => item.id === selectedCategory
    );
    if (currentCategory && Array.isArray(currentCategory.subheadings)) {
      return currentCategory.subheadings;
    }
    return [];
  };
  const renderYears = () => {
    const subcategory = filteredSubcategories().find(
      (subItem) => subItem.id === selectedSubcategory
    );
    if (subcategory) {
      return Object.keys(subcategory.fy).map((year) => (
        <React.Fragment key={year}>
          {year && (
            <li>
              <a
                className={selectedYear === year ? "active" : ""}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </a>
            </li>
          )}
        </React.Fragment>
      ));
    }
    return null;
  };

  const filteredPdfLinks = () => {
    const currentCategory = pagedata.find(
      (item) => item.id === selectedCategory
    );
    if (currentCategory) {
      const subcategory = currentCategory.subheadings.find(
        (subItem) => subItem.id === selectedSubcategory
      );
      if (subcategory) {
        return subcategory.fy[selectedYear] || [];
      }
    }
    return [];
  };

  return (
    <div className="col-11 mx-auto __ir ">
      <div className="nriaccordian p-0 mb-0 ">
        <div className="media-section">
          <div className="media-navigation-wrapper ">
            <div className="media-navigation-humberger ">
              <button
                className={`hemburgur ${activeHumberger && "active"}`}
                onClick={() => {
                  setActiveHumberger(!activeHumberger);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div
              className={`media-navigation-sidebar ${
                activeHumberger && "active"
              }`}
            >
              <ul className="">
                <div className="accordion">
                  {pagedata.map((item, index) => (
                    <div
                      key={item.id}
                      className={`accordion-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <Link
                        to={`/investor-relations/${item.slug}`}
                        className="_title_heading"
                      >
                        <button
                          className="title"
                          onClick={() => toggleAccordion(index)}
                        >
                          {item.heading}
                        </button>
                      </Link>
                      <div className="panel">
                        <ul className="ir-subHeading">
                          {item.subheadings.map((subItem, subIndex) => (
                            <li
                              key={subItem.id}
                              className={
                                selectedSubcategory === subItem.id
                                  ? "active"
                                  : ""
                              }
                              onClick={() =>
                                handleSubcategoryClick(index, subIndex)
                              }
                            >
                              {subItem.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
            <div className="media-navigation-content">
              <div className="year-navigation mb-4">
                <ul>{renderYears()}</ul>
              </div>
              <div className="media-content" data-rttabs="true">
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    aria-labelledby="react-tabs-0"
                    className="tab-panel"
                  >
                    <div className="media-grid">
                      {filteredPdfLinks().length === 0 ? (
                        <div className="N0-Data col-12  ">
                          <p className="mx-auto">No data</p>
                        </div>
                      ) : (
                        filteredPdfLinks().map((url, index) => (
                          <a
                            key={index}
                            href={url.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="pdf__card">
                              <div className="pdf__image">
                                <img src={pdg} alt="pdf-icon" />
                                {/* <PDfIcon/> */}
                              </div>
                              <div className="cnt">
                                <div className="pdf_text" title={url.title}>
                                  {url.title}
                                </div>
                                <div className="pdf_download_btn">
                                  <DownloadIcon />
                                </div>
                              </div>
                            </div>
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAcc;
