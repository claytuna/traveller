function getCareer({
  name = "",
  isFirst = false,
  hasBeenDrafted = false,
  basicTraining = {},
  availableSkills = {},
  commission = false,
  specialization = false,
}) {
  return {
    name,
    isFirst,
    hasBeenDrafted,
    previousCareers: [],
    basicTraining: basicTraining,
    availableSkills: availableSkills,
    commission: commission,
    specialization: specialization,
  };
}

const initialState = getCareer({});

const CareerReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "START":
    /* expect pastCareers, hasBeenDrafted
      return availableCareers
      */
    case "QUALIFY":
    /* expect NAME
      if isFirst, then add basic training
      return specialization options
      */
    case "UNQUALIFY":
    /*
      if hasBeenDrafted, then return DRIFTER
      else return options to DRAFT or DRIFTER
      */
    case "SPECIALIZE":
    /* expect specialization
      update specialization
      return skills tables for career: PERSONAL, SERVICE, SPECIAL, [ADVANCED, COMMISSION]
      */
    case "SURVIVAL_SUCCESS":
    /*
     */
    case "SURVIVAL_FAILURE":
    case "CONTINUE":
    case "MUSTER_OUT":
    /* expect benefits
     */
    default:
      return state;
  }
};

export default CareerReducer;
