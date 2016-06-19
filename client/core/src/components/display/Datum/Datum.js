require("./Datum.less");

module.exports = class Datum extends CorePure {
	constructor(){
		super();
		this.countableTimer = {};
		this.highlightTimeout = {};
	}
	
	componentWillReceiveProps( nextProps ){
		!isNaN(this.props.countable) && this.startCount( nextProps.value );
		nextProps.value != this.props.value && this.highlight.call(this);
	}
	
	componentDidMount(){
		!isNaN(this.props.countable) && this.startCount();
	}
	
	componentWillUnmount(){
		this.stopCount.call(this);
		clearTimeout(this.highlightTimeout);
	}
	
	startCount( startValue = 0 ){
		this.stopCount.call(this); 
		var intv = Math.abs(startValue - this.props.value) >= 100 ? 2 : 20;
		this.countableTimer = setInterval(this.count.bind(this, startValue), intv);
	}
	
	count( startValue ){
		var val = this.state.value || 0;
		val < this.props.value && this.setState({ value: val + 1 });
		val > this.props.value && this.setState({ value: val - 1 });
		val === this.props.value && this.stopCount.call(this);
	}
	
	stopCount(){
		clearInterval(this.countableTimer);
	}
	
	highlight(){
		this.setState({ updated: true });
		this.highlightTimeout = setTimeout( ()=>{ this.setState({ updated: false }) }, 800);
	}
	
	render() { 
		return this.props.value ? <span className={`datum ${this.state.updated ? "is-updated": ""}`}>{ getDatumValue.call(this) }</span> : null;
	}
};

function getDatumValue(){
	return this.props.countable ? doIncrement.call(this) : doNormalValue.call(this);
	
	function doNormalValue(){
		return this.props.comma ? numberWithCommas(this.props.value) : this.props.value;
	}
	
	function doIncrement(){
		return  this.state.value ? numberWithCommas(this.state.value) : numberWithCommas(this.props.value);
	}
	
	function numberWithCommas( value ) {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}
