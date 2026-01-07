import './index.css';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <main className={'home-main flex grow'} style={{ flexFlow: 'column' }}>
        <div className="profile-img-container">
          <img className={'profile-img'} src={'/profile.png'} alt="profile" />
          <section className={'mt-6 '}>
            <h3>A Bit About Me:</h3>
            <p>
              I am a software developer with 5 years of experience specializing in frontend development using React. I’m also well-versed in Python development, with expertise in the Django ORM. Knowledge of the full-stack enables me to build seamless, full-stack applications. Currently, I work at U.S. News and World Report, where I develop and maintain multiple applications that provide feature content to site visitors. Previously, I contributed to innovative software projects at CPaT Global, where I honed my skills in modern development frameworks to provide a scalable learning managment software application.
            </p>
            <p>
              Before diving into the world of software development, I spent several years in accounting and finance as an assistant controller. This experience shaped my analytical mindset, attention to detail, and ability to manage complex processes — skills that continue to enhance my approach to development.
            </p>
            <p>
              On top of my technical background, I bring a unique perspective as an NCAA Division I softball umpire, where adaptability and clear, quick decision-making are key. These qualities help me tackle challenges both on the field and in the world of development.
            </p>
            <p>
              Whether you are a recruiter looking for a skilled developer or a client with a vision to bring to life, I would love to collaborate. Feel free to explore my work and reach out — I am excited to connect!
            </p>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;