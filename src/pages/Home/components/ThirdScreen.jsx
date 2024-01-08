import RoundButton from "../../../components/Button/RoundedButton";
import pinkCake from "../../../assets/images/pinkcakeamor.jpg";
import cakesOnDish from "../../../assets/images/chocko.jpg";
import PropTypes from "prop-types";

const ThirdScreen = () => {
  return (
    <section className="w-screen ">
      <section className="w-[95%] mx-auto ">
        <h2 className="text-5xl font-serif font-bold text-burgandyDark text-center pt-10 mb-10">
          Chef Specialty
        </h2>

        <section className="w-[90%] ">
          <section className=" ml-auto   w-3/4 grid grid-cols-3 place-items-center">
            <Remarks
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        temporibus, beatae ipsam exercitationem mollitia ut voluptatibus fugiat
        inventore dolore natus "
            />
            <img src={cakesOnDish} alt="pink cake" className=""  />
            <p className=" text-slate-800 px-6 font-semibold text-4xl italic font-serif">
              Sweet Cakes Delicious Menu Items ...
            </p>
          </section>
        </section>

        <section className="w-[90%] ">
          <section className=" mr-auto   w-3/4 grid grid-cols-3 place-items-center">
            <p className=" text-slate-800 px-6 font-semibold text-4xl italic font-serif">
              Sweet Cakes Delicious Menu Items ...
            </p>
            <img src={pinkCake} alt="pink cake" className=""  />
            <Remarks
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        temporibus, beatae ipsam exercitationem mollitia ut voluptatibus fugiat
        inventore dolore natus "
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ThirdScreen;

function Remarks({ description, btnLabel = "Read more ..." }) {
  return (
    <div className="px-10 py-8">
      <p className="text-slate-700">{description}</p>
      <RoundButton label={btnLabel} />
    </div>
  );
}

Remarks.propTypes = {
  description: PropTypes.string.isRequired,
  btnLabel: PropTypes.string,
};
