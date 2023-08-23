import { Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { RightBarBlock } from "./styles";

export default function RightBar() {
  const betslipMatches = useAppSelector((store) => store.betslip.Matches);
  return (
    <RightBarBlock>
      <Typography>Betslip Matches: </Typography>
      {betslipMatches.map((match) => (
        <div key={match.Id}>
          {match.HomeTeamName} vs {match.AwayTeamName}
        </div>
      ))}
    </RightBarBlock>
  );
}
