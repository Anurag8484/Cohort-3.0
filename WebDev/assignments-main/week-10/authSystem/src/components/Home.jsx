import React from 'react'
import "../Home.css"
const Home = () => {
  return (
    <>
      <section>
        <div className="main1">
          <h2>Welcome to the AuthSystem Demo</h2>
          <br />
          <p>This demo showcases two approaches to managing authentication state in React:</p>
          <ul>
            <li>State Lifting</li>
            <li>Context API</li>
          </ul>
          <p>Use the toggle above to switch between the two approaches.</p>
        </div>
      </section>
    </>
  );
}
``
export default Home