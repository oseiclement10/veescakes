import logoImg from "../../../assets/images/veescakes.png";
import landingCake from "../../../assets/images/spongecake.png";
import { Link } from "react-router-dom";
import RoundButton from "../../../components/Button/RoundedButton";
import cc from "country-currency-data";
import codes from "country-calling-code";

const FirstScreen = () => { 
  const menuItems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "#products",
      label: "Products",
    },
    {
      href: "#order",
      label: "Order",
    },
    {
      href: "#ocassions",
      label: "Ocassions",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
  ];

  console.log(cc);
  console.log(codes);

  return (
    <section className="w-screen h-screen bg-landing-image">
      <section className="w-[90%] mx-auto">
        <nav className="flex items-center justify-between py-3">
          <img src={logoImg} alt="veescakes" className="w-20" />
          <div className="w-[600px] flex justify-between">
            {menuItems.map((elem) => (
              <Link to={elem.href} key={elem.href} className="font-semibold">
                {elem.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="contact">
              <p className="font-bold"> +233559751859 </p>
              <p className="text-gray-900 text-center">place an order now</p>
            </div>
            <button className="mx-4 py-2 px-4 rounded-3xl text-burgandyDark border-2 border-burgandyDark">
              Order Now
            </button>
          </div>
        </nav>

        <section className="grid grid-cols-2">
          <article className="mt-20">
            <h1 className="text-7xl font-bold text-burgandyDark">
              Crafting Happiness One Bite at a Time.
            </h1>

            <h3 className="text-2xl font-semibold text-burgandyDark py-6">
              {" "}
              VeesCakes and more (:{" "}
            </h3>
            <p className="text-xl w-5/6 py-6 font-semibold">
              Enjoy in a world of sweetness crafted with love and passion.
              Welcome to the Veescakes experience, where joy is baked into every
              bite.
            </p>

            <RoundButton label="Order Now" />
          </article>

          <article>
            <img src={landingCake} alt="veescakes example" />
          </article>
        </section>
      </section>
    </section>
  );
};

export default FirstScreen;


