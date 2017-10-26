class Candidate{
    public Name:string;
    public PoliticalParty:string;
    public DateOfBirth:Date;
    public Bio:string;
    public PoliticalCompassValues:PolitcalCompass
    public PastResults: Array<PolitcalResult>;
    public PoliticalPositions:Array<PoliticalPositions>;
}

class PolitcalCompass{
    public Authoritarian:number;
    public Libetarian:number;
    public Left:number;
    public right:number;
}

class PoliticalPositions{
    public Issue: string
    public Sector: string
    public LeftValue:number;
    public RightValue:number;
}

class PolitcalResult{
    public Year:number;
    public Month:number;
    public ByElection:boolean;
    public SwingPercentage: number;
    public Votes:number;
    public PoliticalParty:string;
    public WasIncumbant:boolean;
    public WasVictory:boolean;
}


export function calculateSwing(){
    return 300;
}

export default calculateSwing;