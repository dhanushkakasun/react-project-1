import { useEffect, useState } from "react";
import './HomeComponent.css';
import { db } from "../../firebase-config";
import { collection,  getDocs } from "firebase/firestore";

function HomeComponent() {

    
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        console.log("useeffet called");
        getSchedules();
    }, []);

    const getSchedules = async () => {
        const querySnapshot = await getDocs(collection(db, "schedules"));
        setSchedules(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));

    };

    return (
        <div>
            <h1 className="hc-ht">Train Schedule</h1>
            
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Train Number</th>
                                    <th scope="col">Train Name</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Departure</th>
                                    <th scope="col">Arrival</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schedules.map(schedule => {
                                        return (
                                            <tr>
                                                <td>{schedule.number}</td>
                                                <td>{schedule.train}</td>
                                                <td>{schedule.from}</td>
                                                <td>{schedule.to}</td>
                                                <td>{schedule.departure}</td>
                                                <td>{schedule.arrival}</td>
                                            </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>


                    </div>
                    <div className="col">

                        <img className="hc-image1" src="https://static.toiimg.com/photo/87870798.cms" alt="" />
                    </div>
                </div>
            </div>
            
            


        </div>

    );

}
export default HomeComponent;