import React from "react";
import { GiFoodTruck, GiCakeSlice } from "react-icons/gi";
import { MdOutlineAddIcCall } from "react-icons/md";
import RoundButton from "./../../../components/Button/RoundedButton";
import assortedCake from "../../../assets/images/assortedcake.png";
import cupcake1 from "../../../assets/images/cupcake1.png";
import cakeSlice from "../../../assets/images/cakeslice1.png";

const CakeTile = ({ menuItem }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-3">
      <img src={menuItem?.img} alt="assorted cake" className="h-48" />
      <h3 className="font-semibold">{menuItem?.title}</h3>
      <p className="text-gray-700 w-2/3">{menuItem?.description}</p>
      <h4 className="font-bold">{menuItem?.price} $</h4>
      <RoundButton label="Add to cart" />
    </div>
  );
};

const SecondScreen = () => {
  const menuItems = [
    {
      title: "Dominico Angelica",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt veritatis minus .",
      price: 900,
      img: cupcake1,
    },
    {
      title: "Amet Consecteur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt veritatis minus .",
      price: 400,
      img: cakeSlice,
    },
    {
      title: "Felicion Amadara",
      description:
        "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
      price: 650,
      img: assortedCake,
    },
  ];

  return (
    <section className="w-screen h-screen">
      <section className="w-[90%] mx-auto ">
        <article className="services grid grid-cols-3 w-3/4 mx-auto place-items-center py-6">
          <div className="flex items-center space-x-3">
            <GiFoodTruck size={40} className="text-burgandyDark" />
            <div className="text-gray-700">
              <p> Order and experience greatness</p>
              <p> Nationwide Delivery</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <GiCakeSlice size={36} className="text-burgandyDark" />
            <div className="text-gray-700">
              <p> Cakes and more ...</p>
              <p> Cupcakes,Cookies,Pie, etc</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MdOutlineAddIcCall size={34} className="text-burgandyDark" />
            <div className="text-gray-700">
              <p> Call us for events and gatherings</p>
              <p> Parties, Weddings, Funerals etc</p>
            </div>
          </div>
        </article>

        <article className="py-6">
          <header className="text-5xl font-serif font-bold text-burgandyDark text-center  mb-8">
            Browse <br />
            Our special menu
          </header>

          <section className="grid grid-cols-3">
            {menuItems.map((elem) => (
              <CakeTile key={elem.title} menuItem={elem} />
            ))}
          </section>
        </article>
      </section>
    </section>
  );
};

export default SecondScreen;
