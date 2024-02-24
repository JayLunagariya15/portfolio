// import { useContext } from 'react';
// import { TokyoContext } from '@/src/Context';
// import ModalContainer from './ModalContainer';

// const PriceModal = () => {
//   const { priceModal, setPriceModal } = useContext(TokyoContext);

//   // ... Your PriceModal Content Goes Here

//   // You can set the priceModal value using setPriceModal function
// //   const handleSetPriceModal = () => {
// //     // Example: Set priceModal to a new value
// //     setPriceModal({
// //       title: 'New Title',
// //       description: 'New Description',
// //       // Add more properties as needed
// //     });
// //   };

//   return (
//     // <div>
//     //   {/* Your PriceModal Content Goes Here */}
//     //   {/* You can customize the structure based on your requirements */}
//     //   <div className="price-modal-content">
//     //     <h3>{priceModal.title}</h3>
//     //     <p>{priceModal.description}</p>
//     //     {/* Add more content as needed */}
//     //   </div>

//     //   {/* Example button to set priceModal */}
//     //   <button onClick={handleSetPriceModal}>Set Price Modal</button>
//     // </div>


// <ModalContainer nullValue={setPriceModal}>
// <div className="service_popup_informations w-full h-auto clear-both float-left">
//   <div className="image">
//     <img src="assets/img/thumbs/4-2.jpg" alt="" />
//     <div
//       className="main"
//       data-img-url={priceModal.image}
//       style={{ backgroundImage: `url(${priceModal.image})` }}
//     />
//   </div>
//   <div className="main_title">
//     <h3>{priceModal.name}</h3>
//   </div>
//   <div className="descriptions w-full float-left">
//     {priceModal.text.map((text, i) => (
//       <p
//         className={priceModal.text.length - 1 == i ? "" : "mb-[15px]"}
//         key={i}
//       >
//         {text}
//       </p>
//     ))}
//   </div>
// </div>
// </ModalContainer>
//   );
// };

// export default PriceModal;


// PriceModal.js

import { useContext } from "react";
import { TokyoContext } from "@/src/Context";
import ModalContainer from "./ModalContainer";

const PriceModal = () => {
  const { priceModal, setPriceModal } = useContext(TokyoContext);

  return (
    <ModalContainer nullValue={setPriceModal}>
      <div className="service_popup_informations w-full h-auto clear-both float-left">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={priceModal.image}
            style={{ backgroundImage: `url(${priceModal.image})` }}
          />
        </div>
        <div className="main_title">
          <h3>{priceModal.title}</h3>
        </div>
        <div className="descriptions w-full float-left">
          {priceModal.text.map((text, i) => (
            <p
              className={priceModal.text.length - 1 == i ? "" : "mb-[15px]"}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
};

export default PriceModal;
