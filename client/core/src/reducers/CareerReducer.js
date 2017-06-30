const initialState = getCareer();

const CareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      /* expect pastCareers, hasBeenDrafted
      return availableCareers
      */
    case 'QUALIFY':
      /* expect NAME
      if isFirst, then add basic training
      return specialization options
      */
    case 'UNQUALIFY':
      /*
      if hasBeenDrafted, then return DRIFTER
      else return options to DRAFT or DRIFTER
      */
    case 'SPECIALIZE':
      /* expect specialization
      update specialization
      return skills tables for career: PERSONAL, SERVICE, SPECIAL, [ADVANCED, COMMISSION]
      */
    case 'SURVIVAL_SUCCESS':
      /*

      */
    case 'SURVIVAL_FAILURE':

    case 'CONTINUE':
    case 'MUSTER_OUT':
      /* expect benefits
      */
    default:
      return state;

  }

}

function getCareer({name = '', isFirst = false, hasDrafted = false, basicTraining = {}, availableSkills = {}, commission = false, specialization}) {
  return {
    name:name,
    isFirst: isFirst,
    hasBeenDrafted: hasDrafted,
    previousCareers: [],
    basicTraining: {},
    availableSkills: {},
    commission: false,
    specialization: false
  };
};
