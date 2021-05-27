import { fetchIpsum } from '../utils/hipsterIpsumAPI.js';

test("HipsterIpsumAPI fetch", async ()=>{

    const fetchResult = await fetchIpsum(3);
    expect(fetchResult.length).toBe(3);

});