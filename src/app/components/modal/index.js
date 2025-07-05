"use client";
import { useState } from "react";
import Head from "next/head";
import Modal from "./dropdown";

const Modalka = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null)
    const handleData = (data) => {
    setFormData(data);
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setIsModalOpen(true);
  };

  const closeModal = () => {
      document.body.style.overflow = 'auto'
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Пример Модального Окна</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        type="button"
        onClick={openModal}
        className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"
      >
        <img
          src="/images/header-burger-menu.png"
          className="w-[clamp(36px,3.3vw,100px)] cursor-pointer"
        />
      </button>

      <Modal onData={handleData} isOpen={isModalOpen} onClose={closeModal} />
      {formData && (
        <div>
          <h2>Полученные данные:</h2>
          <p>Имя: {formData.name}</p>
          <p>Организация: {formData.organization}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}
export default Modal;
