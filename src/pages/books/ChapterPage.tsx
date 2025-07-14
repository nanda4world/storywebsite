// src/pages/books/ChapterPage.tsx

import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const TOTAL_CHAPTERS = 10;

type Chapter = {
  title: string;
  content: string;
  number: number;
  storyOrder?:number;
};

const API_BASE = import.meta.env.VITE_API_BASE || 'https://storywebsite-1.onrender.com/api/stories';

// -------------------- Styled Components --------------------

const ChapterWrapper = styled.div`
  background: url('/textures/soft-paper-bg.jpg') repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 5rem 2rem 2rem;
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  color: #1a1a1a;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) { padding: 3rem 1.5rem 1.5rem; }
  @media (max-width: 480px) { padding: 2rem 1rem 1rem; }
  @media (max-width: 320px) { padding: 1.5rem 0.6rem 0.6rem; }
`;

const ChapterContainer = styled.div`
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.92);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  width: 100%;

  @media (max-width: 768px) { padding: 2rem; }
  @media (max-width: 480px) { padding: 1.5rem; }
  @media (max-width: 320px) { padding: 1rem; }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  text-align: center;
  color: #4a2f20;
  margin-bottom: 0.5rem;
`;

const ChapterNumber = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  color: #a67c52;
  margin-bottom: 2rem;
`;

const Content = styled.div<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `clamp(8px, ${fontSize / 16}rem + 0.5vw, ${fontSize}px)`};
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;

  @media (max-width: 768px) { line-height: 1.6; }
  @media (max-width: 480px) {
    line-height: 1.5;
    letter-spacing: 0.1px;
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
    letter-spacing: 0.05px;
    word-spacing: -0.1px;
  }
`;

const DropCapParagraph = styled.p`
  &:first-letter {
    float: left;
    font-size: 4rem;
    line-height: 1;
    font-weight: bold;
    margin-right: 0.6rem;
    color: #a16b40;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 0.4rem;

  @media (max-width: 480px) { margin-bottom: 0.3rem; }
  @media (max-width: 320px) { margin-bottom: 0.2rem; }
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 3rem;
  text-align: center;
  color: #a67c52;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #4a2f20;
  }
`;

const NavButtons = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const NavButton = styled(Link)`
  background-color: #fff4e1;
  padding: 0.8rem 1.4rem;
  border: 1px solid #dabd9f;
  border-radius: 8px;
  color: #6c4424;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffeccc;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const ChapterLogo = styled(Link)<{ $isScrolled: boolean }>`
  position: fixed;
  top: 1rem;
  left: 0.5rem;
  z-index: 999;
  width: ${({ $isScrolled }) => ($isScrolled ? '50px' : '80px')};
  height: ${({ $isScrolled }) => ($isScrolled ? '50px' : '80px')};
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.6);
  padding: 0.3rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(145, 115, 32, 0.75);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: ${({ $isScrolled }) => ($isScrolled ? '38px' : '60px')};
    height: ${({ $isScrolled }) => ($isScrolled ? '38px' : '60px')};
  }

  @media (max-width: 320px) {
    width: ${({ $isScrolled }) => ($isScrolled ? '32px' : '50px')};
    height: ${({ $isScrolled }) => ($isScrolled ? '32px' : '50px')};
  }
`;

const ProgressBar = styled.div<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 5px;
  background-color: #a67c52;
  z-index: 9999;
  transition: width 0.2s;
`;

const FontControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;

  button {
    background-color: #fff4e1;
    border: 1px solid #dabd9f;
    border-radius: 6px;
    padding: 0.3rem 0.8rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: #ffeccc;
    }
  }
`;

// -------------------- Component --------------------

export default function ChapterPage() {
  const { slug, chapterNumber } = useParams();
  const chapterNum = Number(chapterNumber);
  
  const [chapter, setChapter] = useState<Chapter | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState(19);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug || !chapterNumber) return;

    setLoading(true);

    axios
      .get<Chapter>(`${API_BASE}/${slug}/chapter/${chapterNumber}`)
      .then((res) => {
        if (!res.data) throw new Error('Invalid data');
        setChapter(res.data);
        setError('');
      })
      .catch((err) => {
        console.error('Error fetching chapter:', err);
        setError('Chapter not found.');
        setChapter(null);
      })
      .then(() => {
  setLoading(false);
});


    localStorage.setItem(`progress-${slug}`, chapterNumber);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (contentRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, chapterNumber]);

  const paragraphs = chapter?.content?.trim().split('\n').filter(Boolean) || [];
  const prev = chapterNum > 1 ? chapterNum - 1 : null;
  const next = chapterNum < TOTAL_CHAPTERS ? chapterNum + 1 : null;
  const storyNum = chapter?.storyOrder;
const chapterImage = storyNum
  ? `/images/chapters/story${storyNum}/chapter${chapterNum}.jpg`
  : '';

  console.log('Image path:',chapterImage);
  if (loading) {
    return (
      <ChapterWrapper>
        <ChapterContainer>Loading...</ChapterContainer>
      </ChapterWrapper>
    );
  }

  if (error || !chapter) {
    return (
      <ChapterWrapper>
        <ChapterContainer>{error || 'Chapter not found'}</ChapterContainer>
      </ChapterWrapper>
    );
  }

  return (
    <>
      <ProgressBar progress={progress} />

      <ChapterLogo to={`/books/${slug}`} $isScrolled={isScrolled}>
  {chapter?.storyOrder ? (
    <img
      src={`/images/chapters/story${chapter.storyOrder}/chapter${chapterNum}.jpg`}
      alt={`Chapter ${chapterNum} cover`}
    />
  ) : null}
</ChapterLogo>


      <ChapterWrapper>
        <ChapterContainer ref={contentRef}>
          <ChapterNumber>Chapter {chapter.number}</ChapterNumber>
          <Title>{chapter.title}</Title>

          <FontControls>
            <button onClick={() => setFontSize((s) => Math.max(14, s - 2))}>A−</button>
            <button onClick={() => setFontSize((s) => Math.min(28, s + 2))}>A+</button>
          </FontControls>

          <Content fontSize={fontSize}>
            {paragraphs.map((para, idx) =>
              idx === 0 ? (
                <DropCapParagraph key={idx}>{para}</DropCapParagraph>
              ) : (
                <Paragraph key={idx}>{para}</Paragraph>
              )
            )}
          </Content>

          <NavButtons>
            {prev ? (
              <NavButton to={`/books/${slug}/chapter/${prev}`}>← Previous</NavButton>
            ) : (
              <div />
            )}
            {next && (
              <NavButton to={`/books/${slug}/chapter/${next}`}>Next →</NavButton>
            )}
          </NavButtons>

          <BackLink to={`/books/${slug}`}>← Back to Chapters</BackLink>
        </ChapterContainer>
      </ChapterWrapper>
    </>
  );
}
