require("./TextField.less");

module.exports = class TextField extends Core {

  componentWillMount() {
		this.registerStoreKey(this.props.rsKey, 'value');
	}

  handleChange(event) {
    RS.set(this.props.rsKey, event.target.value);
	}

  render() {
    return <input className="text-field" type="text" onChange={this.handleChange.bind(this)} {..._.omit(this.props, 'rsKey')}/>;
  }
}
