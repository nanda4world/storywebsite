// src/pages/books/ChapterPage.tsx

import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const TOTAL_CHAPTERS = 10;

const dummyChapter: Record<number, { title: string; content: string }> = {
 1:{ title: 'The Awakening',
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
Very wrong. `},
2:{
title:`The man outside`,
content:`The hospital room hummed with the quiet unease of early morning. Faint sunlight bled through the blinds, striping Nanda’s blanket in gold and shadow. The steady beeping of the monitor was the only rhythm in the silence.
Nanda stared at the ceiling, unmoving. Not asleep, not awake—caught in a strange in-between. Panda sat nearby, scrolling through his phone, occasionally glancing over like a man watching a fire that hasn’t gone out yet.
A nurse entered, her footsteps soft. She adjusted his drip, noted something on the chart, and left without a word. Nanda watched her go.
“How long was I out?” he asked finally, voice dry as bone.
Panda looked up. “Almost ten hours since they brought you in. They said you were conscious for a bit, then knocked out again. Mild concussion. Nothing fractured. You’re lucky.”
“Lucky…” Nanda repeated, almost to himself. He turned his head. “Did the police come?”
Panda hesitated. “Yeah. Briefly. They asked some questions. No witnesses. No cameras. They think it might’ve been a mugging… random hit-and-run kind of thing.”
“But they didn’t take anything.”
“I know.”
Nanda closed his eyes.
That man. That figure. That stare.
“Did you… see anyone, Panda? Around the hospital? Anyone strange?”
Panda shook his head. “No one except the oldies who helped you and me. What’s this about?”
Nanda didn’t answer. He was remembering something else now. Just before he blacked out—his own voice screaming in the dream: “I don’t want to be here. Let me go. Send me home.”
But the voice hadn’t sounded like him. Not quite.
“Do you think dreams can warn us?” he asked suddenly.
Panda raised an eyebrow. “You mean, like premonitions?”
“Or something worse,” Nanda murmured. “Like pieces of something we’ve forgotten.”
Panda looked at him carefully now. “Bro… you hit your head. Your body’s in shock. Don’t go full Netflix series on me.”
Nanda smirked faintly but didn’t reply.
Later, when Panda stepped out to get chai, Nanda slowly swung his legs over the bed. Every muscle screamed in protest. He caught his reflection in the steel panel of the monitor—unkempt, bloodshot, hollow. For a split second, he thought the reflection moved when he didn’t.
He jerked back.
The image settled.
The monitor beeped faster.
He looked down at his arm. Goosebumps.
There was something under his skin—a feeling, not physical, but pressing. Like something was waiting to rise. A memory. A name. A face.
But every time he tried to grasp it, it slipped.
He stood, wobbling, and moved toward the window. Outside, the hospital courtyard was empty except for a janitor sweeping dead leaves. Just as he turned away, he saw it:
A man across the street. Standing still. Shaved head. Watching.
Nanda froze.
The man didn’t move. Didn’t wave. Just stared.
A blink.
Gone.
The space where he’d stood was empty.
Nanda backed away from the glass.
But then—
The man outside began to appear closer. Not walking. Just… nearer.
Every blink, every breath—closer.
Nanda’s vision started to warp. Blurring. Jig-sagging. Like an old VHS tape struggling to play. His eyes twitched, fought to focus. He rubbed them furiously, once, twice—each time the man leapt nearer in distance.
He felt sweat bead down his temple. “No. No. What is this?”
He screamed.
“WHO ARE YOU?! WHO ARE YOUUUUU!”
Then—a grip on his shoulder. Firm. Real.
“NANDA!” a voice yelled behind him.
He spun.
Gone. The man outside vanished.
The room steadied.
The monitor beside him blared its warning tone. A nurse burst in, followed by the doctor.
“Nanda, what happened?” the doctor asked, gripping his wrist, checking vitals.
Nanda stammered. “He was there—outside—staring—he kept coming closer—I couldn’t breathe—he was just like—just like before—”
He started gasping. Chest heaving. Eyes darting like trapped animals.
Then—he crumpled. His legs gave out. The nurse caught him as he collapsed, unconscious.
Darkness swept in.
 “Later, as they settled him back into the bed, the doctor turned to Panda.
“We’ll have to observe him overnight. If it’s not neurological… it might be psychological.”
Panda nodded, but his face was unreadable.
He knew better.
As the hallway lights dimmed, Panda sat by Nanda’s side again. His voice was quiet.
“You didn’t imagine him, did you?”
Nanda, barely conscious, twitched at the sound.
Panda looked at the window, now empty.
He whispered, “I remember what happened before. It’s foolish to have her in your thoughts and spoil your health..Still holding on to her. Letting her haunt your mind like this. She’s gone. And you’re wrecking yourself because of memories.”
Suddenly, a knock at the door. A doctor entered, clipboard in hand. He offered a polite smile before glancing at the monitors.
“Vitals look good. You gave us a scare,” he said. “MRI, EEG, CT—everything’s clean. Physically, you’re fine.”
“Then why… why do I feel like this?” Nanda asked, eyes wide.
The doctor exhaled. “You’ve barely slept in months. Eight months, according to your records. That kind of deprivation… it can break your brain’s ability to separate dream from memory. Reality from hallucination.”
Nanda’s lips trembled. He looked at Panda for reassurance. But Panda… Panda wasn’t surprised.
The doctor gave a reassuring pat. “You need rest. Deep, consistent rest. And we’ll be monitoring you closely.”
He left as quietly as he came.
Panda stood in silence, then gave a half-smile.
“I know what you’re thinking,” Nanda said.
Panda didn’t reply. He just turned to the window.
As the light outside faded, the hallway grew quieter. The doctor stepped into the corridor with Panda, holding a folder of reports.
“All scans are clear,” the doctor said. “There’s no physical trauma to his brain. MRI, EEG, everything’s normal. But… it’s the sleep. Or the lack of it. Eight months of irregular, broken rest? The mind can start bending.”
Panda didn’t say anything. Just nodded.
Only he knew what Nanda had been through. What he had survived. What still lingered, unspoken, in the shadows of memory.
A strange expression crossed Panda’s face—half pain, half frustration, and something older. Older than even fear.
He gave a pained smile and turned to walk back into Nanda’s ward.
But when he opened the door—
The bed was empty.
Nanda was gone.`
},
3:{ title: 'The Discharge',
  content: `The air outside the hospital ward was thick with the smell of antiseptic and wilting bougainvillea from the garden. Somewhere nearby, a wheelchair creaked faintly. Nanda stood barefoot on the dew-touched lawn, shivering slightly under his hospital gown, eyes scanning the street beyond the fence.
The figure was gone. Again. Just like that.
He didn’t know why he was out there — only that he had to look. Had to make sure he wasn’t losing it.
Behind him, rushed footsteps.
“Nanda!” Panda’s voice sliced through the silence.
Nanda turned. Panda looked both relieved and furious.
“Are you insane?” he hissed, grabbing his arm. “You want to collapse again out here in the middle of the damn courtyard?”
“I saw him again,” Nanda said softly, eyes darting around. “He was there. I’m not lying, Panda. I’m not—”
“I know you’re not lying,” Panda interrupted, his grip softening. “But whatever this is… whatever you think you’re seeing… it’s eating you alive.”
He steadied Nanda and guided him back toward the ward.
By late afternoon, the discharge papers were signed. The doctor gave one last word of advice — rest, routine, therapy if needed. Nanda nodded at all the right moments but heard none of it. His mind was already elsewhere.
Panda helped him into the cab waiting outside.
The drive through the city felt surreal. People moved normally — shopping, chatting, hawking fruit by the road. As if nothing had happened.
The auto ride back to his building was silent. Panda kept stealing glances at Nanda, who stared blankly out the window, his reflection pale in the scratched glass.
But it was only when they turned into his lane that reality hit.
Neighbors had gathered in clusters — some watering plants, some pretending to be busy. But all eyes turned to the car.
When they reached his lane, a few neighbors peeked from their doors.
“There he is,” one of them muttered.
“That’s the boy who collapsed on the main road, na?” another whispered loudly enough to be heard.
“Back again,” said another. “God knows what he’s gotten himself into this time.”
“He screams at night. You’ve heard, no? Just last week, at 2 AM… like he was being hunted.”
“Yeah, yeah,” a voice added. “I saw him once walking shirtless on the road, middle of the night. Eyes wide, muttering to himself.”
“And you know what the saddest part is?” said a woman in a low voice. “This isn’t even new. Poor guy’s been like this for months now. Ever since that girl left him.”
“He should get help,” someone else muttered. “Before he hurts himself… or someone else.”
Nanda stepped out of the cab slowly. Every eye felt like a spotlight. Every whisper, a cut.
Panda stepped out behind him, carrying the hospital bag.
Nanda kept walking, head down. He could feel their eyes clinging to him like stains.
An old aunty from two doors down greeted him with cautious pity. “Are you okay now, beta? Don’t do such scary things again, okay?”
He gave her a half-smile and a nod, unable to meet her eyes.
Panda opened the lock to Nanda’s modest one-room flat. The air inside was stale. Dishes sat in the sink. The blanket on the mattress was still crumpled from the morning he’d left for his jog — the morning everything twisted.
“Rest,” Panda said, pulling a chair close to the bed. “You need to rest.”
Nanda sat down slowly. The familiar walls felt distant now, like the room belonged to someone else. Someone who hadn’t screamed in his sleep. Someone whose mind hadn’t betrayed him.
Panda stood at the doorway for a moment, hands in pockets. “I’ll get you some food.”
Before Nanda could reply, Panda was gone.
Alone now, Nanda stared at the ceiling. Same cracks. Same water stain shaped like a crooked bird.
But everything felt different.
Because the nightmares weren’t fading.
And neither was the feeling that something — or someone — was watching.
Nanda lay back slowly on the mattress, eyes locked on the crooked bird stain above. His body ached — not with pain, but with memory. Every square inch of the room held echoes: of panic, of loneliness, of nights when he’d screamed into his own pillow just to silence the noise in his head.
The murmurs outside the gate had faded, but they still rang in his ears.
“Ever since that girl left him…”
“Roaming shirtless, muttering to himself…”
He closed his eyes, but the silence was heavy. Pressing down on him like an invisible hand. Then—
Thud.
His eyes snapped open.
A faint sound. From the kitchen.
He hadn’t touched anything since returning.
Nanda sat up, heart beginning to pound. He listened again. Nothing. But the stale air suddenly felt colder. Tighter.
He stood and walked softly toward the kitchen corner — just a small counter, a sink full of unwashed plates, and a dusty water filter.
Nothing was there.
He turned to go back — and then froze.
The photo frame on the wall above his desk. Crooked. Tilted to the side.
He hadn’t touched it in days. He would’ve remembered.
Slowly, almost reluctantly, he walked toward it.
It was a picture from a year ago — taken during a team trip. His arm around her shoulder. Her head tilted toward him, eyes closed, smiling.
That smile had ruined him.
The moment he reached for the frame to straighten it — the overhead light flickered.
Once.
Twice.
Then steadied.
He stood still, frame in hand, staring at his own reflection in the glass.
But behind his reflection—
Another face.
Not her.
Not Panda.
Not anyone he recognized.
Just for a moment — pale, expressionless, standing in the hallway behind him.
Nanda whirled around.
Nothing.
Empty room. Silent. Still.
His breath caught in his throat. The photo frame slipped from his fingers and shattered on the floor.
From somewhere deep inside him, a tremor rose — not of fear, but of knowing.
This wasn’t just exhaustion.
Something was happening again.
Nanda stood still, the shards of the photo frame scattered at his feet.
But he wasn’t in his room anymore.
The walls had vanished.
He was standing in a narrow hallway — dimly lit, lined with peeling blue paint. The kind of building from his childhood. The concrete beneath his feet was cold. Damp. Familiar.
He turned, unsure how he got there.
The air smelled of rust and old ink.
Ahead, a door creaked open.
Light spilled from inside. Fluorescent. School-light.
His feet moved without his will.
Inside, he saw rows of wooden benches, empty. The old classroom. The one where he used to wait alone after school while his mother graded papers.
At the far end of the room, a little boy sat with his knees tucked to his chest.
Four years old. Tear-streaked cheeks. A water bottle hanging awkwardly around his neck.
It was him.
Young Nanda.
But the boy wasn’t crying.
He was staring.
At the corner of the room.
Where a tall, faceless man stood.
No features. Just an outline. Like someone had sketched him in charcoal and forgotten to give him eyes, a mouth, a soul.
Yet the boy didn’t scream. He just watched him.
“Who are you?” grown Nanda whispered.
The boy didn’t answer.
Neither did the figure.
Instead, the figure stepped forward. Slowly. No sound. No footsteps. Just… advancing.
The boy whimpered and shrank against the bench.
And Nanda remembered suddenly — this had happened.
Not exactly like this. But the feeling.
The overwhelming dread.
That something would hurt him, and no one would come.
Not his mother, too busy.
Not his father, never there.
Not even God.
He ran to the boy, trying to protect him — but the closer he got, the slower he moved. Like wading through wet cement.
“Don’t be afraid,” Nanda whispered. “I’m here now.”
But the boy just looked at him, eyes wide and deadpan, and said:
“You’re the one who left me here.”
`},
4:{ title: 'Familiar Stranger',
  content: `The dream continues…
Nanda is already inside the corridor — metallic, humming, endless.
Cold fluorescent lights flicker above. The air is sterile, heavy with chemicals and something older… like decay buried under metal. Every door he passes is sealed, numbered in red:
B-03. B-04. B-05…
From somewhere behind one of them, a scream. High-pitched. Childlike.
Nanda’s breath catches. He turns toward the sound, but his feet don’t move. As if the floor itself has gripped him.
His hands trembled. He didn’t know why. He didn’t know this place. And yet… he did.
A group of men in white coats stood around a metal table. Wires dangled from the ceiling. Monitors beeped. One man stepped forward, adjusting the controls. Calm. Precise.
Nanda moved closer. Then — a voice from behind the nearest door:
“Why did you come here…?”
Muffled. Familiar.
“Nanda… you shouldn’t have come. You made a mistake.”
He steps back, heart racing. The voice wasn’t threatening. It was warning.
And just as he turns to run—
A sharp stab to the neck.
Cold rushes through his veins.
He gasps, grabbing at the syringe lodged in his skin. His vision swirls. Knees buckle. He collapses to the ground.
Footsteps approach.
A figure crouches beside him.
The face under the surgical mask came into view.
Panda.
Expression unreadable. Calm. Almost… detached.
“You were never supposed to see this,” he says softly.
The walls dissolve into darkness.
Nanda jolted awake.
Sweat soaked his collar. The room was still. The frame — still broken. One shard had slid under the desk.
Had it moved on its own?
He sat up. The clock read 3:17 AM.
Somewhere beyond the window, the city slept.
But Nanda couldn’t.
 Because something in that dream felt too specific.
 Too detailed.
 Too real.
And the worst part?
He couldn’t tell if he was remembering something…
…or being warned. 
He looked around, breath catching.
Then he saw it: a brown parcel just outside his door, and taped to the top — a note.
“Breakfast. Don’t overthink. Just rest today. —Panda”
He stared at it, the ink blurring slightly through the moisture in his eyes.
Rest today.
 But how could he?
The dream still pulsed beneath his skin. It wasn’t like the others — this one had weight. Detail. That child. The hallway. Panda’s voice. The needle.
He held the parcel in his hands but didn’t open it.
Because now… he wasn’t sure if it had really been a dream.
Nanda jolted upright, breath ragged.
 The room was silent, but his heartbeat wasn’t.
That voice from the dream echoed through the walls of his skull.
“Why did you come here, Nanda…?”
 “You made a mistake…”
 Then — the sting.
 The syringe.
 And Panda’s face, cold, unreadable.
He touched the side of his neck instinctively. Nothing there now. But the feeling — the violation, the betrayal — it stayed.
The glass frame lay where it had last fallen. Still broken. Still accusing.
He didn’t wait for the sun.
He threw on his joggers, laced up his shoes, and stepped into the pre-dawn dark.
The streets were still sleeping.
 Only the stray dogs acknowledged him. A few rickshaws passed. A milk van hissed through the fog. Nanda ran past them all, mechanical, as if movement could overwrite memory.
Panda’s voice still rang in his mind. Over and over.
“You made a mistake.”
At the gym, the fluorescent lights buzzed overhead. Dumbbells clinked. Old Bollywood songs played faintly from a Bluetooth speaker near the front desk.
Heads turned as Nanda walked in.
“Ey bro,” someone called out. “Where were you, man? Everyone thought you—”
Nanda ignored it.
Someone else leaned in, trying to be friendly. “You good now? That video of you collapsing went around… kinda scary, bro.”
Nanda’s jaw clenched. He kept walking. Straight to the weights. Straight to routine.
 Bench press. Pull-downs. Deadlifts. As if nothing inside him had broken.
But the whispers didn’t stop.
“Dude, he’s acting like nothing happened.”
“I heard he was in the psych ward.”
“Didn’t he lose it after his girlfriend left?”
“He doesn’t talk to anyone now.”
Nanda gripped the barbell, palms sweating, shoulders trembling slightly from the previous set.
Just as he bent down to lift again, he heard it — a voice, sharp and mocking from across the gym.
“Look at him now… used to think he was the hero of the place.”
Laughter followed. Familiar.
Another added, just loud enough, “Guess karma’s got biceps too.”
Nanda froze.
He didn’t turn.
 Didn’t speak.
 Not yet.
His fingers stayed locked around the steel.
 His breath — steady, but heavy.
He knew those voices.
Two of them.
 Once loud, obnoxious, always circling the gym like they owned it.
 He remembered the day clearly — six months ago. The red hoodie girl, flinching as one of them tried to touch her arm, laughing it off like a joke.
Nanda had stopped mid-set that day. Walked straight over.
 And ripped into them.
Not with fists.
 With words sharp enough to echo.
The gym remembered that silence — the kind that follows truth.
They hadn’t spoken to him since.
But now, here they were. Barking again. Kicking a fallen man.
His eyes fluttered shut for a second.
 Everything inside him wanted to turn. To roar. To break their smirks with the same weight he carried in his chest.
But something held him back.
Not fear. Not defeat.
Just exhaustion.
 And a creeping doubt — was he even that man anymore?
He exhaled, and without turning, lifted the barbell.
 Muscles taut.
 Jaw clenched.
 Memories grinding like broken glass in his mind.
But the whispers kept coming.
“Dude’s mental now…”
“He just screams randomly… saw him do that last week too.”
Someone muttered something else — too soft to hear — but it was the last straw.
CLANG.
The barbell hit the rack, hard.
Nanda stood upright, chest heaving.
He turned around, eyes scanning the crowd.
“EEEYY!!! SSSHHHHHHH!!”
The gym froze.
No music now. No breath.
 Just silence thick enough to taste.
Nanda’s glare scanned them all. Not angry. Not wild.
 Just… tired.
Then, without another word, he turned back.
Picked up the weight again.
And went on lifting — like silence was just another rep.
Nanda racked the last set in silence, wiping his brow as if the moment hadn’t just cracked the air in the room. Most of the gym had quietly gone back to their routines — pretending they hadn’t heard. But their eyes still lingered.
The trainer approached, towel draped around his shoulder, gaze soft but hesitant.
“Nanda…”
He didn’t respond at first.
“Nanda, listen. It’s better if you… take rest for a while.”
That made Nanda pause. He turned, breathing steady now. “Rest?”
The trainer lowered his voice. “Those two — the ones you shut down last year — they’ve… changed a bit since. Helped the gym. Sponsored a lot of this new equipment. Renovation. Even the new AC.”
Nanda looked around slowly. Bright chrome. New punching bags. A fresh coat of paint on the back wall. Money talks.
The trainer sighed. “They’re not happy you’re back. I can’t afford drama, man. I’ve already got pressure.”
“You want me to disappear,” Nanda said plainly.
“No! No. I just—” The trainer faltered. “I just can’t go against them. Not now. I’m sorry.”
Nanda looked at him for a long second.
 Then, a faint smile tugged at the corner of his mouth — not bitter. Just… done.
He nodded once, slung his gym bag over his shoulder, and walked out.
The road home was longer than usual.
His feet wandered.
Unthinking — until they weren’t.
He found himself walking the same street he’d fallen on.
 Where it all began.
Where he collapsed into seizures.
He scanned the sidewalk.
That tree. That line of shops. That broken drain cover.
 Every detail exactly as it was.
But now, his eyes searched deeper.
Above the provision store — a CCTV camera.
 Rusty. But blinking red. Very much alive.
His heart stopped for a beat.
Then a memory surged:
“Police looked into it. Hit and run. No leads. No CCTV.”
 Panda’s words.
 The report.
 “No witnesses. No footage.”
Nanda’s stomach turned.
 His breath quickened.
He lied.
He gripped the railing beside him. A low hum echoed in his ears.
 His knees wobbled.
It was happening again.
The weight.
 The darkness.
A sudden honk. Screams.
“DO YOU WANNA GET HIT AGAIN?!”
“Man’s making it a habit now!”
“What is WRONG with this guy?!”
A small crowd had formed. Judging. Laughing. Dismissing.
Nanda didn’t argue.
He ran.
Fast. Desperate. Head pounding.
When he reached his apartment, chest still heaving, he nearly tripped over something on the doorstep.
A cloth bag.
Fruits. Vegetables.
And on top, a note. The same handwriting. Always the same voice:
“Man, again to the gym this early??
 Fine. Your manager wants you in the office.
 He called me.
—Panda”
Nanda stared at the bag.
No anger this time.
Just the hollow chill of someone realizing:
Is he doing all this because he is planning anything ? or is that how he always behaved…..
So, now he plans to go back to work………
`},
};

// ---------- Styled Components ----------

const ChapterWrapper = styled.div`
  background: url('/textures/soft-paper-bg.jpg') repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 5rem 2rem 2rem;
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  color: #1a1a1a;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 0.6rem 0.6rem;
  }
`;

const ChapterContainer = styled.div`
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.92);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
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

  @media (max-width: 768px) {
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    line-height: 1.5;
    letter-spacing: 0.1px;
    text-align: justify;
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

  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
  }

  @media (max-width: 320px) {
    margin-bottom: 0.2rem;
  }
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

  @media (max-width: 480px) {
    width: ${({ isScrolled }) => (isScrolled ? '38px' : '60px')};
    height: ${({ isScrolled }) => (isScrolled ? '38px' : '60px')};
  }

  @media (max-width: 320px) {
    width: ${({ isScrolled }) => (isScrolled ? '32px' : '50px')};
    height: ${({ isScrolled }) => (isScrolled ? '32px' : '50px')};
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
  const [fontSize, setFontSize] = useState(19);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentChapter = dummyChapter[chapterNum];
  const paragraphs = currentChapter?.content.trim().split('\n') || [];

  useEffect(() => {
    if (slug && chapterNumber) {
      localStorage.setItem(`progress-${slug}`, chapterNumber);
    }

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

  const prev = chapterNum > 1 ? chapterNum - 1 : null;
  const next = chapterNum < TOTAL_CHAPTERS ? chapterNum + 1 : null;
  const chapterImage = `/images/chapters/chapter${chapterNum}.jpg`;

  return (
    <>
      <ProgressBar progress={progress} />

      <ChapterLogo to={`/books/${slug}`} isScrolled={isScrolled}>
        <img src={chapterImage} alt={`Chapter ${chapterNum} cover`} />
      </ChapterLogo>

      <ChapterWrapper>
        <ChapterContainer ref={contentRef}>
          <ChapterNumber>Chapter {chapterNumber}</ChapterNumber>
          <Title>{currentChapter?.title || 'Untitled Chapter'}</Title>

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
