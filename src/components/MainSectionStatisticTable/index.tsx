import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useAppSelector } from "../../hooks";
import { useBetSlip } from "../../services/Betslip";
import { useTournamentEvents } from "../../services/TournamentEvents";
import { N5504 } from "../../types/tournamentEvent";
import { CustomTableCell, CustomTableHead, OddsButton } from "./styles";

export default function MainSectionStatisticTable() {
  const currentTournament = useAppSelector(
    (state) => state.sportList.selectedTournament
  );
  const tournamentEvents = useAppSelector(
    (state) => state.tournamentEvents.tournament
  );

  useTournamentEvents(currentTournament?.Id, {
    enabled: !!currentTournament?.Id,
  });

  const { mutate: getBetSlip } = useBetSlip();

  const handleBetSlip = (bet: N5504) => {
    getBetSlip(bet.Id);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "calc(100vh - 140px)",
        backgroundColor: "black",
        padding: "0 2px",
      }}
    >
      <Table stickyHeader size="small">
        <CustomTableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Match Result</TableCell>
            <TableCell align="center">Total Goals</TableCell>
            <TableCell align="center">Goals Handicap 3 Way</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {tournamentEvents?.Matches?.map((game) => (
            <TableRow
              key={game.Id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <CustomTableCell component="th" scope="row">
                <div>
                  {new Date(game.Md).getDate()}/{new Date(game.Md).getMonth()}/
                  {new Date(game.Md).getFullYear()}
                </div>
                <div>
                  {new Date(game.Md).getHours()}:
                  {new Date(game.Md).getMinutes()}
                </div>
              </CustomTableCell>
              <CustomTableCell align="center">
                <div>
                  {game.Hn} vs {game.An}
                </div>
                <div>
                  {game.Cn}/{game.Tn}
                </div>
              </CustomTableCell>
              <CustomTableCell align="center">
                <OddsButton
                  onClick={() => {
                    handleBetSlip(game.Markets[5504][0]);
                  }}
                  isup={game.Markets[5504][0].UpDown}
                >
                  {game.Markets[5504][0].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][1].UpDown}>
                  {game.Markets[5504][1].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][2].UpDown}>
                  {game.Markets[5504][2].OddsValue}
                </OddsButton>
              </CustomTableCell>
              <CustomTableCell align="center">
                <OddsButton
                  onClick={() => {
                    handleBetSlip(game.Markets[5504][0]);
                  }}
                  isup={game.Markets[5504][0].UpDown}
                >
                  {game.Markets[5504][0].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][1].UpDown}>
                  {game.Markets[5504][1].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][2].UpDown}>
                  {game.Markets[5504][2].OddsValue}
                </OddsButton>
              </CustomTableCell>
              <CustomTableCell align="center">
                <OddsButton
                  onClick={() => {
                    handleBetSlip(game.Markets[5504][0]);
                  }}
                  isup={game.Markets[5504][0].UpDown}
                >
                  {game.Markets[5504][0].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][1].UpDown}>
                  {game.Markets[5504][1].OddsValue}
                </OddsButton>
                <OddsButton isup={game.Markets[5504][2].UpDown}>
                  {game.Markets[5504][2].OddsValue}
                </OddsButton>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
