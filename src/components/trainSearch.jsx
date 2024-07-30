import React, { useState } from 'react';
import axios from 'axios';

const TrainSearch = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/trains/search', {
        params: { source, destination }
      });
      setTrains(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h1>Search Trains</h1>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {trains.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Train Number</th>
                <th>Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Available Seats</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train) => (
                <tr key={train._id}>
                  <td>{train.trainNumber}</td>
                  <td>{train.name}</td>
                  <td>{train.source}</td>
                  <td>{train.destination}</td>
                  <td>{train.availableSeats}</td>
                  <td>{train.departureTime}</td>
                  <td>{train.arrivalTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TrainSearch;