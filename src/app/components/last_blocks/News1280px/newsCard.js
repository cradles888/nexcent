const NewsCard = ({ item }) => {
    return (
        <div className="grid justify-items-center pb-[5vw]">
            <img
                src={item.imagesURL || "/images/news-card-img.png"}
                className="w-[48vw] max-w-[23.04vw]"
                alt={item.title}
            />
            <div className="absolute mt-[11.52vw]  w-[clamp(43.2cqmin,8.6vw,86cqmin)] p-[1vw] rounded-lg bg-[#F5F7FA] grid gap-3 justify-items-center shadow-[5px_5px_30px_rgba(0,0,0,0.25)]">
                <h1 className="text-center text-[clamp(16px,1.1vw,150px)] font-semibold text-[#717171]">
                    {item.title || "Default Title"}
                </h1>
                <div className="flex gap-2 items-center">
                    <a
                        href="#"
                        className="text-[clamp(18px,1.1vw,150px)] text-[#4CAF4F] font-semibold"
                    >
                        Read more
                    </a>
                    <img src="/images/arrow-right.png" className="w-[2vw]" />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
