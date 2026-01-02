

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center mt-14 sm:mt-16 md:mt-20">
      <div className="hidden md:block w-full h-full">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-b-xl"
          src="images/hero.jpg"
          alt="Image of Calgary Downtown"
        />
        
        <div className="absolute bottom-5 right-10 bg-primary/80 p-2 rounded-md">
          <p className="text-text-primary/70 text-sm">Calgary Downtown</p>
        </div>
      </div>
      <div className="md:hidden w-full h-full">
        
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-b-xl"
          src="images/hero_sm.jpg"
          alt="Image of Calgary Downtown"
        />
        
        <div className="absolute top-30 left-5">
            <p className="font-bold text-xl bg-linear-to-b from-text-secondary/90 to-text-secondary/60 bg-clip-text text-transparent">
                <span className="">Prashant</span>
                <br />
                <span>Sharma</span>
            </p>
        </div>
        <div className="absolute bottom-5 right-10 bg-primary/80 p-2 rounded-md">
          <p className="text-text-primary/70 text-sm">Banff Downtown</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
