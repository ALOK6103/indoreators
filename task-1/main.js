const { useState, useEffect } = React;

const EditableContent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('https://practice-data.onrender.com/usersData');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on mount
  
    const handleEdit = async (id, field, value) => {
      try {
        // Update the local state immediately for a responsive UI
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          )
        );
  
        // Post the edited data to the API
        await fetch(`https://practice-data.onrender.com/usersData/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [field]: value }),
        });
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    const handleEdit1 = async (id, field, value) => {
      try {
        // Update the local state immediately for a responsive UI
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          )
        );
  
        // Post the edited data to the API
        await fetch(`https://practice-data.onrender.com/usersData/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [field]: value }),
        });
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

     const handleEdit2 = async (id, field, value) => {
      try {
        // Update the local state immediately for a responsive UI
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          )
        );
  
        // Post the edited data to the API
        await fetch(`https://practice-data.onrender.com/usersData/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [field]: value }),
        });
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  
    return (
      <div>
        <h1>Editable Content</h1>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>MONTH 1</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td
                  contentEditable
                  onBlur={(e) => handleEdit(item.id, 'title', e.target.textContent)}
                >
                  {item.title}
                </td>
                <td style={{width:"200px"}} 
                 contentEditable
                 onBlur={(e) => handleEdit1(item.id, 'space', e.target.textContent)}
                >{item.space}</td>
                <td style={{width:"200px"}} 
                 contentEditable
                 onBlur={(e) => handleEdit2(item.id, 'space1', e.target.textContent)}
                >{item.space1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EditableContent />);
