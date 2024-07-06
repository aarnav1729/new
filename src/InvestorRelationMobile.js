import React, { useState, useEffect } from "react";
import pdg from "./images/pdf.png";
import DownloadIcon from "./components/Svg/DownloadIcon";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const InvestorRelationMobile = () => {
  const [pagedata, setPagedata] = useState([]);
  const { slug } = useParams(); // Fetch the slug from the URL
  const navigateto = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://www.premierenergies.com/api/investor_relation.php"
        );
        setPagedata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedNewCurrentCat, setselectedNewCurrentCat] = useState(null);

  console.log("selectedCategory:", selectedCategory);
  console.log("selectedSubcategory:", selectedSubcategory);
  console.log("selectedYear:", selectedYear);

  useEffect(() => {
    const currentCategory = pagedata.find((item) => item.slug === slug);
    if (currentCategory) {
      console.log("Current category found:", currentCategory);
      setSelectedCategory(currentCategory.id);
      const firstSubheading = currentCategory.subheadings?.[0];
      if (firstSubheading) {
        console.log("First subheading found:", firstSubheading);
        setSelectedSubcategory(firstSubheading.id);
        setSelectedYear(Object.keys(firstSubheading.fy)[0]);
      }
    }
  }, [slug, pagedata]);

  const handleSubcategoryClick = (subcategoryId) => {
    console.log("handleSubcategoryClick, subcategoryId:", subcategoryId);
    setSelectedSubcategory(subcategoryId);
    const subcategory = getSelectedSubcategory(subcategoryId);
    if (subcategory) {
      console.log("subcategory:", subcategory);
      setSelectedYear(Object.keys(subcategory.fy)[0]);
      setSelectedCategory(subcategory.category_id); // add this line to update the selected category
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      console.log("this si the new selectedCategory", selectedCategory);
      const currentCategory = pagedata.find(
        (item) => item.slug === selectedCategory
      );
      if (currentCategory) {
        setselectedNewCurrentCat(currentCategory);
      }
      console.log("this si the new currentCategory", selectedNewCurrentCat);
      if (selectedNewCurrentCat) {
        const newSlug = selectedNewCurrentCat.slug;
        console.log("this si new slug", newSlug);
        if (newSlug !== slug) {
          navigateto(`/investor-relations/${newSlug}`);
        }
      }
    }
  }, [selectedCategory, selectedSubcategory, slug, pagedata]);

  const getSelectedSubcategory = (subcategoryId) => {
    console.log("getSelectedSubcategory, subcategoryId:", subcategoryId);
    if (pagedata && selectedCategory) {
      let currentCategory;
      if (typeof selectedCategory === "string") {
        currentCategory = pagedata.find(
          (item) => item.slug === selectedCategory
        );
      } else if (typeof selectedCategory === "number") {
        currentCategory = pagedata.find((item) => item.id === selectedCategory);
      }
      // Now you can use the currentCategory object as needed

      console.log("currentCategory:", currentCategory);
      if (currentCategory && currentCategory.subheadings) {
        const selectedSubcategory = currentCategory.subheadings.find(
          (subItem) => subItem.id === subcategoryId
        );

        console.log("selectedSubcategory:", selectedSubcategory);
        return selectedSubcategory;
      } else {
        if (selectedNewCurrentCat) {
          return selectedNewCurrentCat;
        }
      }
    }
    return null;
  };

  const filteredPdfLinks = () => {
    console.log("filteredPdfLinks");
    const subcategory = getSelectedSubcategory(selectedSubcategory);
    console.log("subcategory in filteredPdfLinks:", subcategory);
    if (subcategory && selectedYear && subcategory.fy) {
      console.log("selectedYear:", selectedYear);
      console.log(
        "subcategory.fy[selectedYear]:",
        subcategory.fy[selectedYear]
      );
      return subcategory.fy[selectedYear] || [];
    }
    return [];
  };
  return (
    <div className="col-11 mx-auto __ir ">
      <div className="nriaccordian p-0 mb-0 ">
        <div className="media-section">
          <div className="media-navigation-wrapper">
            <div className="media-navigation-content">
              <div className="mobile-fields">
                {/* Form for mobile */}
                <div className="form-control">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {pagedata.map((category) => (
                      <option key={category.id} value={category.slug}>
                        {category.heading}
                      </option>
                    ))}
                  </select>
                  {/* Render select options for subcategories */}
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => handleSubcategoryClick(e.target.value)}
                  >
                    <option value="">Select Subcategory</option>
                    {selectedCategory &&
                      pagedata
                        .find((category) => category.slug === selectedCategory)
                        ?.subheadings?.map((subItem) => (
                          <option key={subItem.id} value={subItem.id}>
                            {subItem.title}
                          </option>
                        ))}
                  </select>
                  {/* Render select options for years */}
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">Select Year</option>
                    {/* Use selectedSubcategory to fetch year options */}
                    {selectedSubcategory &&
                      pagedata
                        .find((category) => category.slug === selectedCategory)
                        ?.subheadings?.find(
                          (subItem) => subItem.id === selectedSubcategory
                        )?.fy &&
                      Object.keys(
                        pagedata
                          .find(
                            (category) => category.slug === selectedCategory
                          )
                          ?.subheadings?.find(
                            (subItem) => subItem.id === selectedSubcategory
                          )?.fy || {}
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="media-content" data-rttabs="true">
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    aria-labelledby="react-tabs-0"
                    className="tab-panel"
                  >
                    <div className="media-grid">
                      {filteredPdfLinks().map((url, index) => (
                        <a
                          key={index}
                          href={url.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="pdf__card">
                            <div className="pdf__image">
                              <img src={pdg} alt="pdf-icon" />
                            </div>
                            <div className="cnt">
                              <div className="pdf_text">{url.title}</div>
                              <div className="pdf_download_btn">
                                <DownloadIcon />
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
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

export default InvestorRelationMobile;
