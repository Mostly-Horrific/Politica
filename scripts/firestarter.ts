export function fireStarter(gamePayLoad: IGamePayload){
	let player = createCandidate(gamePayLoad.name, gamePayLoad.politicalParty);
	
	//TODO
	
	// Create opponents
	
	// Create Generic Issues 
	
	// Create Generic mayoral platform (Fictional USA town as the generic Model)
	// TODO: other campaigns will be setup
	
	// Then navigate to campaign setup screen
}

function createCandidate:Candidate(name: string, politicalParty: string){
	return{
		name: name,
		politicalParty: politicalParty,
		bio: 'Someone starting out', // TODO: We need to support entering of this
		politcalCompassValues: generateGenericCompassValues(politicalParty), //these are just to get the game playable for now
		pastResults: [].
		politicalPositions:[]
	}
}

function generateGenericCompassValues(politicalParty: string){
	switch(politicalParty.toLower
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
