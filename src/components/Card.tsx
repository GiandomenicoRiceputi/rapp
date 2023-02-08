import React, { useState, useEffect } from 'react';
import './card.css'

interface UserData {
    results: UserData[];
}

const Card: React.FC = () => {
    const [userData, setUserData] = useState<UserData>();
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [day, setDay] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://randomuser.me/api/?results=20');
            const data = await response.json();
            setUserData(data);
        };
        fetchData();
    }, []);

    console.log(userData)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime(
                date.toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })
            );
            setDay(
                date.toLocaleDateString('en-US', {
                    weekday: 'long',
                })
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (!userData) {
        return <p>Loading...</p>;
    }



    return (
        <>
            {userData?.results.map((user) => (

                <div className="card" key={user.login.uuid}>
                    <img src={user.picture.medium} alt="Profile Picture" />
                    <div className="card-text">
                        <p className="card-name">
                          Name:  {user.name.first} {user.name.last}
                        </p>
                        <p className="card-date">Date: {day} {' '} {time}</p>
                        <p className="card-description">Username: {user.login.username}</p>
                    </div>
                </div>
            ))}
    </>

    );
};

export default Card;
