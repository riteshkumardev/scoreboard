import { TYPE } from "./type";


const int = {
 bigha:"",
  katha:"",
  dhur:"",
  kanma:"",
  ekar:"",
  dismil:"",
  alignment:"Bigha Katha"


};
export const reducer = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.SET_BIGHA:
      console.log(payload, "payload");
      return {
        ...state,
        bigha:payload
      };
    case  TYPE.SET_KATHA:
      return {
        ...state,
        katha:payload
      };
    case  TYPE.SET_DHUR:
      return {
        ...state,
        dhur:payload
      };
    case TYPE.SET_KANMA:
      return {
        ...state,
        kanma:payload
      };
    case TYPE.SET_EKAR:
      return {
        ...state,
        ekar:payload
      };
    case TYPE.SET_DISMIL:
      return {
        ...state,
        dismil:payload
      };
    case TYPE.SET_ALIGNMENT:
      return {
        ...state,
        alignment:payload
      };
    
    default:
      return state;
  }
};
