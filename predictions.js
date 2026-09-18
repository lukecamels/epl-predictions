// 2026-27 predictions, copied from the spreadsheet.
// Each list is the player's predicted ladder from 1st to 20th.
// Team names here are mapped to the live table via TEAM_IDS below.

const SEASON = "2026-27";

const TEAM_IDS = {
  "Arsenal": 359,
  "Aston Villa": 362,
  "Bournemouth": 349,
  "Brentford": 337,
  "Brighton": 331,
  "Chelsea": 363,
  "Coventry": 388,
  "Crystal Palace": 384,
  "Everton": 368,
  "Forest": 393,
  "Fulham": 370,
  "Hull": 306,
  "Ipswich": 373,
  "Leeds": 357,
  "Liverpool": 364,
  "Man City": 382,
  "Man United": 360,
  "Newcastle": 361,
  "Sunderland": 366,
  "Tottenham": 367,
};

const PREDICTIONS = {
  "Luke": ["Man City", "Arsenal", "Liverpool", "Man United", "Brighton", "Aston Villa", "Chelsea", "Brentford", "Tottenham", "Bournemouth", "Everton", "Forest", "Newcastle", "Crystal Palace", "Fulham", "Leeds", "Sunderland", "Ipswich", "Coventry", "Hull"],
  "Fin": ["Arsenal", "Man City", "Liverpool", "Man United", "Chelsea", "Tottenham", "Aston Villa", "Brentford", "Everton", "Fulham", "Brighton", "Newcastle", "Bournemouth", "Sunderland", "Crystal Palace", "Forest", "Leeds", "Coventry", "Ipswich", "Hull"],
  "Andy": ["Arsenal", "Chelsea", "Liverpool", "Man United", "Man City", "Brighton", "Tottenham", "Aston Villa", "Bournemouth", "Newcastle", "Brentford", "Crystal Palace", "Forest", "Leeds", "Everton", "Fulham", "Sunderland", "Ipswich", "Coventry", "Hull"],
  "Alex": ["Arsenal", "Liverpool", "Man United", "Chelsea", "Man City", "Tottenham", "Brighton", "Bournemouth", "Aston Villa", "Newcastle", "Brentford", "Crystal Palace", "Leeds", "Everton", "Sunderland", "Forest", "Fulham", "Hull", "Ipswich", "Coventry"],
  "John": ["Arsenal", "Man City", "Liverpool", "Man United", "Aston Villa", "Chelsea", "Bournemouth", "Brighton", "Newcastle", "Everton", "Tottenham", "Crystal Palace", "Fulham", "Sunderland", "Brentford", "Forest", "Leeds", "Coventry", "Hull", "Ipswich"],
  "Khoo": ["Arsenal", "Liverpool", "Man City", "Chelsea", "Tottenham", "Man United", "Aston Villa", "Brighton", "Brentford", "Everton", "Forest", "Newcastle", "Bournemouth", "Crystal Palace", "Leeds", "Fulham", "Ipswich", "Sunderland", "Coventry", "Hull"],
  "Kai": ["Arsenal", "Liverpool", "Man City", "Chelsea", "Tottenham", "Man United", "Aston Villa", "Brighton", "Brentford", "Bournemouth", "Forest", "Leeds", "Crystal Palace", "Newcastle", "Everton", "Sunderland", "Fulham", "Ipswich", "Coventry", "Hull"],
  "Trent": ["Arsenal", "Man United", "Chelsea", "Liverpool", "Brighton", "Aston Villa", "Man City", "Tottenham", "Brentford", "Newcastle", "Bournemouth", "Everton", "Fulham", "Leeds", "Crystal Palace", "Forest", "Sunderland", "Coventry", "Ipswich", "Hull"],
  "Will D": ["Arsenal", "Man United", "Chelsea", "Man City", "Brighton", "Tottenham", "Liverpool", "Everton", "Bournemouth", "Brentford", "Aston Villa", "Newcastle", "Crystal Palace", "Forest", "Leeds", "Sunderland", "Coventry", "Fulham", "Ipswich", "Hull"],
  "Will N": ["Arsenal", "Man City", "Liverpool", "Man United", "Chelsea", "Brentford", "Tottenham", "Aston Villa", "Bournemouth", "Forest", "Brighton", "Everton", "Sunderland", "Newcastle", "Leeds", "Fulham", "Crystal Palace", "Coventry", "Ipswich", "Hull"],
};
