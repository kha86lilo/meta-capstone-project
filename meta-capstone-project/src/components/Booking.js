import BookingForm from "./BookingForm";

const Booking = ({submitForm, availableTimes ,dispatch}) =>{
    return (
        <BookingForm submitForm={submitForm} availableTimes={availableTimes} 
        dispatch={dispatch}></BookingForm>
    )
}
export default Booking;