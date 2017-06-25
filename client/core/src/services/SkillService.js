import { SKILL_LIST, EDUCATION_SKILLS } from "constants/Skills";

const SkillService = {

  list: () => {
    return SKILL_LIST;
  },

  getBackgroundSkills: ( tradeCodes ) => {
    let S = SKILL_LIST;
    var tradeSkillMap = {
      'Ag': { ANIMALS: S['ANIMALS']},
      'As': { ZERO_G : S['ZERO_G']},
      'Ba': false,
      'De': { SURVIVAL : S['SURVIVAL']},
      'Fl': { SEAFARER : S['SEAFARER']},
      'Ga': { ANIMALS : S['ANIMALS']},
      'Hi': { STREETWISE : S['STREETWISE']},
      'Ht': { COMPUTERS : S['COMPUTERS']},
      'IC': { VACC_SUIT : S['VACC_SUIT']},
      'In': { TRADE : S['TRADE']},
      'Lo': false,
      'Lt': { SURVIVAL : S['SURVIVAL']},
      'Na': { ANIMALS : S['ANIMALS']},
      'Ni': false,
      'Po': { ANIMALS : S['ANIMALS']},
      'Ri': { CAROUSE : S['CAROUSE']},
      'Wa': { SEAFARER : S['SEAFARER']},
      'Va': { VACC_SUIT : S['VACC_SUIT']}
    };

    var obj = {};
    _.map(tradeCodes, (o, i)=>{ if(tradeSkillMap[o]) { obj = _.assign({}, obj, tradeSkillMap[o]) } });

  	return { worldSkills: obj, educationSkills: EDUCATION_SKILLS };
  },

  findSkill: ( skillName ) => {
    return _.filter( SkillService.list(), (obj)=> obj.name == skillName )[0];
  }
}

module.exports = SkillService;
