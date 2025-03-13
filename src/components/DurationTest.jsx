import { useEffect, useState } from 'react';

function DurationTest() {
  const [durations, setDurations] = useState([]);

  // Test cases with different date ranges
  const testCases = [
    {
      name: "Current job (9 months)",
      startDate: new Date(2023, 8, 1), // September 2023
      endDate: null // Present
    },
    {
      name: "3-month internship",
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 8, 1) // September 2023
    },
    {
      name: "1-year project",
      startDate: new Date(2023, 0, 1), // January 2023
      endDate: new Date(2024, 0, 1) // January 2024
    },
    {
      name: "2-year 3-month project",
      startDate: new Date(2021, 9, 1), // October 2021
      endDate: new Date(2024, 0, 1) // January 2024
    }
  ];

  // Function to calculate duration between two dates
  const calculateDuration = (startDate, endDate) => {
    const end = endDate || new Date(); // Use current date if endDate is null (present)
    
    const monthsDiff = (end.getFullYear() - startDate.getFullYear()) * 12 + 
                       (end.getMonth() - startDate.getMonth());
    
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;
    
    let duration = '';
    
    if (years > 0) {
      duration += `${years} year${years > 1 ? 's' : ''}`;
      if (months > 0) duration += ` ${months} month${months > 1 ? 's' : ''}`;
    } else {
      duration += `${months} month${months > 1 ? 's' : ''}`;
    }
    
    return duration;
  };

  // Function to format date
  const formatDate = (date) => {
    if (!date) return 'Present';
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  useEffect(() => {
    const results = testCases.map(test => ({
      ...test,
      formattedStart: formatDate(test.startDate),
      formattedEnd: formatDate(test.endDate),
      duration: calculateDuration(test.startDate, test.endDate)
    }));
    
    setDurations(results);
    console.log('Duration test results:', results);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Duration Calculation Test</h2>
      <p className="mb-4 text-gray-600">This component tests the dynamic duration calculation functionality.</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Test Case</th>
              <th className="py-2 px-4 text-left">Start Date</th>
              <th className="py-2 px-4 text-left">End Date</th>
              <th className="py-2 px-4 text-left">Calculated Duration</th>
            </tr>
          </thead>
          <tbody>
            {durations.map((test, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4">{test.name}</td>
                <td className="py-2 px-4">{test.formattedStart}</td>
                <td className="py-2 px-4">{test.formattedEnd}</td>
                <td className="py-2 px-4 font-medium">{test.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-2">Current Date:</h3>
        <p>{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      </div>
    </div>
  );
}

export default DurationTest; 