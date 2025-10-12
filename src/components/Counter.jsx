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
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem('portfolioLiked');
    if (storedLiked === 'true') {
      setLiked(true);
    }

    const fetchLikes = async () => {
      try {
        const res = await fetch('/api/getLikes');
        const data = await res.json();
        setLikes(data.totalLikes || 0);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, []);

  // Polling for real-time updates if not liked
  useEffect(() => {
    if (liked) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/getLikes');
        const data = await res.json();
        setLikes(data.totalLikes || 0);
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, [liked]);

  const handleLike = async () => {
    if (liked) return;

    try {
      const res = await fetch('/api/like', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        setLiked(true);
        setLikes(data.totalLikes);
        localStorage.setItem('portfolioLiked', 'true');
      }
    } catch (err) {
      console.error(err);
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

  const buttonText = loading ? 'Loading...' : error ? 'Error' : `${likes} Like Portfolio`;

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      <button
        style={{ ...defaultButtonStyle, ...buttonStyle }}
        onClick={handleLike}
        disabled={liked || loading || error}
        onMouseEnter={(e) => !liked && !loading && !error && (e.target.style.boxShadow = '0 0 20px #E09B1B')}
        onMouseLeave={(e) => !liked && !loading && !error && (e.target.style.boxShadow = '0 0 10px #E09B1B')}
      >
        {loading || error ? buttonText : (
          <>
            {likes} <AiOutlineHeart /> {liked ? 'Liked!' : 'Like Portfolio'}
          </>
        )}
      </button>
    </div>
  );
}
