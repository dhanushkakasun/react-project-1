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
                                    <th scope="col">from</th>
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

                        <img className="hc-image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg/1200px-%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg" alt="" />
                    </div>
                </div>
            </div>
            
            


        </div>

    );

}
export default HomeComponent;