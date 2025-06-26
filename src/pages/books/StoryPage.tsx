// src/pages/books/StoryPage.tsx

import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const dummyBookDetails = {
  title: 'The Dream',
  tagline: 'Enter a surreal world where reality bends.',
  image: '/images/book-thumbnails/the-dream.png',
  chapters: Array.from({ length: 10 }, (_, i) => ({
    number: i + 1,
    title: ['The Awakening', 'Into the Fog', 'The Unseen Door', 'Reflections', 'Revelation'][i % 5],
    image: `/images/chapters/chapter${(i % 5) + 1}.jpg`,
  })),
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url('/story-world-bg.jpg') center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const LogoContainer = styled(RouterLink)<{ isScrolled: boolean }>`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 999;
  width: ${({ isScrolled }) => (isScrolled ? '50px' : '80px')};
  height: ${({ isScrolled }) => (isScrolled ? '50px' : '80px')};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 18px rgba(99, 32, 32, 0.67);
  padding: 0.3rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(135, 15, 15, 0.61);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: ${({ isScrolled }) => (isScrolled ? '40px' : '60px')};
    height: ${({ isScrolled }) => (isScrolled ? '40px' : '60px')};
  }

  @media (max-width: 480px) {
    top: 1rem;
    left: 0.7rem;
    width: ${({ isScrolled }) => (isScrolled ? '36px' : '52px')};
    height: ${({ isScrolled }) => (isScrolled ? '36px' : '52px')};
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  color: #fff;
  font-weight: 700;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const BackLink = styled(RouterLink)`
  display: inline-block;
  margin: 1rem 0 2rem;
  color: #ffd700;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const ChapterCard = styled(RouterLink)`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(138, 129, 10, 0.67);
  }

  h3 {
    color: #ffd700;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #ccc;
    font-size: 1rem;
  }
`;

export default function StoryPage() {
  const { slug } = useParams();
  const [book] = useState(dummyBookDetails);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <LogoContainer to="/" isScrolled={isScrolled}>
        <img src={book.image} alt={book.title} />
      </LogoContainer>

      <BackLink to="/books">← Back to Stories</BackLink>

      <PageWrapper>
        <Overlay>
          <Title>{book.title}</Title>
          <Subtitle>{book.tagline}</Subtitle>

          <GridContainer>
            {book.chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ChapterCard to={`/books/${slug}/chapter/${chapter.number}`}>
                  <img
                    src={chapter.image}
                    alt={`Chapter ${chapter.number} cover`}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                    }}
                  />
                  <h3>Chapter {chapter.number}</h3>
                  <p>{chapter.title}</p>
                </ChapterCard>
              </motion.div>
            ))}
          </GridContainer>
        </Overlay>
      </PageWrapper>
    </>
  );
}
