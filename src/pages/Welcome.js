import ExperienceData from '../data/ExperienceData';

const Welcome = () => {
  const sortedJobs = ExperienceData.sort((a, b) => b.id - a.id);

  return (
    <div className="welcome-page">
      <h1><strong>About</strong></h1>
      <section className="profile-section">
        <div className="profile-container">
          <img src="images/profile_pic.jpg" alt="Profile" className="profile-photo" />
          <div className="bio">
            <p>
              Hi, my name is Thien An Tran. I recently finished my undergrad at Cal Poly San Luis Obispo!
            </p>
            <br/>
            <p>
              I am actively seeking opportunities that will allow me to further enhance my skills as a software developer.
              My particular interests lie in full-stack/backend development and machine learning.
            </p>
            <br />
            <p>
              I enjoy cooking, reading,
              playing the <a href="https://www.youtube.com/watch?v=QNG9gSJKbAo" target='_blank' rel="noreferrer">flute</a>,
              and volleyball.
            </p>
          </div>
        </div>
      </section>
      <button onClick={() => window.open("docs/Thien An's Current Resume.pdf", '_blank')}>Resume</button>
      <section className="experience-section">
        <h2><strong>Experience</strong></h2>
        <div className="experience-list">
          {sortedJobs.map((job, index) => (
            <div className="job" key={index}>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="dates">{job.dates}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Welcome;