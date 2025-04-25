import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../index.css';

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/contests');
        setContests(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contests:', error);
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  // Function to calculate duration
  const calculateDuration = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const durationInMinutes = Math.floor((endTime - startTime) / (1000 * 60));
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="contests-container">
      <h1>Upcoming Contests</h1>
      <table className="contests-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Platform</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {contests.map(contest => (
            <tr key={contest.id} className="contest-row">
              <td>{contest.event}</td>
              <td>{contest.resource}</td>
              <td>{new Date(contest.start).toLocaleString()}</td>
              <td>{new Date(contest.end).toLocaleString()}</td>
              <td>{calculateDuration(contest.start, contest.end)}</td>
              <td>
                <a href={contest.href} target="_blank" rel="noopener noreferrer" className="contest-link">
                  Go to Contest
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contests;