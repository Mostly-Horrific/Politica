import { IPolitcalCompass } from "../election";

export interface IIssue{
    name: string
    expiryCondition: IRule //TODO: Only support one expiry rule for now
    priority: number
    popularity: number
    appeasmentBias: IPolitcalCompass | null
}


export interface IRule{
    property: string
    value: number
    comparittor: Comparitor
}

export type Comparitor = 'over'|'under'|'exact'
