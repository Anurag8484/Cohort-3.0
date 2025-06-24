import React, { useState, useEffect} from 'react';


const App = () =>{
  return(
    <div>
      <ErrorBoundary>
      <Card1 />
      </ErrorBoundary>
      <Card2 />
    </div>
  );
};

function Card1(){
  // throw new Error("ss")f
  return(
    <div style={{backgroundColor:"grey", margin:20}}>
      "hi"
    </div>
  )
}

function Card2(){
  return(
    <div style={{backgroundColor:"grey", margin:20}}>
      "hlo"
    </div>
  )
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: "grey", margin: 20 }}>
          Something went wrong.
        </div>
      );  
    }

    return this.props.children;
  }
}

export default App;