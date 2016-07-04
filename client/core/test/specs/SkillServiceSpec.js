var SkillService = require("services/SkillService");

describe('services-SkillService', ()=>{

  describe('list()', ()=>{
    it('should return a list of all skills', ()=>{
      expect(SkillService.list().length).toBe(124);
    });
  });

  describe('getBackgroundSkills()', ()=>{
    it('should return a list of available background skills based on homeworld trade values (includes education skills)', ()=>{
      var skillz = SkillService.getBackgroundSkills(['Ag', 'As', 'Ba', 'De', 'Fl', 'Ga', 'Hi', 'Ht', 'IC', 'In', 'Lo', 'Lt', 'Na', 'Ni', 'Po', 'Ri', 'Wa', 'Va']);
      expect(skillz.worldSkills.length).toBe(13);
      expect(skillz.educationSkills.length).toBe(15);
      skillz = SkillService.getBackgroundSkills(['Ag']);
      expect(skillz.worldSkills.length).toBe(1);
      expect(skillz.educationSkills.length).toBe(15);
    });
  });

  describe('findSkill()', ()=>{
    it('should return a skill by name', ()=>{
      expect(SkillService.findSkill('Admin').id).toBe(1);
      expect(SkillService.findSkill('Riding').id).toEqual(49);
    });
  });


});
