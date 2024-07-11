import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const InvestorRealtionDiscliamer = ({ onConfirm }) => {
  const handleConfirmClick = () => {
    Cookies.set("loaderHidden", true);
    onConfirm(true); 
  };

  const handleDoNotConfirmClick = () => {
    Cookies.set("loaderHidden", false);
    onConfirm(false); 
  };
  return (
    <div className="disclaimer-popup">
      <div className="popup-inner">
        <div className="disclaimer-content show-1">
          <h2 className="section-title">Disclaimer – Important</h2>
          <div className="disclaimer-text">
            <div className="disclaimer-text-main">
              <div className="disclaimer-text-1">
                <div className="disclaimer-text-inner">
                  <p>
                    <strong>IMPORTANT: </strong>You must read and agree with the
                    terms and conditions of the following disclaimer before
                    continuing.
                  </p>
                  <div className="">
                    <p>
                      The following disclaimer applies to the draft red herring
                      prospectus of Premier Energies Limited (the “Company”)
                      dated April 19, 2024 filed with the Securities and Exchange
                      Board of India (“SEBI”) (the “Draft Red Herring
                      Prospectus” or “DRHP”) hosted on this website in
                      connection with the proposed initial public offering of
                      equity shares of the Company (the “Offer”). The Draft Red
                      Herring Prospectus has been made available on this website
                      as prescribed under Regulation 26 of the SEBI (Issue of
                      Capital and Disclosure Requirements) Regulations, 2018, as
                      amended. You are advised to read this disclaimer carefully
                      before reading, accessing or making any other use of the
                      DRHP. By accessing the DRHP, you agree to follow the
                      following terms and conditions, including any
                      modifications to them from time to time.
                    </p>
                    <p>
                      The contents of the DRHP are for your information only. No
                      part of the contents herein shall be copied or duplicated
                      in any form by any means or redistributed and in
                      particular, may not be forwarded to any person in the
                      United States or to any U.S. address. Any forwarding,
                      distribution or reproduction of the contents herein in
                      whole or in part is unauthorized. Failure to comply with
                      this directive may result in a violation of the U.S.
                      Securities Act of 1933, as amended (the “U.S. Securities
                      Act”) or the applicable laws of other jurisdictions. The
                      Company is not soliciting any action based on it, and it
                      should not be construed as an offer to sell or the
                      solicitation of any offer to buy or subscribe for any
                      security and should not be construed as such. The
                      information contained herein has not been updated since
                      its original publication date and may not reflect the
                      latest updates.
                    </p>
                    <p>
                      The information in this section is directed at, and is
                      intended for distribution to, and use by, residents of
                      India only. Residents of countries other than India are
                      not authorized to view or use the information in this
                      section. Please note that because of restrictions imposed
                      by law on soliciting securities business in various
                      jurisdictions, subscription to the Offer will not be
                      permitted to residents of certain jurisdictions. The DRHP
                      is not intended for distribution to, or use by, any person
                      or entity in any jurisdiction or country where (a)
                      distribution or use of such information would be contrary
                      to law or regulation; or (b) the Company would by virtue
                      of such distribution become subject to new or additional
                      registration requirements.
                    </p>
                    <p>
                      The information contained in this portion of our website
                      is not intended to be, and should not be, viewed by any
                      person in the United States. By accessing such
                      information, you are hereby deemed to represent that you
                      are not in the United States. The information contained in
                      this website does not constitute an offer for sale in the
                      United States.
                    </p>
                    <p>
                      The securities offered in the Offer have not been and will
                      not be registered under the U.S. Securities Act or any
                      other applicable law of the United States and may not be
                      offered or sold within the United States except pursuant
                      to an exemption from, or in a transaction not subject to,
                      the registration requirements of the U.S. Securities Act
                      and applicable state securities laws. Accordingly, such
                      securities are only being offered and sold (a) in the
                      United States only to “qualified institutional buyers” (as
                      defined in Rule 144A under the U.S. Securities Act and
                      referred to in the Draft Red Herring Prospectus as “U.S.
                      QIBs” and, for the avoidance of doubt, the term U.S. QIBs
                      does not refer to a category of institutional investor
                      defined under applicable Indian regulations and referred
                      to in the Draft Red Herring Prospectus as “QIBs”) in
                      transactions exempt from, or not subject to the
                      registration requirements of the U.S. Securities Act and
                      (b) outside the United States in “offshore transactions”
                      in reliance on Regulation S under the U.S. Securities Act
                      and the applicable laws of the jurisdiction where those
                      offers and sales occur.
                    </p>
                    <p>
                      The securities offered in the Offer have not been and will
                      not be registered under the U.S. Securities Act or any
                      other applicable law of the United States and may not be
                      offered or sold within the United States except pursuant
                      to an exemption from, or in a transaction not subject to,
                      the registration requirements of the U.S. Securities Act
                      and applicable state securities laws. Accordingly, such
                      securities are only being offered and sold (a) in the
                      United States only to "qualified institutional buyers" (as
                      defined in Rule 144A under the U.S. Securities Act and
                      referred to in the Draft Red Herring Prospectus as "U.S.
                      QIBs" and, for the avoidance of doubt, the term U.S. QIBs
                      does not refer to a category of institutional investor
                      defined under applicable Indian regulations and referred
                      to in the Draft Red Herring Prospectus as "QIBs") in
                      transactions exempt from, or not subject to the
                      registration requirements of the U.S. Securities Act and
                      (b) outside the United States in "offshore transactions"
                      in reliance on Regulation S under the U.S. Securities Act
                      and the applicable laws of the jurisdiction where those
                      offers and sales occur.
                    </p>
                    <p>
                      The Company has taken all necessary steps to ensure that
                      the contents of the DRHP as appearing on this website are
                      identical to the DRHP filed with the SEBI. You are
                      reminded that documents transmitted in electronic form may
                      be altered or changed during the process of transmission
                      and consequently the Company does not accept any liability
                      or responsibility whatsoever in respect of alterations or
                      changes which have taken place during the course of
                      transmission of electronic data. The Company will not be
                      responsible for any loss or damage that could result from
                      interception and interpretation by any third parties of
                      any information being made available to you through this
                      website.
                    </p>
                    <p>
                      Any person into whose possession the Draft Red Herring
                      Prospectus comes is required to inform himself or herself
                      about and to observe any such restrictions. The Company is
                      not soliciting any action based on the Draft Red Herring
                      Prospectus, and it should not be construed as an offer to
                      sell or the solicitation of an offer to buy any securities
                      by the Company, the selling shareholders, or any of the
                      Book Running Lead Managers. Potential investors should not
                      rely on the DRHP for any investment decision. Any
                      potential investor should note that investment in equity
                      shares involves a high degree of risk and for details
                      relating to such risk, see "Risk Factors" of the red
                      herring prospectus, which may be filed with the Registrar
                      of Companies, Telangana at Hyderabad ("RoC") in the
                      future. Any decision on whether to invest in the Equity
                      Shares described in the DRHP may only be made after a red
                      herring prospectus has been filed with the SEBI and the
                      RoC and must be made solely on the basis of such red
                      herring prospectus as there may be material changes in the
                      red herring prospectus compared to the Draft Red Herring
                      Prospectus.
                    </p>
                    <p>
                      The Company has taken all necessary steps to ensure that
                      the contents of the DRHP as appearing on this website are
                      identical to the DRHP filed with the SEBI. You are
                      reminded that documents transmitted in electronic form may
                      be altered or changed during the process of transmission
                      and consequently the Company does not accept any liability
                      or responsibility whatsoever in respect of alterations or
                      changes which have taken place during the course of
                      transmission of electronic data. The Company will not be
                      responsible for any loss or damage that could result from
                      interception and interpretation by any third parties of
                      any information being made available to you through this
                      website.
                    </p>
                    <p>
                      Any person into whose possession the Draft Red Herring
                      Prospectus comes is required to inform himself or herself
                      about and to observe any such restrictions. The Company is
                      not soliciting any action based on the Draft Red Herring
                      Prospectus, and it should not be construed as an offer to
                      sell or the solicitation of an offer to buy any securities
                      by the Company, the selling shareholders, or any of the
                      Book Running Lead Managers. Potential investors should not
                      rely on the DRHP for any investment decision. Any
                      potential investor should note that investment in equity
                      shares involves a high degree of risk and for details
                      relating to such risk, see “Risk Factors” of the red
                      herring prospectus, which may be filed with the Registrar
                      of Companies, Telangana at Hyderabad (“RoC”) in the
                      future. Any decision on whether to invest in the Equity
                      Shares described in the DRHP may only be made after a red
                      herring prospectus has been filed with the SEBI and the
                      RoC and must be made solely on the basis of such red
                      herring prospectus as there may be material changes in the
                      red herring prospectus compared to the Draft Red Herring
                      Prospectus.
                    </p>
                    <p>
                      The Company cannot and does not guarantee the accuracy,
                      timeliness or completeness of the information being made
                      available to you in the DRHP beyond the date of the DRHP.
                      Neither the Company nor any of its affiliates nor their
                      directors, officers and employees will be liable or have
                      any responsibility of any kind for any loss or damage that
                      you incur in the event of any failure or disruption of
                      this website, or resulting from the act or omission of any
                      other party involved in producing or hosting this website
                      or the data contained therein available to you, or from
                      any other cause relating to your access to, inability to
                      access or use of the website or these materials. Our
                      Company will not be responsible for any loss to any person
                      or entity caused by any shortcoming, defect or inaccuracy
                      which may have inadvertently or otherwise crept into the
                      website.
                    </p>
                    <p>
                      To access this information, you must confirm by pressing
                      on the button marked "I Confirm" that, at the time of
                      access, you (a) are located and resident in India and (b)
                      are not located inside the United States. If you cannot
                      make this confirmation, you must press the button marked
                      "I Do Not Confirm".
                    </p>
                    <p>
                      Please note that application forms downloaded and used for
                      subscription to the Offer in contravention of the above
                      will be rejected with no recourse to the Company, the Book
                      Running Lead Managers or any of their respective
                      affiliates.
                    </p>
                    <p>
                      If you are not permitted to view these materials on this
                      website or are in any doubt as to whether you are
                      permitted to view these materials, please exit this
                      webpage.
                    </p>
                    <p>
                      To access this information, you must confirm by pressing
                      on the button marked “I Confirm” that, at the time of
                      access, you (a) are located and resident in India and (b)
                      are not located inside the United States. If you cannot
                      make this confirmation, you must press the button marked
                      “I Do Not Confirm”.
                    </p>
                    <p>
                      Please be advised that to view information on this site,
                      you must accept the conditions of the legal disclaimer.
                    </p>
                    <p className="mb-1">I hereby confirm that,</p>
                    <p className="mb-1">I am a Resident of India.</p>
                    <p className="">
                      I have read the Legal Disclaimer and am entitled to
                      receive information contained on this website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" disclaimer_btn">
              <button className="btn-4" onClick={handleConfirmClick}>
                <span>I Confirm</span>
              </button>
              <button className="btn-4 _dont-accept" onClick={handleDoNotConfirmClick}>
                <span>I do not confirm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRealtionDiscliamer;
