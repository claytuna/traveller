var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class Core extends React.Component {
	constructor(){
		super();
		this.autoruns = [];
		this.state = {};		
		mountSetup.call( this );
	}
	
	autorun( fn ) { this.autoruns.push( RS.autorun( (first) => this.mounted && fn.call(this, first) ) ); }
	
	registerStoreKey( key, name ) {
		name = name ? name : key.replace();
		this.autorun( ()=> this.setState({ [name]: RS.get(key) }) );		
	}
	
	static renderToDom( ComponentClass, placeholder, props ){
		return ReactDom.render( <Componentclass {...props}/>, placeholder );
	}
	
}

function mountSetup() {
	this.componentWillMount = _.wrap( this.componentWillMount, (fn) => {
		this.mounted = true;
		fn && fn.call( this );
	} );
	
	this.componentWillUnMount = _.wrap( this.componentWillUnMount, (fn) => {
		this.mounted = false;
		fn && fn.call( this );
		this.autoruns.forEach( a => a.stop() );
	} );	
}