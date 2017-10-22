import calculateSwing from '../scripts/election';
import {expect} from 'chai';

describe('electionSwing', ()=> {
    it('should return 100', ()=> {
        const result = calculateSwing();
        expect(result).to.equal(100);
    });
});