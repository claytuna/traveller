import { SKILL_LIST, EDUCATION_SKILLS } from "constants/Skills";

const SkillService = {

  list: () => {
    return SKILL_LIST;
  },

  getBackgroundSkills: ( tradeCodes ) => {
    let S = SKILL_LIST;
    var tradeSkillMap = {
      'Ag': S['ANIMALS'],
      'As': S['ZERO_G'],
      'Ba': false,
      'De': S['SURVIVAL'],
      'Fl': S['SEAFARER'],
      'Ga': S['ANIMALS'],
      'Hi': S['STREETWISE'],
      'Ht': S['COMPUTERS'],
      'IC': S['VACC_SUIT'],
      'In': S['TRADE'],
      'Lo': false,
      'Lt': S['SURVIVAL'],
      'Na': S['ANIMALS'],
      'Ni': false,
      'Po': S['ANIMALS'],
      'Ri': S['CAROUSE'],
      'Wa': S['SEAFARER'],
      'Va': S['VACC_SUIT']
    };

    /*tradeSkillMap['Ag'] */

  	return { worldSkills: _.filter( _.map(tradeCodes, (o)=> tradeSkillMap[o]), (fo)=>fo!=undefined), educationSkills: EDUCATION_SKILLS };

    function fs(n){ return SkillService.findSkill(n) };
  },

  findSkill: ( skillName ) => {
    return _.filter( SkillService.list(), (obj)=> obj.name == skillName )[0];
  }
}

module.exports = SkillService;
