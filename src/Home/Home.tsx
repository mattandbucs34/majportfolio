import './Home.css';
import React from 'react';
import profile from '../assets/images/profile.png';


const Home = () => {
  return (
    <React.Fragment>
      <main className="home-main">
        <div className="profile-img-container">
          <img className="profile-img" src={profile} alt="profile" />
          <section>
            <h3>A Bit About Me</h3>
            <p>
              I am a Web Developer with experience with languages including HTML, CSS, JavaScript, PHP and SQL. My work experience is predominantly in Accounting and Finance. I have always been interested in developing applications and programs. I want to take my recent experience in developing applications and my work experience and tie them together into a work experience that is fun and exciting as well as challenging and beneficial.
            </p>
          </section>
        </div>
        <section className="education">
          <h3>My Educational Journey</h3>
          <p>
            Over the last 22 years, I have had a long journey regarding my education. I switched majors multiples times. In order, my majors were:
            <ol>
              <li>Math</li>
              <li>Business</li>
              <li>Accounting</li>
              <li>Math</li>
              <li>Computer Information Systems</li>
              <li>Computer Science</li>
            </ol>
            While my educational path has been unconventional and long, I am proud to have been on the journey I have been on. I believe my path has provided me with skills needed for a professional environment as well as an understanding of how a business or corporation works. I believe these skills and knowledge help me understand business needs as well as provide valuable feedback as a developer. I feel that this understanding helps me be a good developer because I can think like a consumer or a customer who would be using what I develop.
          </p>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Home;