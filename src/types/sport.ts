export interface Sport {
  Id: number;
  N: string;
  C: number;
  Ct: Ct[];
  Slug: string;
  Collapsed: boolean;
}

export interface SportResponse {
  S: Sport[];
}

export interface Ct {
  Id: number;
  N: string;
  I: string;
  C: number;
  Slug: string;
  Trn: Trn[];
  Collapsed: boolean;
}

export interface Trn {
  Id: number;
  N: string;
  C: number;
  RefTournamentId: number;
  Slug: string;
  T: string;
  IsFavorite: boolean;
}
