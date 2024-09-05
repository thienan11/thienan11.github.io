import ExperienceData from '../data/ExperienceData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const sortedJobs = ExperienceData.sort((a, b) => b.id - a.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="welcome-page">
        <h1><strong>About</strong></h1>
        <section className="profile-section">
          <div className="profile-container">
            <img loading="lazy" src="images/profile_pic.jpg" alt="Profile" className="profile-photo" />
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
                In addition to programming and learning new things, I enjoy cooking, {' '}
                <Link to="/reading-list" className="text-gray-500 hover:text-black underline transition-colors duration-300">reading</Link>,
                playing the <a href="https://www.youtube.com/watch?v=QNG9gSJKbAo" target='_blank' rel="noreferrer" className="text-gray-500 hover:text-black underline transition-colors duration-300">flute</a>,
                and volleyball.
              </p>
            </div>
          </div>
        </section>
        <button onClick={() => window.open("https://drive.google.com/file/d/1VaovggDAmNLZGGPfFfIAqnSN5mqFk3CH/view?usp=sharing", '_blank')}>Resume</button>
        <section className="experience-section">
          <h2><strong>Experience</strong></h2>
          <div className="experience-list">
            {sortedJobs.map((job, index) => (
              <div className="job" key={index}>
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <p className="dates">{job.dates}</p>
                <p className="description">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Welcome;