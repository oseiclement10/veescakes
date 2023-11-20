const RoundButton = ({ label }) => {
  return (
    <button className="py-2 w-[160px] px-4 mt-8 rounded-3xl text-burgandyLight text-lg bg-burgandyDark hover:opacity-90">
      {label}
    </button>
  );
};

export default RoundButton;
