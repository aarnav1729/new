let grievantName = "";
let caseId = "";
let formSubmitted = 0;

export const setGrievanceData = (name, id, submitted) => {
  grievantName = name;
  caseId = id;
  formSubmitted = submitted;
};

export const getGrievantName = () => grievantName;
export const getCaseId = () => caseId;
export const getFormSubmitted = () => formSubmitted;
