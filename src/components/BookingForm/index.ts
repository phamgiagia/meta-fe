import BookingForm from "./BookingForm"; // Default export
import { BookingFormValues } from "./BookingFormValues"; // Named export
import { fetchAPI, submitAPI } from './api';

export default BookingForm; // Re-export as default
export type { BookingFormValues }; // Re-export named type
export { fetchAPI, submitAPI}
