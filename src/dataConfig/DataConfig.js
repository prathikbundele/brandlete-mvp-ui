export const sportData = [
    {
    "sportname" : "Soccer",
    "positions" : [
            {"code" : "player", "value" : "Player"},
            {"code" : "goalie", "value" : "Goalie"}
        ],
    "metrics" : [
        {
            "code" : "goalsPerGame",
            "initial" : "GPG",
            "weightPercent" : 40,
            "topStat" : 0.9,
            "value" : "Goals Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "assistsPerGame",
            "initial" : "APG",
            "weightPercent" : 30,
            "topStat" : 0.6,
            "value" : "Assists Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "shotsOnGoalPerGame",
            "initial" : "SPG",
            "weightPercent" : 30,
            "topStat" : 2.10,
            "value" : "Shots On Goal Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "savePercentage",
            "initial" : "SP%",
            "weightPercent" : 100,
            "topStat" : 0.87,
            "value" : "Save Percentage",
            "positions" : ["Goalie"]
        }
    ]
},
{
    "sportname" : "Basketball",
    "positions" : [
            {"code" : "player", "value" : "Player"}
        ],
    "metrics" : [
        {
            "code" : "pointsPerGame",
            "initial" : "PPG",
            "weightPercent" : 30,
            "topStat" : 30,
            "value" : "Points Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "reboundsPerGame",
            "initial" : "RPG",
            "weightPercent" : 20,
            "topStat" : 15,
            "value" : "Rebounds Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "assitsPerGame",
            "initial" : "APG",
            "weightPercent" : 20,
            "topStat" : 10,
            "value" : "Assists Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "stealsBlocksPerGame",
            "initial" : "SBG",
            "weightPercent" : 15,
            "topStat" : 5,
            "value" : "Steals + Blocks Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "fieldGoalPercentage",
            "initial" : "PGP%",
            "weightPercent" : 10,
            "topStat" : 0.6,
            "value" : "Field Goal Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "freeThrowPercentage",
            "initial" : "FT%",
            "weightPercent" : 5,
            "topStat" : 0.9,
            "value" : "Free Throw Percentage",
            "positions" : ["Player"]
        }
    ]
},
{
    "sportname" : "Hockey",
    "positions" : [
        {"code" : "skater", "value" : "Skater"},
        {"code" : "goalie", "value" : "Goalie"}
    ],
    "metrics" : [
    {
        "code" : "pointsPerGame",
        "initial" : "PPG",
        "weightPercent" : 35,
        "topStat" : 1,
        "value" : "Points Per Game",
        "positions" : ["Skater"]
    },
    {
        "code" : "plusMinus",
        "initial" : "PM",
        "weightPercent" : 30,
        "topStat" : 20,
        "value" : "Plus/Minus",
        "positions" : ["Skater"]
    },
    {
        "code" : "shotsOnGoalPerGame",
        "initial" : "SGPG",
        "weightPercent" : 25,
        "topStat" : 2.75,
        "value" : "Shots on Goal Per Game",
        "positions" : ["Skater"]
    },
    {
        "code" : "penaltyMinutesPerGame",
        "initial" : "PMPG",
        "weightPercent" : 10,
        "topStat" : 26,
        "value" : "Penalty Minutes Per Game",
        "positions" : ["Skater"]
    },
    {
        "code" : "savePercentage",
        "initial" : "SP%",
        "weightPercent" : 100,
        "topStat" : 0.9,
        "value" : "Save Percentage",
        "positions" : ["Goalie"]
    }
    ]
},
{
    "sportname" : "Lacrosse",
    "positions" : [
            {"code" : "player", "value" : "Player"},
            {"code" : "goalie", "value" : "Goalie"}
        ],
    "metrics" : [
        {
            "code" : "goalsPerGame",
            "initial" : "GPG",
            "weightPercent" : 25,
            "topStat" : 3.1,
            "value" : "Goals Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "assistsPerGame",
            "initial" : "APG",
            "weightPercent" : 20,
            "topStat" : 2.9,
            "value" : "Assists Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "groundBallsPerGame",
            "initial" : "GBPG",
            "weightPercent" : 20,
            "topStat" : 8,
            "value" : "Grounds Balls Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "shootingPercentage",
            "initial" : "SHP%",
            "weightPercent" : 15,
            "topStat" : 0.45,
            "value" : "Shooting Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "causedTurnoversPerGame",
            "initial" : "CTPG",
            "weightPercent" : 10,
            "topStat" : 0.018,
            "value" : "Caused Turnovers Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "faceoffWinPercentage",
            "initial" : "FWP%",
            "weightPercent" : 10,
            "topStat" : 0.0057,
            "value" : "Faceoff Win Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "savePercentage",
            "initial" : "SP%",
            "weightPercent" : 100,
            "topStat" : 0.55,
            "value" : "Save Percentage",
            "positions" : ["Goalie"]
        }
    ]
},
{
    "sportname" : "Wrestling",
    "positions" : [
            {"code" : "wrestler", "value" : "Wrestler"}
        ],
    "metrics" : [
        {
            "code" : "pins",
            "initial" : "PINS",
            "weightPercent" : 30,
            "topStat" : 2,
            "value" : "Pins",
            "positions" : ["Wrestler"]
        },
        {
            "code" : "takedowns",
            "initial" : "TD",
            "weightPercent" : 25,
            "topStat" : 28,
            "value" : "Takedowns",
            "positions" : ["Wrestler"]
        },
        {
            "code" : "ridingTime",
            "initial" : "RT",
            "weightPercent" : 25,
            "topStat" : 8,
            "value" : "Riding Time",
            "positions" : ["Wrestler"]
        },
        {
            "code" : "escapes",
            "initial" : "ESC",
            "weightPercent" : 20,
            "topStat" : 25,
            "value" : "Escapes",
            "positions" : ["Wrestler"]
        }
    ]
},
{
    "sportname" : "Volleyball",
    "positions" : [
            {"code" : "player", "value" : "Player"}
        ],
    "metrics" : [
        {
            "code" : "killsPerSet",
            "initial" : "KPS",
            "weightPercent" : 30,
            "topStat" : 5.2,
            "value" : "Kills Per Set",
            "positions" : ["Player"]
        },
        {
            "code" : "hittingPercentage",
            "initial" : "HP%",
            "weightPercent" : 25,
            "topStat" : 0.445,
            "value" : "Hitting Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "assistsPerSet",
            "initial" : "APS",
            "weightPercent" : 20,
            "topStat" : 12,
            "value" : "Assists Per Set",
            "positions" : ["Player"]
        },
        {
            "code" : "blocksPerSet",
            "initial" : "BPS",
            "weightPercent" : 15,
            "topStat" : 1.55,
            "value" : "Blocks Per Set",
            "positions" : ["Player"]
        },
        {
            "code" : "digsPerSet",
            "initial" : "DPS",
            "weightPercent" : 10,
            "topStat" : 6.35,
            "value" : "Digs Per Set",
            "positions" : ["Player"]
        }
    ]
},
{
    "sportname" : "Field Hockey",
    "positions" : [
            {"code" : "player", "value" : "Player"},
            {"code" : "goalie", "value" : "Goalie"}
        ],
    "metrics" : [
        {
            "code" : "goalsPerGame",
            "initial" : "GPG",
            "weightPercent" : 35,
            "topStat" : 1.4,
            "value" : "Goals Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "pointsPerGame",
            "initial" : "PPG",
            "weightPercent" : 40,
            "topStat" : 3.2,
            "value" : "Points Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "assistsPerGame",
            "initial" : "APG",
            "weightPercent" : 25,
            "topStat" : 10,
            "value" : "Assists Per Game",
            "positions" : ["Player"]
        },
        {
            "code" : "savePercentage",
            "initial" : "SP%",
            "weightPercent" : 50,
            "topStat" : 0.82,
            "value" : "Save Percentage",
            "positions" : ["Goalie"]
        },
        {
            "code" : "goalsAgainstAverage",
            "initial" : "GAA",
            "weightPercent" : 50,
            "topStat" : 4.415,
            "value" : "Goals Against Average",
            "positions" : ["Goalie"]
        }
    ]
},
{
    "sportname" : "Golf",
    "positions" : [
            {"code" : "player", "value" : "Player"}
        ],
    "metrics" : [
        {
            "code" : "scoringAverage",
            "initial" : "SA",
            "weightPercent" : 30,
            "topStat" : 0,
            "value" : "Scoring Average",
            "positions" : ["Player"]
        },
        {
            "code" : "greensInRegulation",
            "initial" : "GIR",
            "weightPercent" : 25,
            "topStat" : 0,
            "value" : "Greens in Regulation",
            "positions" : ["Player"]
        },
        {
            "code" : "drivingAccuracy",
            "initial" : "DA",
            "weightPercent" : 20,
            "topStat" : 0,
            "value" : "Driving Accuracy",
            "positions" : ["Player"]
        },
        {
            "code" : "puttsPerRound",
            "initial" : "PPR",
            "weightPercent" : 15,
            "topStat" : 0,
            "value" : "Putts per Round",
            "positions" : ["Player"]
        },
        {
            "code" : "scamblingPercentage",
            "initial" : "SCP%",
            "weightPercent" : 10,
            "topStat" : 0,
            "value" : "Scambling Percentage",
            "positions" : ["Player"]
        }
    ]
},
{
    "sportname" : "Tennis",
    "positions" : [
            {"code" : "player", "value" : "Player"}
        ],
    "metrics" : [
        {
            "code" : "matchWinningPercentage",
            "initial" : "MWP%",
            "weightPercent" : 25,
            "topStat" : 0,
            "value" : "Match Winning Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "serviceGamesWonPercentage",
            "initial" : "SGWP%",
            "weightPercent" : 20,
            "topStat" : 0,
            "value" : "Service Games Won Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "returnGamesWonPercentage",
            "initial" : "RGWP%",
            "weightPercent" : 20,
            "topStat" : 0,
            "value" : "Return Games Won Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "firstServePercentage",
            "initial" : "FSP%",
            "weightPercent" : 10,
            "topStat" : 0,
            "value" : "First Serve Percentage",
            "positions" : ["Player"]
        },
        {
            "code" : "breaksPointsConvertedRate",
            "initial" : "BPCR",
            "weightPercent" : 10,
            "topStat" : 0,
            "value" : "Breaks Points Converted Rate",
            "positions" : ["Player"]
        },
        {
            "code" : "acesPerMatch",
            "initial" : "APM",
            "weightPercent" : 10,
            "topStat" : 0,
            "value" : "Aces Per Match",
            "positions" : ["Player"]
        },
        {
            "code" : "doubleFaultsPerMatch",
            "initial" : "DFPM",
            "weightPercent" : 5,
            "topStat" : 0,
            "value" : "Double Faults Per Match",
            "positions" : ["Player"]
        }
    ]
},
{
    "sportname" : "Football",
    "positions" : [
            {"code" : "quarterback", "value" : "Quarterback"},
            {"code" : "runningBack", "value" : "Running Back"},
            {"code" : "wideReceiver", "value" : "Wide Receiver"},
            {"code" : "defensiveLineman", "value" : "Defensive Lineman"},
            {"code" : "linebacker", "value" : "Linebacker"},
            {"code" : "defensiveBack", "value" : "Defensive Back"},
            {"code" : "kicker", "value" : "Kicker"},
            {"code" : "punter", "value" : "Punter"}
        ],
    "metrics" : [
        {
            "code" : "passingYardsPerGame",
            "initial" : "PYPG",
            "weightPercent" : 25,
            "topStat" : 300,
            "value" : "Passing Yards Per Game",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "completionPercentage",
            "initial" : "CP%",
            "weightPercent" : 25,
            "topStat" : 70,
            "value" : "Completion Percentage",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "passingTDsPerGame",
            "initial" : "PTPG",
            "weightPercent" : 25,
            "topStat" : 2.5,
            "value" : "Passing TDs Per Game",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "interceptionsPerGame",
            "initial" : "IPG",
            "weightPercent" : 10,
            "topStat" : 0.5,
            "value" : "Interceptions Per Game",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "rushingYardsPerGame",
            "initial" : "RYPG",
            "weightPercent" : 10,
            "topStat" : 30,
            "value" : "Rushing Yards Per Game",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "rushingTDsPerGame",
            "initial" : "RTPG",
            "weightPercent" : 5,
            "topStat" : 0.5,
            "value" : "Rushing TDs Per Game",
            "positions" : ["Quarterback"]
        },
        {
            "code" : "rushingYardsPerGame",
            "initial" : "RYPG",
            "weightPercent" : 35,
            "topStat" : 100,
            "value" : "Rushing Yards Per Game",
            "positions" : ["Running Back"]
        },
        {
            "code" : "yardsPerCarry",
            "initial" : "YPC",
            "weightPercent" : 35,
            "topStat" : 7,
            "value" : "Yards Per Carry",
            "positions" : ["Running Back"]
        },
        {
            "code" : "rushingTDsPerGame",
            "initial" : "RTPG",
            "weightPercent" : 20,
            "topStat" : 1,
            "value" : "Rushing TDs Per Game",
            "positions" : ["Running Back"]
        },
        {
            "code" : "receivingYardsPerGame",
            "initial" : "REYPG",
            "weightPercent" : 5,
            "topStat" : 25,
            "value" : "Receiving Yards Per Game",
            "positions" : ["Running Back"]
        },
        {
            "code" : "yardsPerReception",
            "initial" : "YPR",
            "weightPercent" : 5,
            "topStat" : 12,
            "value" : "Yards Per Reception",
            "positions" : ["Running Back"]
        },
        {
            "code" : "receivingYardsPerGame",
            "initial" : "REYPG",
            "weightPercent" : 35,
            "topStat" : 85,
            "value" : "Receiving Yards Per Game",
            "positions" : ["Wide Receiver"]
        },
        {
            "code" : "yardsPerReception",
            "initial" : "YPR",
            "weightPercent" : 35,
            "topStat" : 18,
            "value" : "Yards Per Reception",
            "positions" : ["Wide Receiver"]
        },
        {
            "code" : "receivingTDsPerGame",
            "initial" : "RTDPG",
            "weightPercent" : 20,
            "topStat" : 0.75,
            "value" : "Receiving TDs Per Game",
            "positions" : ["Wide Receiver"]
        },
        {
            "code" : "receptionsPerGame",
            "initial" : "REPG",
            "weightPercent" : 10,
            "topStat" : 6,
            "value" : "Receptions Per Game",
            "positions" : ["Wide Receiver"]
        },
        {
            "code" : "sacksPerGame",
            "initial" : "SPG",
            "weightPercent" : 50,
            "topStat" : 0.67,
            "value" : "Sacks Per Game",
            "positions" : ["Defensive Lineman"]
        },
        {
            "code" : "tacklesForLossPerGame",
            "initial" : "TLPG",
            "weightPercent" : 50,
            "topStat" : 1,
            "value" : "Tackles for Loss Per Game",
            "positions" : ["Defensive Lineman"]
        },
        {
            "code" : "sacksPerGame",
            "initial" : "SPG",
            "weightPercent" : 25,
            "topStat" : 0.67,
            "value" : "Sacks Per Game",
            "positions" : ["Linebacker"]
        },
        {
            "code" : "tacklesForLossPerGame",
            "initial" : "TLPG",
            "weightPercent" : 25,
            "topStat" : 1,
            "value" : "Tackles for Loss Per Game",
            "positions" : ["Linebacker"]
        },
        {
            "code" : "tacklesPerGame",
            "initial" : "TPG",
            "weightPercent" : 50,
            "topStat" : 9,
            "value" : "Tackles Per Game",
            "positions" : ["Linebacker"]
        },
        {
            "code" : "passesDefendedPerGame",
            "initial" : "PDPG",
            "weightPercent" : 35,
            "topStat" : 0.75,
            "value" : "Passes Defended Per Game",
            "positions" : ["Defensive Back"]
        },
        {
            "code" : "interceptionsPerGame",
            "initial" : "IPG",
            "weightPercent" : 15,
            "topStat" : 0.34,
            "value" : "Interceptions Per Game",
            "positions" : ["Defensive Back"]
        },
        {
            "code" : "tacklesPerGame",
            "initial" : "TPG",
            "weightPercent" : 50,
            "topStat" : 7,
            "value" : "Tackles Per Game",
            "positions" : ["Defensive Back"]
        },
        {
            "code" : "fieldGoalsAttempted",
            "initial" : "FGA",
            "weightPercent" : 15,
            "topStat" : 1.5,
            "value" : "Field Goals Attempted",
            "positions" : ["Kicker"]
        },
        {
            "code" : "fieldGoalPercentage",
            "initial" : "FGP%",
            "weightPercent" : 60,
            "topStat" : 80,
            "value" : "Field Goal Percentage",
            "positions" : ["Kicker"]
        },
        {
            "code" : "extraPointsPercentage",
            "initial" : "EPP%",
            "weightPercent" : 15,
            "topStat" : 95,
            "value" : "Extra Points Percentage",
            "positions" : ["Kicker"]
        },
        {
            "code" : "totalPointsPerGame",
            "initial" : "TPPG",
            "weightPercent" : 10,
            "topStat" : 7.5,
            "value" : "Total Points Per Game",
            "positions" : ["Kicker"]
        },
        {
            "code" : "yardsPerPunt",
            "initial" : "YPP",
            "weightPercent" : 100,
            "topStat" : 45,
            "value" : "Yards Per Punt",
            "positions" : ["Punter"]
        }
        
    ]
},
{
    "sportname" : "Baseball",
    "positions" : [
            {"code" : "hitter", "value" : "Hitter"},
            {"code" : "starter", "value" : "Starter"}
        ],
    "metrics" : [
        {
            "code" : "battingAverage",
            "initial" : "BAVG",
            "weightPercent" : 20,
            "topStat" : 0.38,
            "value" : "Batting Average",
            "positions" : ["Hitter"]
        },
        {
            "code" : "onBasePercentage",
            "initial" : "OBP%",
            "weightPercent" : 10,
            "topStat" : 0.485,
            "value" : "On-Base Percentage",
            "positions" : ["Hitter"]
        },
        {
            "code" : "sluggingPercentage",
            "initial" : "SP%",
            "weightPercent" : 10,
            "topStat" : 0.7,
            "value" : "Slugging Percentage",
            "positions" : ["Hitter"]
        },
        {
            "code" : "onBaseSluggingPercentage",
            "initial" : "OBSP%",
            "weightPercent" : 20,
            "topStat" : 0.17,
            "value" : "OPS: On-Base + Slugging Percentage",
            "positions" : ["Hitter"]
        },
        {
            "code" : "homeRunsPerGame",
            "initial" : "HRPG",
            "weightPercent" : 20,
            "topStat" : 0.4,
            "value" : "Home Runs Per Game",
            "positions" : ["Hitter"]
        },
        {
            "code" : "runsBattedInPerGame",
            "initial" : "RBIPG",
            "weightPercent" : 15,
            "topStat" : 1.2,
            "value" : "Runs Batted In Per Game",
            "positions" : ["Hitter"]
        },
        {
            "code" : "stolenBasesPerGame",
            "initial" : "SBPG",
            "weightPercent" : 5,
            "topStat" : 0.45,
            "value" : "Stolen Bases Per Game",
            "positions" : ["Hitter"]
        },
        {
            "code" : "earnedRunAverage",
            "initial" : "ERA",
            "weightPercent" : 30,
            "topStat" : 3.15,
            "value" : "ERA: Earned Run Average",
            "positions" : ["Starter"]
        },
        {
            "code" : "walksHitsPerInningPitched",
            "initial" : "WHIP",
            "weightPercent" : 25,
            "topStat" : 1.15,
            "value" : "WHIP: Walks + Hits Per Inning Pitched",
            "positions" : ["Starter"]
        },
        {
            "code" : "strikeoutsPerNineInnings",
            "initial" : "SPNI",
            "weightPercent" : 25,
            "topStat" : 11.25,
            "value" : "K/9: Strikeouts Per Nine Innings",
            "positions" : ["Starter"]
        },
        {
            "code" : "hitsAllowedPerNineInnings",
            "initial" : "HAPNI",
            "weightPercent" : 20,
            "topStat" : 7,
            "value" : "Hits/9: Hits Allowed Per Nine Innings",
            "positions" : ["Starter"]
        }
    ]
},
{
    "sportname" : "Track & Field",
    "positions" : [
            {"code" : "60mSprint", "value" : "60m Sprint"},
            {"code" : "100mSprint", "value" : "100m Sprint"},
            {"code" : "200mSprint", "value" : "200m Sprint"},
            {"code" : "400mSprint", "value" : "400m Sprint"},
            {"code" : "800mSprint", "value" : "800m Sprint"},
            {"code" : "1500mSprint", "value" : "1500m Sprint"},
            {"code" : "3000mSprint", "value" : "3000m Sprint"},
            {"code" : "5000mSprint", "value" : "5000m Sprint"},
            {"code" : "10000mSprint", "value" : "10000m Sprint"},
            {"code" : "60Hurdles", "value" : "60 Hurdles"},
            {"code" : "110Hurdles", "value" : "110 Hurdles"},
            {"code" : "400Hurdles", "value" : "400 Hurdles"},
            {"code" : "longJump", "value" : "Long Jump"},
            {"code" : "tripleJump", "value" : "Triple Jump"},
            {"code" : "highJump", "value" : "High Jump"},
            {"code" : "shotPut", "value" : "Shot Put"},
            {"code" : "discusThrow", "value" : "Discus Throw"},
            {"code" : "javelinThrow", "value" : "Javelin Throw"},
            {"code" : "hammerThrow", "value" : "Hammer Throw"}
        ],
    "metrics" : [
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 6.92,
            "value" : "Sprint Time",
            "positions" : ["60m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 9.94,
            "value" : "Sprint Time",
            "positions" : ["100m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 19.75,
            "value" : "Sprint Time",
            "positions" : ["200m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 99.94,
            "value" : "Sprint Time",
            "positions" : ["400m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 104.46,
            "value" : "Sprint Time",
            "positions" : ["800m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 213.96,
            "value" : "Sprint Time",
            "positions" : ["1500m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 487.97,
            "value" : "Sprint Time",
            "positions" : ["3000m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 793.29,
            "value" : "Sprint Time",
            "positions" : ["5000m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 1671.26,
            "value" : "Sprint Time",
            "positions" : ["10000m Sprint"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 6.92,
            "value" : "Sprint Time",
            "positions" : ["60 Hurdles"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 13.18,
            "value" : "Sprint Time",
            "positions" : ["110 Hurdles"]
        },
        {
            "code" : "sprintTime",
            "initial" : "ST",
            "weightPercent" : 100,
            "topStat" : 47.95,
            "value" : "Sprint Time",
            "positions" : ["400 Hurdles"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 8.15,
            "value" : "Distance Covered",
            "positions" : ["Long Jump"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 16.76,
            "value" : "Distance Covered",
            "positions" : ["Triple Jump"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 2.29,
            "value" : "Distance Covered",
            "positions" : ["High Jump"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 8.15,
            "value" : "Distance Covered",
            "positions" : ["Shot Put"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 67.29,
            "value" : "Distance Covered",
            "positions" : ["Discus Throw"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 82.32,
            "value" : "Distance Covered",
            "positions" : ["Javelin Throw"]
        },
        {
            "code" : "distanceCovered",
            "initial" : "DC",
            "weightPercent" : 100,
            "topStat" : 77.16,
            "value" : "Distance Covered",
            "positions" : ["Hammer Throw"]
        }
    ]
},
{
    "sportname" : "Gymnastics",
    "positions" : [
            {"code" : "women's", "value" : "Women's"},
            {"code" : "men's", "value" : "Men's"}
        ],
    "metrics" : [
        {
            "code" : "vault",
            "initial" : "VAULT",
            "weightPercent" : 20,
            "topStat" : 10,
            "value" : "Vault",
            "positions" : ["Women's"]
        },
        {
            "code" : "bars",
            "initial" : "BARS",
            "weightPercent" : 20,
            "topStat" : 10,
            "value" : "Bars",
            "positions" : ["Women's"]
        },
        {
            "code" : "beam",
            "initial" : "BEAM",
            "weightPercent" : 20,
            "topStat" : 10,
            "value" : "Beam",
            "positions" : ["Women's"]
        },
        {
            "code" : "floor",
            "initial" : "FLOOR",
            "weightPercent" : 20,
            "topStat" : 10,
            "value" : "Floor",
            "positions" : ["Women's"]
        },
        {
            "code" : "allAround",
            "initial" : "AA",
            "weightPercent" : 20,
            "topStat" : 40,
            "value" : "All-Around",
            "positions" : ["Women's"]
        },
        {
            "code" : "floor",
            "initial" : "FLOOR",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "Floor",
            "positions" : ["Men's"]
        },
        {
            "code" : "pommelhorse",
            "initial" : "PH",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "Pommelhorse",
            "positions" : ["Men's"]
        },
        {
            "code" : "rings",
            "initial" : "RINGS",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "Rings",
            "positions" : ["Men's"]
        },
        {
            "code" : "vault",
            "initial" : "VAULT",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "Vault",
            "positions" : ["Men's"]
        },
        {
            "code" : "parallelBars",
            "initial" : "PB",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "Parallel Bars",
            "positions" : ["Men's"]
        },
        {
            "code" : "highBar",
            "initial" : "HB",
            "weightPercent" : 15,
            "topStat" : 15,
            "value" : "High Bar",
            "positions" : ["Men's"]
        },
        {
            "code" : "allAround",
            "initial" : "AA",
            "weightPercent" : 10,
            "topStat" : 90,
            "value" : "All-Around",
            "positions" : ["Men's"]
        }
    ]
},
{
    "sportname" : "Swimming",
    "positions" : [
            {"code" : "women's", "value" : "Women's"},
            {"code" : "men's", "value" : "Men's"}
        ],
    "metrics" : [
        {
            "code" : "50Free",
            "initial" : "50F",
            "weightPercent" : 100,
            "topStat" : 22.67,
            "value" : "50 Free",
            "positions" : ["Women's"]
        },
        {
            "code" : "100Free",
            "initial" : "100F",
            "weightPercent" : 100,
            "topStat" : 49.36,
            "value" : "100 Free",
            "positions" : ["Women's"]
        },
        {
            "code" : "200Free",
            "initial" : "200F",
            "weightPercent" : 100,
            "topStat" : 107.12,
            "value" : "200 Free",
            "positions" : ["Women's"]
        },
        {
            "code" : "500Free",
            "initial" : "500F",
            "weightPercent" : 100,
            "topStat" : 287.2,
            "value" : "500 Free",
            "positions" : ["Women's"]
        },
        {
            "code" : "1650Free",
            "initial" : "1650F",
            "weightPercent" : 100,
            "topStat" : 16.5,
            "value" : "1650 Free",
            "positions" : ["Women's"]
        },
        {
            "code" : "100Fly",
            "initial" : "100Fly",
            "weightPercent" : 100,
            "topStat" : 53.63,
            "value" : "100 Fly",
            "positions" : ["Women's"]
        },
        {
            "code" : "200Fly",
            "initial" : "200Fly",
            "weightPercent" : 100,
            "topStat" : 119.23,
            "value" : "200 Fly",
            "positions" : ["Women's"]
        },
        {
            "code" : "100Back",
            "initial" : "100BACK",
            "weightPercent" : 100,
            "topStat" : 53.82,
            "value" : "100 Back",
            "positions" : ["Women's"]
        },
        {
            "code" : "200Back",
            "initial" : "200BACK",
            "weightPercent" : 100,
            "topStat" : 117.07,
            "value" : "200 Back",
            "positions" : ["Women's"]
        },
        {
            "code" : "100Breast",
            "initial" : "100BR",
            "weightPercent" : 100,
            "topStat" : 61.46,
            "value" : "100 Breast",
            "positions" : ["Women's"]
        },
        {
            "code" : "200Breast",
            "initial" : "200BR",
            "weightPercent" : 100,
            "topStat" : 133.86,
            "value" : "200 Breast",
            "positions" : ["Women's"]
        },
        {
            "code" : "200IndividualMedley",
            "initial" : "200IM",
            "weightPercent" : 100,
            "topStat" : 119.56,
            "value" : "200 Individual Medley",
            "positions" : ["Women's"]
        },
        {
            "code" : "400IndividualMedley",
            "initial" : "400IM",
            "weightPercent" : 100,
            "topStat" : 257.3,
            "value" : "400 Individual Medley",
            "positions" : ["Women's"]
        },
        {
            "code" : "50Free",
            "initial" : "50F",
            "weightPercent" : 100,
            "topStat" : 19.79,
            "value" : "50 Free",
            "positions" : ["Men's"]
        },
        {
            "code" : "100Free",
            "initial" : "100F",
            "weightPercent" : 100,
            "topStat" : 43.46,
            "value" : "100 Free",
            "positions" : ["Men's"]
        },
        {
            "code" : "200Free",
            "initial" : "200F",
            "weightPercent" : 100,
            "topStat" : 95.79,
            "value" : "200 Free",
            "positions" : ["Men's"]
        },
        {
            "code" : "500Free",
            "initial" : "500F",
            "weightPercent" : 100,
            "topStat" : 261.99,
            "value" : "500 Free",
            "positions" : ["Men's"]
        },
        {
            "code" : "1650Free",
            "initial" : "1650F",
            "weightPercent" : 100,
            "topStat" : 15.15,
            "value" : "1650 Free",
            "positions" : ["Men's"]
        },
        {
            "code" : "100Fly",
            "initial" : "100Fly",
            "weightPercent" : 100,
            "topStat" : 47.08,
            "value" : "100 Fly",
            "positions" : ["Men's"]
        },
        {
            "code" : "200Fly",
            "initial" : "200Fly",
            "weightPercent" : 100,
            "topStat" : 105.89,
            "value" : "200 Fly",
            "positions" : ["Men's"]
        },
        {
            "code" : "100Back",
            "initial" : "100BACK",
            "weightPercent" : 100,
            "topStat" : 47.47,
            "value" : "100 Back",
            "positions" : ["Men's"]
        },
        {
            "code" : "200Back",
            "initial" : "200BACK",
            "weightPercent" : 100,
            "topStat" : 104.6,
            "value" : "200 Back",
            "positions" : ["Men's"]
        },
        {
            "code" : "100Breast",
            "initial" : "100BR",
            "weightPercent" : 100,
            "topStat" : 53.63,
            "value" : "100 Breast",
            "positions" : ["Men's"]
        },
        {
            "code" : "200Breast",
            "initial" : "200BR",
            "weightPercent" : 100,
            "topStat" : 117.44,
            "value" : "200 Breast",
            "positions" : ["Men's"]
        },
        {
            "code" : "200IndividualMedley",
            "initial" : "200IM",
            "weightPercent" : 100,
            "topStat" : 106.16,
            "value" : "200 Individual Medley",
            "positions" : ["Men's"]
        },
        {
            "code" : "400IndividualMedley",
            "initial" : "400IM",
            "weightPercent" : 100,
            "topStat" : 230.68,
            "value" : "400 Individual Medley",
            "positions" : ["Men's"]
        }
    ]
}
]

export const universityData = [
    {
        name : "Princeton University",
        rank : 1
    },
    {
        name : "University of Buffalo - SUNY",
        rank : 76
    },
    {
        name : "Aurora University",
        rank : 303
    },
    {
        name : "DePaul University",
        rank : 151
    },
    {
        name : "Wilkes University",
        rank : 269
    },
    {
        name : "Wilmington University",
        rank : 415
    }
]