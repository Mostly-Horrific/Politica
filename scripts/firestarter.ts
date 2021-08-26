import { ICandidate, IPolitcalCompass } from "./election";
import { IIssue } from "./models/Issues";

export function fireStarter(gamePayLoad: IGamePayload){
	let player = createCandidate(gamePayLoad.name, gamePayLoad.politicalParty);
	
	// Create opponents
	let opponents: ICandidate[]

	opponents.push(createCandidate('Bob Smith', "Democrat"))
	opponents.push(createCandidate('Joe Plumber', "Republican"))
	opponents.push(createCandidate('Dan Singh', "Idependent"))
	
	// Create Generic Issues 
	let issues: IIssue[];

	issues.push({
		appeasmentBias: null,
		name: 'fix pothole on main street',
		priority: 100, 
		popularity: 100,
		expiryCondition: {
			property: 'mainRoadCondition',
			comparittor: 'over',
			value: 90
		}
	})

	issues.push({
		appeasmentBias: null,
		name: 'clean toilets',
		priority: 100, 
		popularity: 100,
		expiryCondition: {
			property: 'toiletCleansiness',
			comparittor: 'over',
			value: 50
		}
	})
	
	// Create Generic mayoral platform (Fictional USA town as the generic Model)
	// TODO: other campaigns will be setup
	
	// Then navigate to campaign setup screen
}

function createCandidate (name: string, politicalParty: string): ICandidate{
	return {
		name: name,
		politicalParty: politicalParty,
		dateOfBirth: new Date(1950, 1, 1), //TODO Support entering this
		bio: 'Someone starting out', // TODO: We need to support entering of this
		politicalCompassValues: generateGenericCompassValues(politicalParty), //these are just to get the game playable for now
		pastResults: [],
		politicalPositions:[]
	}
}

function generateGenericCompassValues(politicalParty: string): IPolitcalCompass{
	switch(politicalParty.toLowerCase()){
	// these are based on 2020 presidential candidates (Maybe not the greatest indicator)
		case 'democrat':
			return {
				authoritarian: 65,
				right: 75,
				left: -75,
				libetarian: -65
			}
		case 'republican':
			return {
				authoritarian: 99,
				right: 95,
				left: -95,
				libetarian: -99
			}
		case 'independent':
			return {
				authoritarian: 0,
				right: 0,
				left: 0,
				libetarian: 0
			}
		}
	}

export interface IGamePayload{
	name: string;
	politicalParty: string;
	runningLevel: string;
	year: number;
}
