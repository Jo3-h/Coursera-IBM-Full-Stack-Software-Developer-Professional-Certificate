function App(props) {

  // get the current datetime object
  const currDate = new Date()

  return (
      <div>
        <h1>Joe Hosking, First React Web-Application!</h1>
        <h3>Current Date: {currDate.toLocaleTimeString()}</h3>
        <h6>Checking for auto updates</h6>
      </div>
  );
}

export default App;