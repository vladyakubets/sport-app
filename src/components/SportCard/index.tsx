import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentSport } from "../../store/slices";
import { Sport } from "../../types/sport";
import { SportButtonBox } from "./styles";

const SportCard = ({ sport }: { sport: Sport }) => {
  const currentSport = useAppSelector((store) => store.sportList.currentSport);
  const dispatch = useAppDispatch();
  const selectSport = () => {
    dispatch(setCurrentSport(sport));
  };
  return (
    <SportButtonBox
      onClick={selectSport}
      selected={currentSport?.Id === sport.Id}
    >
      <span>{sport.N}</span>
      <span>{sport.C}</span>
    </SportButtonBox>
  );
};

export default SportCard;
