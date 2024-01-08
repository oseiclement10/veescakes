import { GiFoodTruck, GiCakeSlice } from "react-icons/gi";
import { MdOutlineAddIcCall } from "react-icons/md";
import RoundButton from "./../../../components/Button/RoundedButton";
import menuItems from "../../../constants/menuItems";
import { Carousel } from "flowbite-react";
import  PropTypes from "prop-types";

const CakeTile = ({ menuItem }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-3 ">
      <img src={menuItem?.img} alt="assorted cake" className="h-48" />
      <h3 className="font-semibold">{menuItem?.title}</h3>
      <p className="text-gray-700 w-2/3">{menuItem?.description}</p>
      <h4 className="font-bold">{menuItem?.price} $</h4>
      <RoundButton label="Add to cart" />
    </div>
  );
};

CakeTile.propTypes={
  menuItem:PropTypes.shape({
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
  })
}

const CakeTilesContainer = ({ menu }) => {
  return (
    <section className="py-6">
      <h3 className="py-3 text-lg text-center text-burgandyDark underline font-serif">{menu.title}</h3>
      <section className="py-3 grid place-items-center lg:grid-cols-2 xl:grid-cols-3">
        {menu.items.map((item) => (
          <CakeTile menuItem={item} key={item.title} />
        ))}
      </section>
    </section>
  );
};

CakeTilesContainer.propTypes = {
  menu:PropTypes.shape({
    title:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
      title:PropTypes.string.isRequired
    })),
  })
}


const SecondScreen = () => {
  const carouselTheme = {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-burgandyDark group-hover:bg-burgandySemiDark group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    indicators: {
      wrapper: "absolute top-0 left-1/2 flex -translate-x-1/2 space-x-3",
      active: {
        off: "bg-red-300 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-burgandyDark dark:bg-gray-800",
      },
    },
  };

  return (
    <section className="w-screen ">
      <section className="w-[90%] mx-auto ">
        <article className="services grid grid-cols-3 w-3/4 mx-auto place-items-center py-8">
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

      <article className="pt-6 pb-2">
          <header className="text-5xl font-serif font-bold text-burgandyDark text-center  mt-4 mb-10">
            Browse <br />
            Our special menu
          </header>

          <div className=" bg-burgandyLight py-6">
            <Carousel theme={carouselTheme} pauseOnHover={true}>
              {menuItems.map((elem) => (
                <CakeTilesContainer menu={elem} key={elem.title} />
              ))}
            </Carousel>
          </div>
        </article>
      </section>
    </section>
  );
};

export default SecondScreen;
