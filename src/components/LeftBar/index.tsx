import { List, ListSubheader } from "@mui/material";
import { LeftBarBlock } from "./styles";
import { useAppSelector } from "../../hooks";
import CountrySideBarItem from "../CounrySideBarItem";

export default function LeftBar() {
  const currentSport = useAppSelector((state) => state.sportList.currentSport);

  return (
    <LeftBarBlock>
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Countries
          </ListSubheader>
        }
      >
        {currentSport?.Ct.map((country) => (
          <CountrySideBarItem key={country.Id} country={country} />
        ))}
      </List>
    </LeftBarBlock>
  );
}
