const GenderHero = (props) => {
  return (
    <div className="mb-6 md:mb-10 relative h-[30rem] md:h-[40rem] rounded-xl overflow-hidden">
      <img
        src={props.heroImage}
        alt={`${props.gender} hero`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="absolute inset-0 flex items-center justify-center 
        text-4xl md:text-5xl font-bold text-white capitalize tracking-wide">
        {props.gender}
      </h1>
    </div>
  );
};

export { GenderHero };
