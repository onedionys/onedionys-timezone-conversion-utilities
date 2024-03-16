// test/test.ts
import { expect } from 'chai';
import { convertToTimeZone } from '../src/timezoneConverter';

describe('Timezone Conversion Utilities Tests', () => {
    it('should convert date to target timezone', () => {
        const date = new Date('2024-03-07T12:00:00Z'); // Waktu UTC
        const targetTimeZone = 'America/New_York';
        const convertedDate = convertToTimeZone(date, targetTimeZone);
        // Lakukan pengujian di sini, contoh:
        expect(convertedDate.getTime()).to.equal(date.getTime());
    });
});
