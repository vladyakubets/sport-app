import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Ct, Trn } from "../../types/sport";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTournament } from "../../store/slices";

const CountrySideBarItem = ({ country }: { country: Ct }) => {
  const countryTournaments = country.Trn;
  const currentTournament = useAppSelector(
    (store) => store.sportList.selectedTournament
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(
    !!countryTournaments.find(
      (tournament) => tournament.Id === currentTournament?.Id
    )
  );

  const handleClick = () => {
    setOpen(!open);
  };

  const selectTournament = (tournament: Trn) => {
    dispatch(setCurrentTournament(tournament));
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PublicIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary={country.N} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {countryTournaments.map((tournament) => (
            <ListItemButton
              key={tournament.Id}
              onClick={() => {
                selectTournament(tournament);
              }}
              sx={{ pl: 4, backgroundColor: "#1B1B1B" }}
              selected={currentTournament?.Id === tournament.Id}
            >
              <ListItemText primary={tournament.N} />
              <Box ml={"auto"}>{tournament.C}</Box>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CountrySideBarItem;
