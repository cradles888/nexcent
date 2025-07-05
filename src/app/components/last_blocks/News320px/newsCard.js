const NewsCard = ({ item }) => {
  return (
    <div className="gap-[2vw] sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 bg-gray-50 border-solid items-center border-2 border-gray-400 justify-items-center grid sm:flex md:flex lg:flex xl:flex 2xl:flex  justify-between px-[3vw] sm:py-[2vw] md:py-[2vw] lg:py-[2vw] xl:py-[2vw] 2xl:py-[2vw] py-[4vw]">
      <h1 className="text-[#4D4D4D] text-[clamp(20px,1.1vw,50px)] font-semibold text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start w-auto sm:w-[60cqmin] md:w-[50cqmin] lg:w-[45cqmin] xl:w-[50cqmin] 2xl:w-[50cqmin]">
        {item.title || "Default Title"}
      </h1>
      <div className="flex gap-2 items-center">
        <a
          href="#"
          className="text-[clamp(16px,1.1vw,50px)] text-[#4CAF4F] font-semibold"
        >
          Read more
        </a>
        <img src="/images/arrow-right.png" className="w-[2vw]" />
      </div>
    </div>
  );
};

export default NewsCard;
