// src/pages/books/ChapterPage.tsx

import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const TOTAL_CHAPTERS = 10;

const dummyChapter = {
  title: 'The Awakening',
  content: `Darkness. Thick, suffocating, almost alive.
From within it, Nanda stirred—his breath ragged, his chest heaving. A faint tremble coursed through his limbs. Sweat pooled on his brow, soaked into the pillow. His eyelids fluttered violently, his eyes darting beneath closed lids as though desperately searching for a way out.
Inside the dream—no, the nightmare—voices clashed. Someone was crying, pleading, screaming to be sent away. To go home. The desperation was primal, childlike, maddening.
Nanda’s body in the dream was broken—bruises darkening his skin, a deep gash slashing across his left shoulder, blood snaking down from the back of his skull. A rusty piece of metal had torn through his right calf. His hands were soaked in red. Yet he moved forward, limping, trembling, refusing to fall. From all directions, voices screeched and whispered, wrapping around him like a storm.
A towering clock loomed in the center of the chaos. Its hands spun faster and faster—time unraveling. Then came the alarm. Deafening. Violent.
BANG!
A brutal strike. The world collapsed.
Nanda shot up in bed, gasping. The silence of the room was cold and sharp. He wiped the sweat off his face, breathing heavily. The digital clock glared: 4:30 AM.
He staggered out of bed, muscles aching, and splashed cold water on his face. The radio flickered to life. Chaganti Koteswara Rao garu’s voice filled the silence:
“…thellavarujhamuna nalugu gantalaki levaalani alarm pettukuni, moodu gantalu chaduvutam anukuntadu…”
Nanda stared at himself in the mirror. His reflection didn’t feel like him. Those eyes—empty, rimmed with fatigue—held no spark. He looked like someone barely surviving.
He peeled a banana from the table, dipped a spoon in honey, and consumed them mechanically. The haunting melody of “Look at my face in the mirror” from Thammudu played from an old speaker in the background.
He changed into gym clothes, packed his shoes and protein shake, and stepped into the grey morning. The city hadn’t woken up yet. A light drizzle began to fall. Summer had no hold over the sky.
As he jogged, the dream clung to him like wet clothes. Each image replayed—those screams, the clocktower, the blood. His breath grew heavier.
And then—
WHAM!
A sudden blow to the back. Sharp. Disorienting.
He stumbled forward, the world spinning. In the blur, he saw someone. No scarf. No mask. Just a shaved head—roughly grown back, patchy. The rest of the figure was shadowed and ungraspable. Standing above him—on a jeep, maybe, or a ledge—watching.
Nanda’s body gave in.
Tires screeched. Voices echoed—elderly, panicked. A group of old men rushed toward him, shouting, lifting his broken body.
Darkness again.
He opened his eyes. Everything was faded and too bright. A ceiling fan spun above. He turned to see his friend Panda asleep in a plastic chair, chin to chest. Two older people murmured near the door, casting glances at him.
Pain pulsed behind his eyes. He winced and shifted.
One of the elders called out, and Panda woke with a start.
“Ra, you’re awake! Don’t worry… just relax,” Panda said, walking over. “You’re safe now.”
Nanda tried to speak but felt a lump in his throat. No words came.
“Chill bro,” Panda said with a weak smile. “Sleep did good to you. Everything’s okay.”
But everything wasn’t okay. And Nanda knew it.
He leaned back. Music—slow, emotional—faded in.
His memories returned in waves. The blow. The fall. His shoulder scraping against a rusted electric pole. The sting as a crushed cool drink can sliced his calf. His fingers sliding across the blood pooling at the back of his neck—seeing the red-stained hands just like in the dream.
His breath caught.
He awoke again. This time not with panic—but with dread.
He wasn’t in his room. No alarm clock. No walls he recognized. Just a hospital monitor and a saline drip.
His body felt drained, like something vital had been taken.
Panda leaned over him, cheerful as always, trying to mask concern.
Nanda tried to speak, his voice hoarse. “Panda… the dream I had… it was the same. Everything that happened… I saw it before.”
Panda raised an eyebrow but waved his hand dismissively. “You’re just shaken up. Must be your brain playing back stuff. Rest first. We’ll talk.”
Nanda hesitated. “No… I’m telling you. The bruises, the fall, the man I saw. It was all in my dream… before it happened.”
“Maybe it’s all coincidence,” he said casually. “Dreams are weird like that. You’ll laugh about this in a week.”
Nanda didn’t respond.
His eyes were fixed on nothing.
He couldn’t decide which was worse—the dream, or the fact that it was starting to come true.
When Panda stepped out to speak with the doctor, Nanda stared up at the ceiling fan, trying to hold on to the fragments slipping away. His mind felt fractured—like someone had taken scissors to his thoughts and stitched them back unevenly.
There was something else. Something about the man who hit him.
He shut his eyes, forcing his brain to rewind the memory. The blur. The swing. The fall. The face—no, not a face—but the scalp. A recently shaved head. And for a fleeting moment, he remembered… a scar. A faint, curved scar along the temple. Familiar.
His heart skipped.
“I’ve seen that before,” he whispered to himself. “Where?”
A knock at the door interrupted his thoughts. One of the elderly men peeked in and smiled gently. “You’re lucky, son. That hit—could have been worse.”
Nanda gave a weak nod. “Did anyone… see the attacker?”
The old man shook his head. “Just a shadow. He vanished. Like a ghost.”
A chill prickled his skin.
When the room fell silent again, he turned slowly toward the glass window. His reflection stared back at him. Pale. Weary. Broken.
A shiver passed through him, subtle but sharp. He couldn’t explain it—not to Panda, not even to himself—but something in his gut told him this wasn’t over. That the dream… or whatever it was… had just begun writing its script into reality.
As the hospital hallway buzzed faintly outside, Nanda lay still—his body broken, his mind restless, and the unknown closing in like dusk.
He didn’t feel safe.
He felt watched.
colder.
Darker.
Gone in a blink.
Nanda shut his eyes, panic curling in his chest.
Something was wrong.
Very wrong. `,
};

// ---------- Styled Components ----------

const ChapterWrapper = styled.div`
  background: url('/textures/soft-paper-bg.jpg') repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 5rem 2rem 2rem;
  font-family: 'Georgia', serif;
  color: #3e3e3e;
  display: flex;
  justify-content: center;
`;

const ChapterContainer = styled.div`
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.92);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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
  font-size: ${({ fontSize }) => `clamp(14px, ${fontSize / 16}rem + 0.5vw, ${fontSize}px)`};
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;

  @media (max-width: 768px) {
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    line-height: 1.5;
    letter-spacing: 0.2px;
    text-align: left; /* optional */
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
  margin-bottom: 1.2rem;
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

const ChapterLogo = styled(Link)<{ isScrolled: boolean }>`
  position: fixed;
  top: 1rem;
  left: 0.5rem;
  z-index: 999;
  width: ${({ isScrolled }) => (isScrolled ? '50px' : '80px')};
  height: ${({ isScrolled }) => (isScrolled ? '50px' : '80px')};
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

// ---------- Main Component ----------

export default function ChapterPage() {
  const { slug, chapterNumber } = useParams();
  const chapterNum = Number(chapterNumber);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState(19); // default font size

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slug && chapterNumber) {
      localStorage.setItem(`progress-${slug}`, chapterNumber);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (contentRef.current) {
       setProgress(Math.min(100, Math.max(0, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)));

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

  const prev = chapterNum > 1 ? chapterNum - 1 : null;
  const next = chapterNum < TOTAL_CHAPTERS ? chapterNum + 1 : null;
  const chapterImage = `/images/chapters/chapter${chapterNum}.jpg`;
  const paragraphs = dummyChapter.content.trim().split('\n');

  return (
    <>
      <ProgressBar progress={progress} />

      <ChapterLogo to={`/books/${slug}`} isScrolled={isScrolled}>
        <img src={chapterImage} alt={`Chapter ${chapterNum} cover`} />
      </ChapterLogo>

      <ChapterWrapper>
        <ChapterContainer ref={contentRef}>
          <ChapterNumber>Chapter {chapterNumber}</ChapterNumber>
          <Title>{dummyChapter.title}</Title>

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
