export const sportData = [
    {
        sportname : "Soccer",
        positions : [
                {code : "player", value : "Player"},
                {code : "goalie", value : "Goalie"}
            ],
        metrics : [
            {
                code : "goalsPerGame",
                initial : "GPG",
                weightPercent : 40,
                topStat : 0.9,
                value : "Goals Per Game",
                positions : ["Player"]
            },
            {
                code : "assistsPerGame",
                initial : "APG",
                weightPercent : 30,
                topStat : 0.6,
                value : "Assists Per Game",
                positions : ["Player"]
            },
            {
                code : "shotsOnGoalPerGame",
                initial : "SPG",
                weightPercent : 30,
                topStat : 2.10,
                value : "Shots On Goal Per Game",
                positions : ["Player"]
            },
            {
                code : "savePercentage",
                initial : "SP%",
                weightPercent : 100,
                topStat : 0.87,
                value : "Save Percentage",
                positions : ["Goalie"]
            }
        ]
    },
    {
        sportname : "Basketball",
        positions : [
                {code : "player", value : "Player"},
            ],
        metrics : [
            {
                code : "pointsPerGame",
                initial : "PPG",
                value : "Points Per Game",
                positions : ["Player"]
            },
            {
                code : "reboundsPerGame",
                initial : "RPG",
                value : "Rebounds Per Game",
                positions : ["Player"]
            },
            {
                code : "assitsPerGame",
                initial : "APG",
                value : "Assists Per Game",
                positions : ["Player"]
            },
            {
                code : "stealsBlocksPerGame",
                initial : "SBG",
                value : "Steals + Blocks Per Game",
                positions : ["Player"]
            },
            {
                code : "fieldGoalPercentage",
                initial : "PGP%",
                value : "Field Goal Percentage",
                positions : ["Player"]
            },
            {
                code : "freeThrowPercentage",
                initial : "FT%",
                value : "Free Throw Percentage",
                positions : ["Player"]
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