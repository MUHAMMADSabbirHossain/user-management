import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Jeff';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Biden', "Harris"];
let fees: number[] = [12, 45, 78, 12, 45];

/* const person: { name: string, job: string, age: number } = {
  name: 'Bill Clinton',
  job: 'Jobless',
  age: 85,
} */

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: any,
};

const person: Person = {
  name: 'Bill Clinton',
  // job: 'Jobless',
  age: 85,
  employed: true,
  location: { lat: 22, long: 25 },
};

const handleAddUser = (firstName: string, age: number, address: true,): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return age;
};

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
