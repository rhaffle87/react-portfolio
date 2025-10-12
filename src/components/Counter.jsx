import { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Counter({
  fontSize = 24,
  textColor = 'white',
  fontWeight = 'bold',
  containerStyle,
  buttonStyle
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem('portfolioLiked');
    if (storedLiked === 'true') {
      setLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      localStorage.setItem('portfolioLiked', 'true');
    }
  };

  const defaultContainerStyle = {
    display: 'inline-block'
  };

  const defaultButtonStyle = {
    fontSize,
    color: textColor,
    fontWeight,
    border: '2px solid #EDC06E',
    borderRadius: '50px',
    padding: '10px 20px',
    background: liked ? '#EDC06E' : 'transparent',
    cursor: liked ? 'default' : 'pointer',
    boxShadow: liked ? '0 0 10px #E09B1B' : '0 0 10px #E09B1B',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'box-shadow 0.3s ease, background 0.3s ease'
  };

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      <button
        style={{ ...defaultButtonStyle, ...buttonStyle }}
        onClick={handleLike}
        disabled={liked}
        onMouseEnter={(e) => !liked && (e.target.style.boxShadow = '0 0 20px #E09B1B')}
        onMouseLeave={(e) => !liked && (e.target.style.boxShadow = '0 0 10px #E09B1B')}
      >
        {liked ? 1 : 0} <AiOutlineHeart /> Portfolio Likes
      </button>
    </div>
  );
}
