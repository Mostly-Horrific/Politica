// TODO: Once we have a git client running, rename to candiate and move to models

export interface ICandidate{
    name:string;
    politicalParty:string;
    dateOfBirth: Date;
    bio:string;
    politicalCompassValues: IPolitcalCompass
    pastResults: Array<IPolitcalResult> | [];
    politicalPositions:Array<IPoliticalPositions>| [];
}

export interface IPolitcalCompass{
    authoritarian:number;
    libetarian:number;
    left:number;
    right:number;
}

export interface IPoliticalPositions{
    issue: string
    sector: string
    leftValue:number;
    rightValue:number;
}

export interface IPolitcalResult{
    year:number;
    month:number;
    byElection:boolean;
    swingPercentage: number;
    votes:number;
    politicalParty:string;
    wasIncumbant:boolean;
    wasVictory:boolean;
}
