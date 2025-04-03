import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = async () => {
    await fetch("https://push-notification-backend-umber.vercel.app/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "This is notification title",
        body: "This is notification body",
      }),
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
