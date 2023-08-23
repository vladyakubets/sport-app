export interface TournamentEvent {
  TournamentId: number;
  RefTournamentId: number;
  Tid: number;
  Tn: string;
  Sid: number;
  Sn: string;
  Cid: number;
  Cn: string;
  I: string;
  Ssl: string;
  Csl: string;
  Tsl: string;
  Matches: Match[];
  H: H;
  HP: number[];
}

export interface Match {
  Sid: number;
  Tid: number;
  Id: number;
  Sn: string;
  Ssl: string;
  Cn: string;
  Csl: string;
  Tn: string;
  I: string;
  Rid: number;
  Md: string;
  Hid: number;
  Aid: number;
  Hn: string;
  An: string;
  Ng: boolean;
  Hs: boolean;
  L: boolean;
  C: number;
  McG: number;
  ExternalId: number;
  RefTournamentId: number;
  RefHomeTeamId: number;
  RefAwayTeamId: number;
  Source: number;
  Markets: Markets;
  Msl: string;
}

export interface Markets {
  "5504": N5504[];
  "5509": N5509[];
  "5513": N5513[];
  "5545": N5545[];
  "5597": N5597[];
  "5721": N5721[];
  "5734": N5734[];
  "5736": N5736[];
}

export interface N5504 {
  Id: number;
  Active: boolean;
  Name: string;
  OddsValue: number;
  Format: string;
  ShortName: string;
  IsSpecial: boolean;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  BetHomeScore: number;
  BetAwayScore: number;
  UpDown?: string;
}

export interface N5509 {
  Id: number;
  Active: boolean;
  Name: string;
  OddsValue: number;
  Format: string;
  ShortName: string;
  IsSpecial: boolean;
  UpDown: string;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  BetHomeScore: number;
  BetAwayScore: number;
}

export interface N5513 {
  Id: number;
  Active: boolean;
  Name: string;
  OddsValue: number;
  Format: string;
  ShortName: string;
  IsSpecial: boolean;
  UpDown?: string;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  BetHomeScore: number;
  BetAwayScore: number;
}

export interface N5545 {
  Active: boolean;
  Special: string;
  IsSpecial: boolean;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  Id?: number;
  Name?: string;
  OddsValue?: number;
  Format?: string;
  ShortName?: string;
  HomeScore?: number;
  AwayScore?: number;
  PointSequence?: number;
  Sequence?: number;
  BetHomeScore?: number;
  BetAwayScore?: number;
  UpDown?: string;
}

export interface N5597 {
  Id: number;
  Active: boolean;
  Name: string;
  OddsValue: number;
  Format: string;
  ShortName: string;
  IsSpecial: boolean;
  UpDown?: string;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  BetHomeScore: number;
  BetAwayScore: number;
}

export interface N5721 {
  Id: number;
  Active: boolean;
  Name: string;
  OddsValue: number;
  Format: string;
  ShortName: string;
  IsSpecial: boolean;
  UpDown?: string;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  HomeScore: number;
  AwayScore: number;
  PointSequence: number;
  Sequence: number;
  BetHomeScore: number;
  BetAwayScore: number;
}

export interface N5734 {
  Active: boolean;
  Special: string;
  IsSpecial: boolean;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  Id?: number;
  Name?: string;
  OddsValue?: number;
  Format?: string;
  ShortName?: string;
  UpDown?: string;
  HomeScore?: number;
  AwayScore?: number;
  PointSequence?: number;
  Sequence?: number;
  BetHomeScore?: number;
  BetAwayScore?: number;
}

export interface N5736 {
  Active: boolean;
  Special: string;
  IsSpecial: boolean;
  IsScore: boolean;
  IsPlayer: boolean;
  IsHomePlayer: boolean;
  IsAwayPlayer: boolean;
  Id?: number;
  Name?: string;
  OddsValue?: number;
  Format?: string;
  ShortName?: string;
  UpDown?: string;
  HomeScore?: number;
  AwayScore?: number;
  PointSequence?: number;
  Sequence?: number;
  BetHomeScore?: number;
  BetAwayScore?: number;
}

export interface H {
  "5504": string[];
  "5509": string[];
  "5513": string[];
  "5545": string[];
  "5597": string[];
  "5721": string[];
  "5734": string[];
  "5736": string[];
}
