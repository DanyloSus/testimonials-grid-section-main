interface GridElementProps {
  img: string;
  name: string;
  h1: string;
  p: string;
  color: string;
  imgColor: string;
  colSpan?: number;
  rowSpan?: number;
  isDark: boolean;
  isEnd?: boolean;
}

const GridElement = ({
  img,
  name,
  h1,
  p,
  color = "white",
  imgColor = "white",
  colSpan = 1,
  rowSpan = 1,
  isDark = false,
  isEnd,
}: GridElementProps) => {
  return (
    <section
      className={`rounded-lg shadow-xl py-4 px-8 max-w-[540px] flex flex-col gap-3 lg:w-auto lg:pb-9 ${
        isEnd ? "lg:hidden" : isEnd === false ? "lg:block hidden" : ""
      }`}
      style={{
        backgroundColor: color,
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
        gridColumn: `span ${colSpan} / span ${colSpan}`,
        color: isDark ? "white" : "hsl(217, 19%, 35%)",
      }}
    >
      <div className="flex items-center">
        <img
          src={`./${img}`}
          alt={img}
          style={{ borderColor: imgColor }}
          className="w-[28px] h-[28px] border-2 rounded-full"
        />
        <div className="flex flex-col items-start justify-center ml-3">
          <h2>{name}</h2>
          <p className="text-xs opacity-50 mt-[-6px]">Verified Graduator</p>
        </div>
      </div>
      <h1 className="text-xl">{h1}</h1>
      <p className="text-[13px] opacity-50">{p}</p>
    </section>
  );
};

export default GridElement;
