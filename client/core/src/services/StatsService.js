var StatsService = module.exports = {
	setStats: (values) => {
		values.length === 6 && RS.set('stats.data', { STR:{value:values[0]}, DEX:{value:values[1]}, END:{value:values[2]}, INT:{value:values[3]}, EDU:{value:values[4]}, SOC:{value:values[5]}, });
	}
};
