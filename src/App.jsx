function App() {
  const generateRandomColor = () => {
    const characters = "abcdef1234567890";
    let color = "#";
    
    for( var i = 0; i < 6; i++ ) {
      const randomNo = Math.floor(Math.random() * characters.length);
      color += characters[randomNo];    
    }

    // Set background color for the entire body
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="container">
        <h2 className="title">BG Color Change On Click</h2>
        <p className="sub-title">Click the button and observe the background color! 😊 </p>
        <button onClick={ generateRandomColor }>Change Background Color</button>
      </div>
    </>
  )
}

export default App;
