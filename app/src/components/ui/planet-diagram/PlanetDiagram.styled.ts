import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50px;
  width: 100%;
  background: #333;
  padding: 10px;
`;
export const Planet = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  display: block;
  margin: 0 auto;
`;
// @import (reference) "../../common.less";

// @tran: rgba(255, 255, 255, .15);

// @gray: #CCCCCC;
// @vacuum: #333333;
// @sky: #199FFF;

// @base-size: 80px;

// .world-diagram--traveller {
// 	margin-bottom: @margin-bot;

// 	.world-diagram__grid {
// 			background-color: #333;
// 			background-image: linear-gradient(0deg, transparent 24%, @tran 25%, @tran 26%, transparent 27%, transparent 74%, @tran 75%, @tran 76%, transparent 77%, transparent),
// 				linear-gradient(90deg, transparent 24%, @tran 25%, @tran 26%, transparent 27%, transparent 74%, @tran 75%, @tran 76%, transparent 77%, transparent);
// 	    border-top: 1px solid #fff;
// 	    border-bottom: 1px solid #000;
// 			background-size:40px 40px;
// 			height:100%;
// 			min-height: 155px;
// 			max-height: 185px;
// 	    padding: 13px;
// 	}

// 	.world-diagram__planet {
// 		background-color: @gray;
// 		border-radius: 50%;
// 		display: block;
// 		margin: 0 auto;
// 		min-height: 1px;
// 		min-width: 1px;
// 		overflow: hidden;
//     transition: height .5s ease-out, width .5s ease-out;

// 		/*Planet size*/
// 		&.is-size-0 { height: 20px; width: 20px; }
// 		&.is-size-1 { height: @base-size * .16; width: @base-size * .16; }
// 		&.is-size-2 { height: @base-size * .32; width: @base-size * .32; }
// 		&.is-size-3 { height: @base-size * .48; width: @base-size * .48; }
// 		&.is-size-4 { height: @base-size * .64; width: @base-size * .64; }
// 		&.is-size-5 { height: @base-size * .8; width: @base-size * .8; }
// 		&.is-size-6 { height: @base-size * .96; width: @base-size * .96; }
// 		&.is-size-7 { height: @base-size * 1.12; width: @base-size * 1.12; }
// 		&.is-size-8 { height: @base-size * 1.28; width: @base-size * 1.28; }
// 		&.is-size-9 { height: @base-size * 1.4; width: @base-size * 1.4; }
// 		&.is-size-a { height: @base-size * 1.6; width: @base-size * 1.6; }

// 		/*Atmosphere*/
// 		.atmos-taint() {
// 			display: block;
// 			content: "";
// 			border: 2px dotted @red-primary;
// 			height: 100%;
// 			width: 100%;
// 			border-radius: 50%;
// 		}
// 		&.is-atm {
// 			&-none { border: 1px dashed @vacuum; }
// 			&-trace { border: 1px solid @vacuum; }
// 			&-very-thin, &-very-thin--tainted { border: 2px dotted @sky; }
// 			&-very-thin--tainted:before { .atmos-taint() }
// 			&-thin, &-thin--tainted { border: 2px solid @sky; }
// 			&-thin--tainted:before { .atmos-taint() }
// 			&-standard,&-standard--tainted { border: 3px solid @sky; }
// 			&-standard--tainted:before { .atmos-taint() }
// 			&-dense, &-dense--tainted { border: 4px solid @sky; }
// 			&-dense--tainted:before { .atmos-taint() }
// 			&-exotic { border: 3px solid #FF19E3; }
// 			&-corrosive { border: 3px solid @green-primary; }
// 			&-dense--high { border: 4px solid @sky; }
// 			&-thin--low { border: 2px solid @sky; }
// 			&-insidious { border: 3px solid @red-primary; }
// 			&-unusual { border: 3px dashed #2DBFAB; }
// 		}

// 		/*Temperature*/
// 		&.is-temp {
// 			&-extreme .world-diagram__temperature{}
// 			&-frozen .world-diagram__temperature{}
// 			&-cold .world-diagram__temperature{}
// 			&-temperate .world-diagram__temperature{}
// 			&-hot .world-diagram__temperature{}
// 			&-roasting .world-diagram__temperature{}
// 		}

// 		/*Hydrosphere
// 		&.is-desert .world-diagram__hydro { background-color: rgba(241, 232, 188, .5) }
// 		&.is-dry .world-diagram__hydro { background-color: rgba(241, 232, 188, .3) }
// 		&.is-wet .world-diagram__hydro { background-color: rgba(25, 159, 255, .3) }
// 		&.is-water .world-diagram__hydro { background-color: rgba(25, 159, 255, .5) }*/

// 	}
// }
