import { createContext, useCallback, useReducer } from "react";

// Create Context
const TokyoContext = createContext();
// const { PRICEMODAL } = type;

// Type
const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PRICEMODAL: "PRICEMODAL",
  NEWSMODAL: "NEWSMODAL",
  PORTFOLIODETAILSMODAL: "PORTFOLIODETAILSMODAL",
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  PRICEMODAL,
  NEWSMODAL,
  PORTFOLIODETAILSMODAL,
} = type;

// Initial Value
const initialState = {
  nav: "home",
  animation: "fadeInLeft",
  modal: false,
  serviceModal: null,
  priceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,

  //menus
  menus: [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "About", href: "about" },  
    { id: 3, name: "Service", href: "service" },
    // { id: 4, name: "portfolio", href: "portfolio" },
    // { id: 5, name: "news", href: "news" },
    // { id: 7, name: "Pricing", href: "pricing" },
    { id: 6, name: "Contact", href: "contact" },
  ],
};
// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PRICEMODAL:
      return {
        ...state,
        priceModal: payload,
      };
    // case NEWSMODAL:
    //   return {
    //     ...state,
    //     newsModal: payload,
    //   };
    // case PORTFOLIODETAILSMODAL:
    //   return {
    //     ...state,
    //     portfolioDetailsModal: payload,
    //   };
    default:
      return state;
  }
};

// Watson State
const TokyoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPriceModal = useCallback((value) => {
    dispatch({
      type: PRICEMODAL,
      payload: value,
    })
  })
  const setNewsModal = useCallback((value) => {
    dispatch({
      type: NEWSMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIODETAILSMODAL,
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    modal,
    serviceModal,
    priceModal,
    newsModal,
    portfolioDetailsModal,
    menus,
  } = state;
  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        priceModal,
        setPriceModal,
        newsModal,
        setNewsModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
      }}
    >
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
