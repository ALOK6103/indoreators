// Import React
const { useState } = React;

const App = () => {
  const [phonenumber, setPhonenumber] = useState('');
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {
      const response = await fetch('https://chimpu.xyz/api/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `phonenumber=${phonenumber}`,
      });

      // Extract headers from the response
      const headers = Array.from(response.headers.entries());

      // Update state with the received headers
      setResponseData(headers);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Post Data to API</h1>
      <label>
        Phone Number:
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </label>
      <button onClick={postData}>Submit</button>

      {responseData && (
        <div>
          <h2>Received Headers:</h2>
          <ul>
            {responseData.map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
