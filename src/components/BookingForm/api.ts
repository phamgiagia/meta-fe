import { BookingFormValues } from "./BookingFormValues";

// Type for the random number generator function
type RandomGenerator = () => number;

export const seededRandom = function(seed: number): RandomGenerator {
    const m: number = Math.pow(2, 35) - 31;
    const a: number = 185852;
    let s: number = seed % m;
    return function(): number {
        return (s = s * a % m) / m;
    };
}

// Type for the API response (array of time strings)
type AvailableTimes = string[];

export const fetchAPI = function(date: Date): AvailableTimes {
    const result: AvailableTimes = [];
    const random: RandomGenerator = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(`${i}:00`);
        }
        if(random() < 0.5) {
            result.push(`${i}:30`);
        }
    }
    return result;
};

export const submitAPI = function(formData: BookingFormValues): boolean {
    return true;
};


export function createDateFromString(timeString: string): Date {
    const [hours, minutes] = timeString.split(':').map(Number);
  
    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0); // optional, set to 0 if you don't want seconds
    now.setMilliseconds(0); // optional, set to 0 if you don't want milliseconds
    
    return now;
  }