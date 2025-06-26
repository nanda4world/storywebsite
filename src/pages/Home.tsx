import styled from 'styled-components';
import BookCard from '../components/BookCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const books = [
  {
    title: 'The Dream',
    tagline: 'Enter a surreal world where reality bends.',
    image: '/images/book-thumbnails/the-dream.png',
    slug: 'the-dream',
    genre: 'Sci-Fi',
  },
  {
    title: 'Whispers of the Void',
    tagline: 'A tale of echoes in darkness.',
    image: '/images/book-thumbnails/forgotten-key.jpg',
    slug: 'void',
    comingSoon: true,
  },
  {
    title: 'Skybound',
    tagline: 'Touch the edge of worlds unknown.',
    image: '/images/book-thumbnails/eclipse-runner.jpg',
    slug: 'skybound',
    comingSoon: true,
  },
  {
    title: 'Celestial Code',
    tagline: 'Decipher the language of stars.',
    image: '/images/book-thumbnails/dreamy-sci-fi.jpg',
    slug: 'celestial-code',
    comingSoon: true,
  },
    {
    title: 'The Dream',
    tagline: 'Enter a surreal world where reality bends.',
    image: '/images/book-thumbnails/the-dream.png',
    slug: 'the-dream-copy1',
    genre: 'Sci-Fi',
  },
  {
    title: 'Skybound',
    tagline: 'Touch the edge of worlds unknown.',
    image: '/images/book-thumbnails/eclipse-runner.jpg',
    slug: 'skybound-copy1',
    comingSoon: true,
  },
  {
    title: 'Celestial Code',
    tagline: 'Decipher the language of stars.',
    image: '/images/book-thumbnails/dreamy-sci-fi.jpg',
    slug: 'celestial-code-copy1',
    comingSoon: true,
  },
  {
    title: 'Whispers of the Void',
    tagline: 'A tale of echoes in darkness.',
    image: '/images/book-thumbnails/forgotten-key.jpg',
    slug: 'void-copy1',
    comingSoon: true,
  },
];


const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;
const LogoContainer = styled.div<{ isShrunk: boolean }>`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 999;
  width: ${props => (props.isShrunk ? '55px' : '100px')};
  height: ${props => (props.isShrunk ? '55px' : '100px')};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 20px rgba(143, 3, 3, 0.41);
  padding: 0.4rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(143, 3, 3, 0.67); /* fiery glow */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    pointer-events: none; /* Ensures hover is on container */
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    left: 0.5rem;
    width: ${props => (props.isShrunk ? '50px' : '75px')};
    height: ${props => (props.isShrunk ? '50px' : '75px')};
  }

  @media (max-width: 480px) {
    width: ${props => (props.isShrunk ? '45px' : '65px')};
    height: ${props => (props.isShrunk ? '45px' : '65px')};
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
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
  <>
  
  <LogoContainer isShrunk={isShrunk}>
        <a href="/">
          <img src="/images/cartoon.png" alt="Site Logo" />
        </a>
      </LogoContainer>
  <PageWrapper>
        
      <Overlay>
        <TitleRow>
          
          <Title style={{ fontSize: isShrunk ? '2rem' : '3rem' }}>
            Welcome to Nanda’s Story World
          </Title>
        </TitleRow>

        <Subtitle>
          Discover immersive tales that transport you beyond imagination.
        </Subtitle>

        <GridContainer>
          {books.map((book, index) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <BookCard
                title={book.title}
                tagline={book.tagline}
                image={book.image}
                slug={book.slug}
                comingSoon={book.comingSoon}
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

