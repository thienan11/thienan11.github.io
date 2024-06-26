const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={containerStyle}>
      <button onClick={scrollToTop} style={buttonStyle}>
        ↑ Back to Top
      </button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center', // Horizontally center the button
  // marginTop: '20px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#777',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

export default BackToTopButton;
