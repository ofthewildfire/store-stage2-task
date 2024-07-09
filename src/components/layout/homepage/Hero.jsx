const Hero = () => {
  return (
    <section id="hero relative">
      <div className="bg-cover bg-[url(../public/image.png)] flex items-center justify-center h-screen text-center text-white gap-4 flex-col">
        <h1 className="text-[3rem] font-bold w-[30rem] text-center max-sm:hidden">
          Lets Help you Spice up your Kitchen
        </h1>
        <h1 className="max-sm:text-[1.5rem] max-sm:flex-wrap max-sm:font-extrabold max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden max-sm:block">
          Lets Help you Spice up your Kitchen
        </h1>
        <p className="text-[1.25rem] text-white font-medium w-[40rem] max-sm:hidden">
          We can help you create aesthetic and functional cooking spaces where
          you can accomplish your culinary dreams
        </p>
        <p className="text-[1.25rem] text-white font-medium max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden max-sm:block">
          We can help you create aesthetic and functional cooking spaces where
          you can accomplish your culinary dreams
        </p>
      </div>
    </section>
  );
};

export default Hero;
