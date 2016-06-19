var shallowCompare = require('react-addons-shallow-compare');

module.exports = class CorePure extends Core {
	shouldComponentUpdate( nextProps, nextState ) {
		return shallowCompare( this, nextProps, nextState );
	}
}