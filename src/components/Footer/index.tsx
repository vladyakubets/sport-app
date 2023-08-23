import { useAppSelector } from "../../hooks";
import SportCard from "../SportCard";
import { AppFooter } from "./styles";

export default function Footer() {
  const sportListFromStore = useAppSelector((store) => store.sportList.sports);

  return (
    <AppFooter>
      {sportListFromStore.map((sport) => (
        <SportCard key={sport.Id} sport={sport} />
      ))}
    </AppFooter>
  );
}
