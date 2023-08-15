import { TYPE } from "./type";


export const setBigha = (payload) => {
  return {
    type: TYPE.SET_BIGHA,
    payload
    
  };
};

export const setKatha = (payload) => {

  return {
    type: TYPE.SET_KATHA,

    payload
};
}
export const setDhur = (payload) => {
  return {
    type: TYPE.SET_DHUR,
    
    payload,
  };
};
export const setKanma = (payload) => {
  return {
    type: TYPE.SET_KANMA,

    payload,
  };
};
export const setEkarRedux = (payload) => {
  return {
    type: TYPE.SET_EKAR,

    payload,
  };
};
export const setDismilRedux = (payload) => {
  return {
    type: TYPE.SET_DISMIL,

    payload,
  };
};
export const setAlignmentRedux = (payload) => {
  return {
    type: TYPE.SET_ALIGNMENT,

    payload,
  };
};

