import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string,
}

const Counter = () => {
    const [counter, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (event: number): void => {
        setCount(counter + event);
    };

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData: User = {
            name: 'Adam',
            job: "Dev",
        };
        setUser(userData);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }


    return (
        <div>
            <h1>This is Counter.</h1>
            <h2>{counter}</h2>
            <button onClick={() => handleIncrease(+1)}>Increase</button>
            <button onClick={() => handleIncrease(-1)} >Decrease</button>
            <h1>----------</h1>
        </div>
    );
};

export default Counter;