export interface Betslip {
  Matches: Match[];
  FeeRate: number;
  Combinations: any[];
  SiteId: number;
  Header: Header;
  IsCartesian: boolean;
  IsCartesianEnabled: boolean;
  Success: boolean;
  OddsChanged: boolean;
  HighStake: boolean;
}

export interface Match {
  Id: number;
  Tournament: string;
  Iso: string;
  Teams: string;
  Banko: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  HomeTeamName: string;
  AwayTeamName: string;
  Odds: Odd[];
  BulletinId: number;
  StartDate: string;
  SportId: number;
  TournamentId: number;
}

export interface Odd {
  Id: number;
  MatchId: number;
  Market: string;
  MarketId: number;
  Outcome: string;
  OutcomeId: number;
  Value: number;
  Active: boolean;
  Live: boolean;
  HomeScore: number;
  AwayScore: number;
  RefMatchId: number;
  BetRefId: number;
  OddRefId: number;
}

export interface Header {
  MaxOveralOdds: number;
  NumberOfBet: number;
  HasBonus: boolean;
  HasFee: boolean;
  FeeRate: number;
  Live: boolean;
}
