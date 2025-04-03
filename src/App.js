import "./App.css";

function App() {
  const handleClick = async () => {
    const response = await fetch("https://push-notification-backend-umber.vercel.app/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "This is notification title",
        body: "This is notification body",
      }),
    });
    const data = await response.json();
    if (data.status) {
      alert("Notification sent successfully!");
    } else {
      alert("Failed to send notification!");
    }
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
