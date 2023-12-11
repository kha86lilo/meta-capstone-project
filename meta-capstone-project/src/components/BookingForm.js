import { useState } from "react";

const BookingForm = ({ submitForm, availableTimes ,dispatch}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccassion] = useState("");

    const handleChange = (e) => {
        setDate(e);
        dispatch(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} type="date" required onChange={({ target }) => handleChange(target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Date</label>
                            <select id="book-time" value={time} onChange={({ target }) => setTime(target.value)}>
                                <option value="">Select a time</option>
                                {
                                    availableTimes.map(time => <option key={time}>{time}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" required id="book-guests" name="noOfGuests" value={guest} onChange={({ target }) => setGuest(target.value)} />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" name="occasion" required value={occasion} onChange={(e) => setOccassion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive" >
                            <input type="submit" value="Reserve" aria-label="submit button" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}
export default BookingForm;