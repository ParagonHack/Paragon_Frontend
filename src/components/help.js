import { useEffect } from 'react';

const Help = () => {
  const helpContent = {
    account: "<p>Here's how to start a new chat::</p><ul><li>fdsfsdf</li><li>dsfsdf</li><li>dfsjlkdfnsdjfnsfjkdsnfjsfns </li></ul>",
    payments: "<p>Here's how to change password:</p><ul><li>Go to settings</li><li>Enter the information required</li><li>Press save and wait for the confirmation</li></ul>",
    contact: "<p>Give us a call or email us, if you need help</p><ul><li>Email: Paragon@gmail.com</li><li>Phone number: +0726639557</li></ul>"
  };

  useEffect(() => {
    const topicDropdown = document.getElementById("topic");
    const contentDiv = document.getElementById("content");

    const handleChange = () => {
      const topic = topicDropdown.value;
      contentDiv.innerHTML = helpContent[topic] || "<p>Please select a topic to see help content.</p>";
    };

    if (topicDropdown && contentDiv) {
      topicDropdown.addEventListener("change", handleChange);
    }

    return () => {
      if (topicDropdown && contentDiv) {
        topicDropdown.removeEventListener("change", handleChange);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container">
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
            }
            
            .container {
              max-width: 800px;
              margin-left: 20%;
              margin-right: 20%;
              padding: 20px;
              background-color: #222;
              color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
              text-align: center;
              margin-bottom: 20px;
              margin-left: 20%;
              margin-right: 20%;
              margin-top: 5%;
            }
            
            label {
              display: block;
              margin-bottom: 10px;
              margin-left: 20%;
              margin-right: 20%;
              color: #fff; /* Set label text color to white */
            }
            
            select {
              display: block;
              width: 50%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
              background-color: #fff;
              font-size: 16px;
              margin-bottom: 20px;
              margin-left: 20%;
              margin-right: 20%;
              color: #000; /* Set dropdown text color to black */
            }
            
            #content {
              padding: 20px;
              background-color: #333;
              border-radius: 4px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              min-height: 100px;
              margin-left: 20%;
              margin-right: 20%;
            }
          `}
        </style>
        <h1>Help Page</h1>
        <label htmlFor="topic">Select a topic:</label>
        <select id="topic">
          <option value="">-- Select a topic --</option>
          <option value="account">Create new chat</option>
          <option value="payments">Change password</option>
          <option value="contact">Contact support</option>
        </select>

        <div id="content">
          <p>Please select a topic to see help content.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
