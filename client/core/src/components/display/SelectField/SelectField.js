require("./SelectField.less");

module.exports = class SelectField extends Core {

  componentWillMount() {
		this.registerStoreKey( this.props.rsKey, 'value' );
	}

  componentDidMount(){
    if(this.props.options && this.props.options[0].value != "") {
      RS.set( this.props.rsKey, this.props.options[0].value );
    }
  }

  handleChange( event ) {
    RS.set( this.props.rsKey, event.target.value );
	}

  render() {
    return <select className="select-field" onChange={this.handleChange.bind(this)}>{ this.props.options && _.map(this.props.options, (o)=><option key={this.props.rsKey + o.value} value={o.value}>{o.text}</option>) }</select>;
  }
}
