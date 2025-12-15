import axios from "axios";
import iziToast from "izitoast";

const formElem = document.querySelector("#order-modal-form");

formElem.addEventListener ("submit", async e => {
  e.preventDefault();
  const { email, phone } = e.target.elements;
  const formData = {
    name: userName.value,
    phone: phone.value,
    animalId: `${animalId}`,
    comment: `${message.value}`,
  }
  try {const response = axios.post ("https://paw-hut.b.goit.study/api/orders", formData);

const orderData = response.data;
console.log(orderData);
iziToast.success({
    title: "Success", 
    message: `Ви знайшли собі найкращого друга!`,
    position: `topLeft`,
});
e.target.reset();
} catch (error) {
    iziToast.error({
        title: "Error", 
        message: `В цей раз ви не змогли знайти друга. Спробуйте ще раз.`,
        position: `topLeft`,
    });
};
});


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    
    refs.modal.classList.toggle("is-open");
  }
})();