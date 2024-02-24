import { NavLink } from "react-router-dom";

const SuggestedSurah = () => {
  const highestReadingSurahs = [
    {
      id: "55",
      name: "আর রহমান",
    },
    {
      id: "18",
      name: "আল কাহফ",
    },
    {
      id: "36",
      name: "ইয়াসিন",
    },
    {
      id: "56",
      name: "আল ওয়াকিয়াহ",
    },
    {
      id: "67",
      name: "আল মুলক",
    },
  ];

  return (
    <div>
      <div className="p-5">
        <ul className="flex align-middle lg:justify-center gap-5 overflow-y-auto no-scrollbar p-5">
          {highestReadingSurahs.map((surah) => (
            <li key={surah.id}>
              <NavLink
                className="border flex gap-1 border-green-900 text-primaryHover rounded-full text-lg px-6 py-1 hover:bg-primary hover:text-textWhite transition hover:border-transparent"
                to={`/singleSurah/${surah.id}`}
              >
                <p className="">{surah.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestedSurah;
