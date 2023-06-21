import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    let calculatedAge = yearsDiff;
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Age Calculator</h2>
      <div className="form-group">
        <label htmlFor="birthDate">Enter your birth date:</label>
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p className="mt-3">Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;