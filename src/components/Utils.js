let grievantName = "";
let caseId = "";
let formSubmitted = 0;

export const setGrievanceData = (name, id, submitted) => {
  grievantName = name;
  caseId = id;
  formSubmitted = submitted; // Update the global variable instead of the parameter
};

export const getGrievantName = () => grievantName;
export const getCaseId = () => caseId;
export const getFormSubmitted = () => formSubmitted; // Renamed to follow camelCase convention
