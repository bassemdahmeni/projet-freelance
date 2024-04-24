import React from 'react'
import './Tableau.css'
import icon9 from '../../assets/icon9.png'

const mockData = [
    { itemId: '#1233548', type: 'Poll', count: 55, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Poll', count: 55, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Poll', count: 55, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Poll', count: 55, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Poll', count: 55, creationDate: '25/02/2024' },
    { itemId: '#1233548', type: 'Question', count: 552, creationDate: '25/02/2024' },
   
   
    
    
    // ... add the rest of your data here
  ];
  
  const Tableau = () => {
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Type</th>
            <th>Count</th>
            <th>Creation Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td>{item.itemId}</td>
              <td>{item.type}</td>
              <td>{item.count}</td>
              <td>{item.creationDate}</td>
              <td>
                <button className="view-button">
                  <span className="eye-icon"><img src={icon9}></img></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Tableau