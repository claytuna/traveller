import React, { useState, useEffect } from "react";
import "./Datum.less";

export type Value = number | string;

function numberWithCommas(value: Value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function doNormalValue(hasComma: boolean | undefined, value: Value) {
  return hasComma ? numberWithCommas(value) : value;
}

function doIncrement(value: Value) {
  return numberWithCommas(value);
}

function getDatumValue(
  hasComma: boolean | undefined,
  isCountable: boolean | undefined,
  value: Value
) {
  return isCountable ? doIncrement(value) : doNormalValue(hasComma, value);
}

export const Datum = ({
  value: valueProp,
  hasComma,
  isCountable,
}: DatumProps) => {
  const [isUpdated, setUpdated] = useState(false);
  const [value, setValue] = useState<number>();

  /* highlight on update effect */
  useEffect(() => {
    let highlightTimeout: NodeJS.Timeout;
    setUpdated(true);
    highlightTimeout = setTimeout(() => {
      setUpdated(false);
    }, 500);

    return () => clearTimeout(highlightTimeout);
  }, [valueProp]);

  /* incremental counting effect */
  useEffect(() => {
    let countInterval: NodeJS.Timeout;
    // if (valueProp === value && countInterval) {
    //   clearInterval(countInterval);
    //   return;
    // }
    if (isCountable && typeof valueProp === "number") {
      //   clearInterval(countInterval);
      const INTERVAL =
        Math.abs((value === undefined ? 0 : value) - valueProp) >= 100 ? 2 : 20;
      countInterval = setInterval(() => {
        const val = value === undefined ? 0 : value;
        val < valueProp && setValue(val + 1);
        val > valueProp && setValue(val - 1);
      }, INTERVAL);
    }
    return () => clearInterval(countInterval);
  }, [isUpdated, value, valueProp]);

  return (
    <span>
      {valueProp ? (
        <span className={`datum ${isUpdated ? "is-updated" : ""}`}>
          {getDatumValue(hasComma, isCountable, value ? value : valueProp)}
        </span>
      ) : null}
    </span>
  );
};

export interface DatumProps {
  hasComma?: boolean;
  isCountable?: boolean;
  value?: Value;
}

// class A extends React.Component {
//   constructor() {
//     super();
//     this.countableTimer = {};
//     this.highlightTimeout = {};
//     this.state = { updated: false };
//   }

//   componentWillReceiveProps(nextProps) {
//     !isNaN(this.props.countable) && this.startCount(nextProps.value);
//     nextProps.value != this.props.value && this.highlight.call(this);
//   }

//   componentDidMount() {
//     !isNaN(this.props.countable) && this.startCount();
//   }

//   componentWillUnmount() {
//     clearTimeout(this.highlightTimeout);
//     this.stopCount.call(this);
//   }

//   startCount(startValue = 0) {
//     this.stopCount.call(this);
//     var intv = Math.abs(startValue - this.props.value) >= 100 ? 2 : 20;
//     this.countableTimer = setInterval(this.count.bind(this, startValue), intv);
//   }

//   count(startValue) {
//     var val = this.state.value || 0;
//     val < this.props.value && this.setState({ value: val + 1 });
//     val > this.props.value && this.setState({ value: val - 1 });
//     val === this.props.value && this.stopCount.call(this);
//   }

//   stopCount() {
//     clearInterval(this.countableTimer);
//   }

//   highlight() {
//     this.setState({ updated: true });
//     this.highlightTimeout = setTimeout(() => {
//       this.setState({ updated: false });
//     }, 500);
//   }

//   render() {
//     return (
//       <span>
//         {" "}
//         {this.props.value ? (
//           <span className={`datum ${this.state.updated ? "is-updated" : ""}`}>
//             {getDatumValue.call(this)}
//           </span>
//         ) : null}{" "}
//       </span>
//     );
//   }
// }
