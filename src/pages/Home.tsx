import styled from 'styled-components';
import BookCard from '../components/BookCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ Import axios

interface Story {
  title: string;
  tagline: string;
  image: string;
  slug: string;
  genre: string;
  comingSoon?: boolean;
}

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isshrunk',
})<{ $isshrunk: boolean }>`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 999;
  width: ${props => (props.$isshrunk ? '55px' : '100px')};
  height: ${props => (props.$isshrunk ? '55px' : '100px')};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 20px rgba(143, 3, 3, 0.41);
  padding: 0.4rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(143, 3, 3, 0.67);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    left: 0.5rem;
    width: ${props => (props.$isshrunk ? '50px' : '75px')};
    height: ${props => (props.$isshrunk ? '50px' : '75px')};
  }

  @media (max-width: 480px) {
    width: ${props => (props.$isshrunk ? '45px' : '65px')};
    height: ${props => (props.$isshrunk ? '45px' : '65px')};
    top: 0.5rem;
    left: 0.5rem;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background-image: url('/story-world-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.72);
  width: 100%;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
  font-weight: 700;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #cccccc;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.25rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

export default function Home() {
  const [$isshrunk, setIsShrunk] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    axios
  .get<Story[]>('https://storywebsite-1.onrender.com/api/stories')

      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch stories:', err);
      });
  }, []);

  return (
    <>
      <LogoContainer $isshrunk={$isshrunk}>
        <a href="/">
          <img src="/images/cartoon.png" alt="Site Logo" />
        </a>
      </LogoContainer>

      <PageWrapper>
        <Overlay>
          <TitleRow>
            <Title style={{ fontSize: $isshrunk ? '2rem' : '3rem' }}>
              Welcome to Nanda’s Story World
            </Title>
          </TitleRow>

          <Subtitle>
            Discover immersive tales that transport you beyond imagination.
          </Subtitle>

          <GridContainer>
            {stories.map((story, index) => (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <BookCard
                  title={story.title}
                  tagline={story.tagline}
                  image={story.image}
                  slug={story.slug}
                  comingSoon={story.comingSoon}
                  showIcon={true}
                />
              </motion.div>
            ))}
          </GridContainer>
        </Overlay>
      </PageWrapper>
    </>
  );
}
