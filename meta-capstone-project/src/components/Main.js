import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import { useReducer } from "react";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {

    const submitAPI = (formData) => {
        return true;
    }

    const fetchAPI = (date) => {
        let result = []; 
        for (let index =17; index <24; index++) { 
            result.push(
                Math.random()<0.5 ? (index+':00'):(index+':30')
            )
        }
        return result;
    }
    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date()) };
    }

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/booking"
                    element={<Booking submitForm={submitForm} dispatch={dispatch} availableTimes={state.availableTimes} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}
export default Main;