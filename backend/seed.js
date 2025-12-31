const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Story = require('./models/Story');

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

const sampleStory = [{
  title: "The Dream",
  tagline: "Enter a surreal world where reality bends.",
  image: "/images/book-thumbnails/the-dream.png",
  slug: "the-dream",
  genre: "Sci-Fi",
  order:1,
  comingSoon: false,
  chapters: [
    {
      number: 1,
      title: "The Awakening",
      image: "/images/chapters/story1/chapter1.jpg",
      content: `
       "But I have promises to keep, 
       and miles to go before I sleep."

The line drifts out of the shadows—measured, unsettlingly calm, as though it has been spoken so many times it's lost all meaning. It echoes through the stillness like a frayed lullaby, repeated only to be remembered.

The room it floats through doesn’t belong to any world that welcomes life. Dim and clinical, it has the air of a long-forgotten wing of a hospital—sterile, abandoned, untouched by kindness. A single fluorescent tube blinks overhead, casting stuttering pulses of light that make the cracked green walls ripple like diseased skin. The smell hits next: sharp antiseptic laced with rust and something older—metallic, thick, like blood dried into tile grout. Scattered stainless steel trays litter the floor, one overturned, the surgical tools either missing or slowly rusting in place.

A metallic screech tears through the air. An iron rod scrapes along concrete stairs, each dragging thud a serrated wound in the silence. Somewhere in the darkness, a child whimpers—a sound too small, too broken to be anything but real. The very air presses in, damp and sentient, as if the building is holding its breath, waiting.

Footsteps follow—slow, deliberate, growing louder. And with them, the voice—distorted now, coming closer, curling around the words like a snake around prey:

"Aaaand mmmiiillleessss toooo ggoooo befffooorreee YOOOUUU sslllllleeeeep..."

Nanda can’t move. He isn’t in control. The world flickers like damaged film—images skipping, stuttering, folding in on themselves. His body isn’t his own. He is watching, trapped behind someone else’s eyes.

A man kneels in blood.

He sways, broken but not yet fallen. His body bears the evidence of cruelty: bruises bloom across his ribs, a gash rips open his left shoulder—deep, raw, exposing sinew like torn bark. A rusted metal shard juts from his right calf, embedded deep, like it has grown there. His hands, slick with blood, lift in trembling surrender.

“Please,” the man rasps, his voice barely a breath. “Please, just let me go…”

The iron rod stops dragging.

A figure looms behind him—faceless, silent, poised. The room freezes. The air thickens.

And then—

WHAM.

Iron collides with flesh and bone. A wet crunch echoes like thunder. Blood arcs through the air.

The man collapses—not simply falling, but unraveling. His body crumples forward, hands smearing red across the tiles. Like a puppet with its strings cut mid-motion.

And though Nanda hasn’t been touched—

He feels it.

The tearing pain in the shoulder. The hot metal in the calf. The weight of blood between his fingers. The sick, inevitable surrender of a body shutting down against its will.

It isn’t his pain.

But it’s inside him now.

The world warps. Bends inward. The silence implodes. A scream blooms in the void—soundless, eternal.

Darkness doesn’t fall.

It consumes.

Not night, but something deeper. Not the comforting dark of midnight, but the erasure of everything. As if reality itself has shut its eyes. More final.

From within it, Nanda stirs—breath ragged, chest heaving. A faint tremble courses through his limbs. Sweat pools on his brow, soaking into the pillow. His eyelids flutter violently, eyes darting beneath closed lids as though desperately searching for a way out.

But just before it swallows him whole—

The flickering begins.

Then comes the silence.

A vacuum.

A scream caught on the edge of sound—silent, eternal.

The silence ruptures again, this time with a strange flickering—light bending, images stuttering like damaged film. The space around him tears at the seams. Walls twist. The ground beneath his feet disappears. A sudden high-pitched screech breaks through, like metal grinding metal, turning into static and then...

A clocktower emerges, towering above everything.

Grotesque in scale, it looms like a god forgotten by time. Its hour hand spins clockwise—too fast, too aggressive—while the minute hand jerks in reverse. Chimes begin to toll from somewhere far away, echoing louder, deeper, more distorted with each passing second. The sky around it fractures like glass, and a scream rises—not from someone else, but from inside him—beginning as a low murmur before shooting into a shriek that pierces the sky.

The tower’s bells clang once.

Twice.

Then—

TRRRRRRIIIIINGGG!

Nanda jolts awake, chest heaving, sweat soaking through his shirt as his heart pounds against his ribs. The digital clock blinks back at him—4:30 AM—its red numbers pulsing like an accusation in the dark.

He rubs his eyes, still half-blind from sleep. His body aches—not with the softness of a bad dream, but with a soreness that feels alarmingly real, as if something has hit him during the night.

He stands slowly, stretching his arms, trying to shake off the lingering dread. But his muscles resist, and his skin itches in places he can’t name. He wipes sweat from his brow, then from his neck, and finally behind his ears—where it feels like the dream has left behind blood that isn’t his.

His hands tremble in the low light. They don’t look like his own.

He scans the room—wardrobe, desk, window, the peeling poster of one of his old paintings. The ceiling fan hums overhead. Everything looks as it should. Familiar. Safe.

And yet, something is undeniably off.

He can’t remember anything from the night before. Not dinner. Not brushing his teeth. Not even getting into bed. It’s like someone has blacked out a portion of his life with thick ink.

Only the dream remains—raw, vivid, disturbingly intact.

He staggers to the sink, washes his face, and leans heavily against the basin, hoping the cold water will wake him from something he isn’t sure he’s left behind.

The radio crackles to life—just for a moment—and a voice, low and commanding, cuts through the silence:

“We're the middle children of the history man!!

No purpose in place, We have no great war, no great depression,

Our great war is a spiritual war,

our great depression is our lives.”

Then, as suddenly as it came, it fades again—leaving only the quiet behind.

He stares at his reflection. Hollow eyes. Dark circles. A version of himself thinned out by something he can’t name.

He lays out his clothes with quiet precision—tracksuit, shoes, the bottle of protein shake nestled carefully into the side pocket of his bag.

Each action feels rehearsed, as if following a script left behind by a steadier version of himself.

He moves to the table and picks up a banana, peels it without looking, and scoops a spoonful of honey like he has every morning for months. No appetite. No awareness.

Just the quiet rhythm of habit. The radio plays something old and familiar—a Telugu melody from decades ago—its notes drifting through the room like wallpaper, unnoticed.

Outside, the sky is still deciding whether to be day or night. A fine drizzle kisses the ground, and the air feels cooler than it should for summer.

The streets are empty, the city still holding its breath.

He begins jogging. His footsteps echo faintly off closed shutters and sleeping buildings. His breath settles into rhythm.

But the dream isn’t done with him.

It clings to him like damp fabric—each image replaying in flashes.

Each image replays—those screams, the clocktower, the blood. His breath grows heavier.

Even as his feet move, his mind stays behind—trapped in that flickering room, in the rust-stained tiles, in the sound of iron meeting bone. The visuals don’t fade;

they live just beneath the surface, like reflections in a puddle—fragile, but always waiting to ripple back.

He keeps running, the drizzle cool against his skin, the city barely awake. But something shifts—an instinctive jolt through his spine, like the air itself recoils.

Before he can turn, before thought can catch up, pain crashes into him—blinding, brutal. The world tilts, ripped from its axis. He is falling, breath gone, vision shuddering.

WHAM!

A sudden blow to the back. Sharp. Disorienting.

He staggers forward, the world spinning, breath knocked clean from his chest. In the blur, a figure emerges—no scarf, no mask.

Just a shaved head, the hair uneven and patchy, as if recently grown back. The rest is shadow—unclear, unreal—perched above him somehow, on a moving jeep or a ledge, watching.

Then Nanda’s body gives in, crumpling beneath him.

Tires screech. Voices echo—elderly, panicked. A group of old men rush toward him, shouting, lifting his broken body.

Darkness again.

He wakes to white light and the slow churn of a ceiling fan that doesn’t belong to his room. The air smells sterile, too clean, and machines hum beside him, their beeps steady and unfamiliar. A saline drip clicks gently against its stand, marking time in a language he doesn’t care to understand.

Every inch of his body protests as he shifts—dull aches in his shoulders, a burning sting down his leg. It isn’t just pain; it’s aftermath.

His body feels borrowed, bruised in places he can’t name.

Across from him, Panda dozes in a cheap plastic chair, head bowed, arms folded. Two older figures stand near the door, speaking in low tones that blur into the background.

A sound slips from Nanda’s throat—half groan, half question—and Panda stirs instantly, blinking the sleep from his eyes before rushing over.

“Ra! You’re awake!” he says, smiling like it’s supposed to help. “Don’t worry. You’re okay now.”

Nanda tries to speak, but his throat is dry, the words catching.

“Relax,” Panda adds, more gently. “You’ve been out. The rest did you good.”

But Nanda doesn’t feel rested. He feels emptied. As if something has been pulled from him and replaced with static.

He leans back, and maybe it’s the medicine... his eyes shut without his permission and his memory fades in. And just like that, it all rushes back.

His memories return in waves. The blow. The fall. His shoulder scraping against a rusted electric pole. The sting of a crushed cool drink can slicing his calf.

His fingers slide across the blood pooling at the back of his neck—red-stained hands. Not imagined. Not exaggerated.

The dream.

It hadn’t just mirrored reality—it had predicted it.

His breath catches.

Somewhere nearby, through a haze of half-sleep, voices murmur.

"...the electric pole scratched across his lateral deltoid—left side—and that Coke tin pierced clean into the right calf. We've started him on antibiotics to prevent infection..."

Nanda's eyes flutter open, lids heavy. Light bleeds through the blur. A man in a white coat stands near the foot of the bed, talking to Panda, who listens with folded arms and a strange stiffness.

"...an injection was administered on-site. That should stabilize—"

Nanda's voice rasps out, sudden and hoarse:

"Exactly. That’s what I’ve been saying... Those bruises. That blood. I saw them—before."

Both the doctor and Panda look up.

Panda forces a quick smile and steps in. "It’s alright, Nanda. Relax. Just let me talk to the doctor for a sec, okay?"

His voice is calm, but his eyes flick—something unreadable flashing across his face. That polite unease people wear when things begin slipping from their grasp.

The doctor clears his throat and continues, slightly lower, but still within reach.

"...a severe blow to the occipital bone. The swelling’s controlled for now, but honestly—it’s a miracle he survived. What he needs now is rest. A great deal of it."

Nanda doesn’t respond. His gaze wanders—past the IV, the crisp sheets, the sterile instruments on cold trays.

The doctor hands Panda a prescription and quietly exits.

"Panda..." he croaks. "The dream—I saw it before it happened. All of it. The man, the scar. Everything."

Panda stills. A twitch of unease flickers across his face, but he masks it too fast.

"Dreams mess with you, bro," he says lightly, but the cracks show. "Trauma, adrenaline—it rewires things. Makes memories weird."

"No," Nanda insists, sharper now. "No... I’m telling you. The bruises, the fall, the man I saw. It was all in my dream... before it happened."

Panda hesitates. He rubs the back of his neck, exhales. "Coincidence, man. Our brains are wired to find patterns. You’ll feel different tomorrow."

But Nanda knows he won’t.

He sinks deeper into the pillow, staring at the ceiling. The fan above spins with mechanical indifference.

His thoughts refuse to stay in order. They loop, twist, fray like the edges of burnt paper.

He closes his eyes and tries to find the thread again. The attacker. That look. That faint crescent etched into skin like a memory left to rot.

He’s seen it. Not in the dream. Somewhere else. Somewhere real.

A knock interrupts him.

An elder leans in through the door, kind-eyed, voice soft. "You’re lucky, son. That kind of blow\... could’ve been much worse."

Nanda nods stiffly. "Did anyone see who did it?"

The man shakes his head. "Only shadows. He vanished before anyone could reach."

Like smoke. Like a warning that was never meant to be understood.

The door closes, and silence wraps around him like a sheet.

Nanda turns to the window. His own reflection stares back at him—drained, hollow, almost fading at the edges.

Something has shifted.

This isn’t a dream echoing into life.

It’s something waking up inside it.

Something ancient. Something watching.

And for the first time, he wonders if he has ever been awake to begin with.

Not miles this time.

But something darker.

Something waiting before he sleeps.


`
    },
    {
      number: 2,
      title: "The Man Outside",
      image: "/images/chapters/story1/chapter2.jpg",
      content: `The hospital room hummed with the quiet unease of early morning. Faint sunlight bled through the blinds, striping Nanda’s blanket in gold and shadow. The steady beeping of the monitor was the only rhythm in the silence.
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
    {
      number: 3,
      title: "The Discharge",
      image: "/images/chapters/story1/chapter3.jpg",
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
`,
    },
    {
      number: 4,
      title: "The Familiar Stranger",
      image: "/images/chapters/story1/chapter4.jpg",
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
So, now he plans to go back to work………`,
    },
    {
      number: 5,
      title: "The Revelation",
      image: "/images/chapters/story1/chapter5.jpg",
      content:`The office building hadn’t changed. The same cracked tile near the elevator. The same overused coffee machine hissing steam in the hallway. But to Nanda, it all felt… staged. Like a set someone had reassembled just enough to fool him into thinking life was normal.
He walked past the reception. A few employees looked up — then immediately looked away. Except one.
 “Hey, look who’s back,” a guy from analytics muttered, nudging his colleague.
 Whispers trailed behind him like smoke.
 “Did you hear? They say he completely lost it.”
 “Wasn’t he found lying on the road or something?”
 “I heard he screamed in his sleep… in the hospital.”
 “Ever since that girl left—”
 “He’s gone bonkers.”
 A muffled laugh. A fake cough to cover it. Someone cleared their throat a little too loudly.
Nanda kept walking. Head straight. Eyes fixed ahead.
 The old him would’ve snapped — maybe hurled a chair, maybe worse. But today… rage didn’t find a way out.
 It just swirled inside him. Waiting.
 Because he was scared.
 Because what happened this morning at the gym — what he remembered — could happen again here.
 And if it did, it might not just end in whispers.
 It could end with him being fired.
So instead… He observed.
He sat at his desk. Stared blankly at the monitor.
 The dream played on loop.
 The corridor. The flickering light.
 The child sobbing.
 The voice: “You shouldn’t have come here.”
 And then — the cold jab of a syringe.
 Panda’s face.
 His skin crawled just thinking about it.
 Was it a buried memory?
 A hallucination?
 Or both?
Ping.
 A message blinked on his office chat:
 “Please report to Mr. Raghavan’s office.”
He stood up and headed toward the glass cabin.
“Come on in, Nanda,” Raghavan said without looking up. “How’s your health?”
 Before Nanda could answer —
 “Don’t bother. You’re upright, not drooling — good enough for me.”
 A hollow laugh. Solo.
Raghavan leaned back slightly, adjusting his collar.
 “Look — we’re not going to throw you back into the deep end right away. No pressure.”
 A pause. Calculated.
 “You’re being moved to a different team. Support role. Easier pace.”
Nanda frowned. “Different team?”
“Still the same project. Same compound. You’re just not leading anymore,” Raghavan said, glancing at his monitor. “Think of it as… collaborative redemption.”
 He smirked, then added,
 “You’ve always had a knack for sorting messes out, right?”
 A beat.
 A muffled laugh — like he found his own words funnier than they were.
 “Except, well… some messes.”
Nanda’s jaw tightened, but he said nothing.
Raghavan continued, almost too casually, “Anyway. The neuro-stabilizing drug work — you remember it, I hope?”
“I do,” Nanda said, voice low.
“Great. Then figure it out quickly from where you are. The client wants numbers, and we can’t afford delays.” He waved a hand dismissively.
 “You’re still in the building, Nanda. Just… not at the head of the table anymore.”
Dismissed.
 He walked back to his desk, unsettled.
 That phrase again: “Among other things.”
He opened the system, but now with new eyes.
 Folders marked “external testing.”
 Access denied.
 Why? He used to have access.
 What had they taken away?
Then the elevator dinged.
 And through the glass doors — Panda.
 Not inside. Just… standing near the canteen. Talking to someone.
 A stranger. Dull green jacket.
Nanda froze.
 That jacket.
 The same one that was draped over Raghavan’s chair this morning.
Animated talking. An envelope passed.
 And then — gone.
Something didn’t just feel wrong.
 It felt designed.
He opened the debug terminal — an old bypass tool he wrote himself.
 Accessed deeper logs.
Project: PND-A
 Supervisor: REDACTED
 Access Level: Internal Clinical Wing Only
PND-A.
 Panda.
 No coincidence. No chance.
 He stared, breath shallow.
 Was Panda running a project… named after himself?
 And was Nanda a part of it?
His thoughts spun.
 His pulse spiked.
And then — his phone rang.
 Unknown number.
He picked it up.
 “Hello, this is Inspector Vijay,” the voice said. “We met this morning?”
 “Yes,” Nanda said quickly.
 “You filed a report about the hit-and-run incident, correct? We pulled up CCTV logs from the mart nearby.”
 A pause.
 “But footage for that day is… missing.”
“What?” Nanda stood up, chair scraping behind him.
 “Footage from the entire week has been erased. It doesn’t look like a malfunction.”
Nanda’s stomach dropped.
 He already knew.
 Someone was covering tracks.
 “I want to meet you,” he said sharply. “Right now. Let’s go to that mart together.”
Outside the Mart
 Nanda and the inspector stood facing the store manager — a pale, sweaty man already halfway into denial.
 “I’m telling you — we don’t keep footage more than 24 hours,” the manager lied.
 “That’s not what your policy says,” Vijay replied coldly. “I’ve already spoken to your corporate.”
The man stammered.
 Nanda snapped.
 “WHO paid you to delete it?”
 His voice cracked. “WHO?”
 “Sir… please…”
 But Nanda was done being calm.
 He shoved a display stand over. Boxes fell like dominoes.
 The sound ricocheted through the aisles.
 Customers turned. Staff froze.
 Then — finally — the manager whispered:
 “Someone… a corporate guy. Suit. Offered a huge amount. He said he wanted specific days deleted. Had a pen drive and everything. I didn’t ask more.”
“You didn’t ask more?” Nanda shouted.
 But before he could say more — the inspector stepped between them.
 “We’ll recover the backups,” he said. “Don’t worry.”
INT. POLICE LAB – LATE EVENING
 The room was dim. A few low desk-lamps glowed over keyboards and hard drives. Fans whirred softly. A single ceiling tube flickered every few seconds, like it too was nervous.
The officer tapped a few keys.
 “Here,” he said. “This is from the backup we retrieved. Same street. Timestamp — 4:03 AM.”
 Nanda stepped closer to the screen, heart pulsing behind his eyes.
The footage began.
EXT. STREET CORNER – CCTV FOOTAGE – NIGHT MODE
 It was silent. Just the empty road, blurred under a faint drizzle.
 Nanda walked into the frame.
 Gym bag slung across his shoulder. White shoes. Earbuds in. Head low, face unreadable.
 The street slept. No traffic. No sound. Nothing moved — until something did.
A jeep roared in from the left side — not speeding, not honking, just emerging from the fog like something summoned.
 And then, in a blink — WHAM.
 A massive rod, iron-forged, whipped out from the side of the jeep — and slammed into Nanda’s ribs, like the vehicle itself had grown an arm.
Nanda’s body twisted mid-air, limbs flailing before collapsing violently to the ground.
 The jeep halted. Still. Quiet.
 The canvas flap at the back lifted.
 A man jumped down.
 Boots hit gravel. Heavy. Measured.
He remembers that sound — the steady rhythm, like a war drum in the rain.
 A black hoodie, soaked around the edges.
 The man stepped out — tall, broad-shouldered, built like concrete.
 Nanda’s breath caught. He is recalling the whole scenario…
The police operator leans in.
 “Who the hell is that guy…” the officer mutters.
 The man on screen — still hooded — stood beside the jeep, calm, unshaken.
 Nanda now is able to visualize totally what happened that day… He could hear the car tyre screeching.
A spark flickered.
 A cigarette lit.
 The flame flared to life.
 And that cigarette — the tip burned crimson, unnaturally bright, like a red sun breaking through storm clouds.
 Smoke curled upward, thick and white.
 Not just smoke — clouds. Morning mist.
He didn’t check the body.
 Didn’t rush.
 He just stood there, smoking, like someone examining himself from the outside.
Footsteps entered the frame.
 Two older men from the alley — a coat and a grocery bag between them — rushing toward the fallen figure.
 The hooded man turned slightly.
 And at that precise moment — a gentle breeze.
 The hood slipped off.
 Nanda’s pupils widened.
The smoke parted — both on the monitor and in his mind.
 The face came into view.
 The nose. The angular jaw. That faint scar just above the left eyebrow.
 His own face.
Captured on camera.
 And remembered from inside.
 Not similar.
 Not a lookalike.
 Him.
Standing.
 Alive.
 Looking at his own unconscious body.
How…?
The officer’s hand dropped from the mouse. He looked up slowly, voice barely above a whisper:
 “Sir… that’s… you?”
NANDA – STAGGERED
 His throat tightened. The edges of the world blurred — but not with fear. With recognition.
 Something inside him unlatched — like a vault cracking open.
His voice came out hoarse.
 “It’s not a glitch. I remember that smoke. The sound… The… heaviness.”
The man in the video threw his hoodie back on, turned sharply, and ran — leapt back into the jeep’s deck, pounding twice on the roof.
 The vehicle accelerated and vanished into the fog.
NANDA (softly)
 “That wasn’t just footage. That was real. How’s that even possible????”


The screen had flickered.
The footage had stopped.
But the silence that followed?
 It kept growing. Breathing. Watching.
A low hum in the lab. A sterile glow from the monitor. Vijay turned toward him, about to speak—
But Nanda’s phone buzzed.
Once.
 Then again.
 And again.
He didn’t reach for it. Not immediately.
His eyes were still locked on the screen — not because of what he saw, but what he felt.
 That face. That man in the frame.
 The same features. The same walk.
 Him.
 And yet—not him.
Another buzz. This time, a call.
Reluctantly, as if waking from some underwater dream, Nanda took the phone. His thumb hovered. He answered.
It was his mother.
Her voice was slow today. Soft. And heavy — like it had been walking for years and just sat down.
“I’m not able to run to school like before, Nanda… My knees ache. My arms too. Even standing for ten minutes feels like a punishment now…”
A honk exploded from the street outside — a bus tearing past the station.
 Her voice disappeared under it. As if the world itself didn’t care what a mother had to say.
When the sound faded, she was still speaking — but faint, like a dream dissolving mid-sentence.
He ended the call before she could say more.
 Because he already knew.
 And somehow, hearing more would only make it worse.
He looked down at the phone screen.
There, glowing among the app icons, was a message notification.
 From his father.
Nanda. I lost my job.
 The thunder came right on cue.
 A low, growling rumble that didn’t feel like weather, but judgment.
But I’ve already started looking again. Don’t worry. I have savings. I can manage for about a month.
 But after that… I’m not sure. I just thought I should tell you… so you don’t plan any expenses.
That last line blurred.
Because Nanda’s eyes had filled.
 Quietly. Instinctively.
 Tears gathering like clouds before anyone notices a storm.
And just then—his memory stung him.
That message from the morning.
“Reminder: EMI due. Your account balance is insufficient. Penalty charges will apply.”
The words had stung at dawn. Now, they tore deeper.
The money — the savings he’d once had — had flown out months ago.
 Piece by piece.
 Lab bills. Clinic visits. Medicine. Diagnostics.
 Each swipe of the card another handful of sand tossed into the wind.
It wasn’t just his father’s job slipping away.
 It was his past, his present, and even the fragile rope of future he’d been hanging onto — all fraying at once.
Outside, the storm rumbled again. But inside the police lab, it had already begun.
The windows trembled.
And from the officer’s desk, loose files lifted.
 Sheets fluttered into the air — reports, Xeroxed forms, fingerprints, statements — all twirling upward like a flock of startled birds.
Receipts. Documents. Names. Numbers.
 All dancing with the wind — the very image of Nanda’s scattered life.
Papers spun through the room like forgotten currency — weightless, meaningless.
Just like the money he no longer had.
His thumb hovered again — this time, to close the message. But before he could, another notification popped.
Instagram.
Tagged in a story.
He opened it, almost like reflex.
There she was.
Her.
Laughing in a party dress under string lights. A drink in hand. Surrounded by friends.
The text on the screen?
“Never seen anyone as immature and emotional as him. Honestly, what a fool 😂💀”
His name tagged — right there in front of everyone.
Another thunder cracked.
 This time, sharp.
 Like a whip tearing the sky in half.
A tear slid off his chin — landed on the phone screen.
The next story started auto-playing.
 Her birthday party. Smiling faces. Laughter frozen in time.
But he couldn’t see it clearly.
The screen was wet now.
 Smudged with rain. Or tears. Or both.
He tried wiping it.
 It slipped from his hand.
 Clattered on the floor.
He didn’t pick it up.
Because something had broken.
 Not just the screen. But something inside him. Something older.
The glass door to the lab began to pepper with raindrops.
 Soft at first. Then harder.
 Then furious.
He stood.
Didn’t speak.
Just walked — straight through the door, into the storm.
“Nanda! Wait!” Vijay called after him.
 But the wind swallowed the voice before it could reach Nanda’s ears.
Outside, the world had turned feral.
Dust swirled in frantic spirals, as if the earth itself was unraveling.
 A fine layer of sand stung Officer Vijay’s eyes, forcing him to squint, his vision blurred.
 He tried to follow Nanda’s silhouette — but the storm had already begun erasing it.
The drizzle had started too — not gentle, not forgiving — but sharp.
 Each drop hit like a tiny stone against the ground, the glass, the skin.
 Like pain had learned how to fall from the sky.
And Nanda… he kept walking.
Shoulders sunken. Head bowed.
 Tears leaking quietly from the corners of his eyes — and yet, the wind was so merciless, it flung them back across his own face.
 As if the sky didn’t want to waste a single tear — as if the world wanted him to taste his sorrow twice.
His body moved, but his mind wasn’t with him.
 His legs walked, but his soul… was somewhere else.
He wasn’t ignoring Vijay.
 He just couldn’t hear him anymore — not through the thunder in his chest and the storm in his head.
And so, Officer Vijay… gave up.
He lowered the hand he’d reached out.
 Blinking through the dust and sand. Watching Nanda disappear into the storm.
 Like a man stepping out of one reality — and into something far more unforgiving.
Thick sheets of rain lashed the street like punishment.
 Covers were torn from parked bikes. Papers danced like ghosts.
 Plastic bags flapped against signboards like they were begging to be let in.
 Car horns. Bike horns. Buses screeching.
Chaos. All of it.
 But Nanda — he walked like none of it mattered.
He wasn’t angry. He wasn’t thinking.
 He was just moving — like a puppet whose strings were pulled by memory.
Past the gutters overflowing with city sludge.
 Past the tea stalls trying to hold onto their tarps.
 Past the hunched silhouettes of people running for shelter, as if the rain was chasing them.
And then — the tracks.
Steel, slick with stormwater.
 A train was slowing down — its wheels grinding against the rails, screeching low like an animal in pain.
 The engine let out a honk. Long. Hollow. As if it were calling out to him. Like it somehow knew.
Wind tore across the platform and through the fencing, kicking up loose sheets and plastic wrappers that danced around Nanda’s legs.
 The debris whirled off the track, pulled by the wind that followed the train.
 It wasn’t just litter — it was memory in motion. Forgotten things returning.
Inside the train, through the open doors, a boy sat near the edge — tiny, brittle, crying into the hollow space of his hunger.
 Behind him, an old couple stared out a cracked window. Not at the boy. Not at Nanda.
 Just up. At the bruised sky.
 Their eyes weren’t desperate. Just… waiting. Like they were asking heaven for one last miracle.
But the train moved on.
 And so did Nanda.
The noise dulled now — like the storm around him had sunk beneath the louder storm inside.
His mother’s soft voice returned.
“I’m not able to run to school like before, Nanda… my knees are aching… I’m unable to stand for long…”
 That fading voice — lost beneath the horn of a passing bus — like even her pain didn’t get space in the world’s noise.
His father’s quiet shame echoed too.
“I lost my job… but I’ve started looking again… don’t plan any expenses for now…”
 And underneath those words — that same helplessness.
As Nanda veered left from the road, the lake revealed itself.
 The place that once felt like calm.
The place he’d laughed beside someone he once trusted with his whole, foolish heart.
The rain had softened the earth, but his knees hit hard as he fell.
 Right there — like gravity had given up pretending he could stand.
Memories hit like flickering film.
A smile.
 A laugh in sunlight.
 Her fingers brushing his.
 Moments by the lake. Shared secrets. Stolen silences.
Then the flicker — sharp.
Her Instagram story.
 Her voice tagged to a song he once shared with her.
 “Nanda is such an emotional idiot.”
 “Never met someone so immature in my life.”
He didn’t even swipe.
 His tear landed on the screen — the story moved on without him.
 A birthday party. Her smile. Surrounded by everyone.
 Everyone but him.
The betrayal etched into pixels.
Another flicker — his gym.
 The clink of weights.
 The cheers the day he won gold.
 The scent of iron and sweat and belief.
Then — his gym trainer’s voice: “You should probably stop coming, Nanda. It’s… uncomfortable for others to see you like this.”
Flicker.
The manager’s words.
 “You’re off the project. Take time off. Maybe rethink your direction.”
Flicker.
Panda.
 That one friend. That one lifeline.
 Laughter, drives, coffee on footpaths.
 Late-night confessions. Inside jokes. That look of trust.
And then —
 The man in the footage.
His own face — on someone else.
 His own voice — without his mouth moving.
 His own life — fractured, mirrored, mangled.
Everything played in loops inside him.
And then —
He screamed.
Not a word.
 Not a sentence.
 Not even a name.
Just pain — torn from the body like it had been hiding in his spine for years.
 Like it had finally clawed its way out.
And the sky screamed with him.
The loudest thunder yet — a guttural rip across the sky, like even the gods had lost control.
His fists pounded the earth.
 Stones tore into his palms, but he didn’t care.
 Blood trickled down — quickly swallowed by mud and rainwater, washed away before it could be remembered.
The drops were merciless now.
Big. Cruel.
 Not falling — attacking.
 As if the sky had shattered.
 As if grief had become weather.
The lake rippled, churning under the force.
 Each drop cutting the surface like needles.
 Piercing. Stinging.
Plastic bags skated across the water like lost currency.
 Scraps. Receipts.
 Useless things that once held value.
 Now? Just ghosts of a life that couldn’t hold together.
He collapsed.
 Face-first into the soil.
 Breath caught in his chest like it wasn’t sure if it wanted to stay.
Hands limp.
 Mouth open.
 Eyes wide — staring at nothing.
And still — the rain.
Still — the thunder.
Still — the world collapsing, without pause, without care.
And for the first time in what felt like a lifetime…
Nanda cried.
Not quietly.
 Not politely.
 But like a child who had held back too long.
 Aloud. Wild. With no shame. No shape.
With the kind of ache that only the sky could understand.`,
    }
  ]
},
{
  title: "The Girl Who Never Grew Up",
  tagline: "The tale of a little Girl",
  image: "/images/book-thumbnails/girl.jpg",
  slug: "the-girl",
  genre: "Drama",
  order:2,
  comingSoon: false,
  chapters: [
    {
      number: 1,
      title: "The Weight of Love",
      image: "/images/chapters/story2/chapter1.jpg",
      content: `"IF thou must love me, let it be for nought

Except for love’s sake only. Do not say

‘I love her for her smile — her look — her way

Of speaking gently…’"

The girl reads aloud slowly, her tiny voice curling around the old words, like she’s trying to understand their weight even as she speaks them. She’s perched on the living room couch, her feet dangling just above the floor, one polished shoe in her lap, the other still in her hand. A small cloth tucked between her fingers shines her father’s shoes with the solemnity of a ritual.

Across the room, Vijay stirs his oatmeal absently, half-listening, half-drifting in his thoughts. The morning sun filters through the curtain lace, laying soft patterns on the tiled floor. The hum of the ceiling fan, the distant whir of a street vendor’s bell — all of it folds neatly into the quiet rhythm of their little world.

He swallows the last spoonful and raises his voice just enough.

“Hey dearrr…” he calls out, stretching the word with affection, “you ready? It’s time. We have to leave…”

Ritwika doesn’t lift her head immediately. She is too engrossed in what she’s doing — polishing her father’s black leather shoes with a gentle rhythm, her small fingers swiping the cloth with practiced care. When she finally looks up, there’s a spark in her eyes and the proudest smile dancing across her face.

“I was ready even before you, Dad,” she declares with exaggerated sass. “You’re the one who still hasn’t put your shoes on!”

Vijay pauses, caught mid-chew. “Wowww,” he grins, raising his eyebrows in amused surrender and chuckles, setting the bowl aside on the counter.

“Okay, okay, boss. I surrender.”

Slipping the bag over his shoulder, he strides over, takes the shoes from her lap, and sinks onto the couch. He throws a quick glance at her — that usual blend of pride and quiet awe that always sneaks into his face when he looks at her — and bends down to kiss Ritwika’s forehead. She holds out her hand, still seated — he takes it — and with one excited hop, she jumps off the couch to join him.

Her baby-blue gown bounces around her ankles as she walks beside him, struggling to match his pace, though her legs kept hopping rather than stepping. Her bob-cut hair was tied into two short plaits, one fastened with a red rubber band, the other with a pink one. A small maroon bindi sat perfectly centered on her forehead — proudly placed by herself that morning. Her white sneakers squeaked with each jump.

“Ritsssshhh, come on now, easy… you’ll twist an ankle.”

Her feet patter alongside his, but with every second step she takes a small leap just to keep pace. At six feet tall, Vijay towers next to her. She doesn’t mind. Their rhythm is unspoken. It has always been this way.

“Dadddd…” she begins, her voice bouncing like her steps, “Why don’t we go to office on a bike?”

Vijay glances down. “It’s close enough to walk. Walking’s good for the health, you know.”

“But still… I see other people going on bikes or cars. We’re the only ones walking. I mean… it’s fine. I like walking with you.” She flashes a quick grin.

Before Vijay can respond, she shifts gears again.

“Also, daadddd… why don’t you shave your beard?” She squints. “There are so many women staring at you. I think you look better without it.”

She giggled and looked away, as if her joke was too powerful to see delivered.

He doesn’t answer immediately. As they pass by the glass doors of a mall, his reflection catches his eye. His hair is neatly combed. Square glasses hide the deep circles under his eyes. The beard — thick, fully grown — masks the tired jawline. A scar, faint but present, stretches across the upper part of his forehead, evidence of an old injury. He’s dressed simply — a dark blue collarless shirt, layered over a dull gray t-shirt beneath.

Meanwhile, Ritwika’s chatter continues. She tugs his hand and pulls him toward the mall. Inside, her eyes land on a toy in the display.

“Daddddd! This is the one we were talking about last night! The remote car, remember? You said it’s your favorite!”

Vijay smiled softly and shook his head.

“On our way back, sweetheart. I promise.”

“You sure? Pinky promise?”

He slipped off his glasses, knelt down to her level, and looked her straight in the eye. “For sure, my dear. Cross my heart.”

They do their signature with their fists.

Moments later, she’s sitting on the edge of the reception table inside the mall while he reties the laces of her sneaker.

“Two knots,” he says, securing it tightly.

“But I’m used to one knot, Dadd…”

He doesn’t argue. He just pats her foot gently, then helps her down. They walk together past colorful store fronts, but she doesn’t ask for anything. Not a single thing. She’s already excited about the toy promised later.
They pass by the candy aisle. Vijay picks up her favorite chocolate without a word — same one he buys every Thursday. The cashier just nods. He always gets just one.. She beams as he hands it to her and tears it open immediately.

“Heyyy… why don’t you save it for the office?” he teases.

“No use. I’ll be eating it alone there anyway. This tall 6-foot guy I’m with doesn’t even touch chocolate! He only eats oatmeal and sprouts.”

He laughs and pulls out tissues from his bag preemptively. Sure enough, she extends the wrapper for him to hold.

As they exit the mall, she asks, “Daddd, why don’t we get a newspaper at home anymore?”

He sighs lightly. “Everything’s on the tablet now. Easier to read there.”

They walk for a few moments in companionable silence. Then she pulls his hand — first gently, then with urgency. He thinks she’s trying to find a dustbin. “Wait, sweetheart. Let’s throw it at the office—”

But she interrupts him with a firmer tug.

She’s staring at a cricket bat displayed outside a sports store. A clean English willow. The one he had looked at last week with longing in his eyes.

“That’s the one, right?” she asks in a soft, reverent tone.

He nods, almost imperceptibly.

“Then why don’t you buy it?” she presses.

He doesn’t answer. His eyes are still locked on the bat, filled with memories of strokes, nets, and dreams.

She tugs again. “Dad… you love it, right? Why won’t you bring home what you love?”

He straightens. “Come on. Let’s go.”

As they near the office building, her hand slips from his. Her tone is quieter now.

“This is what you do, Dad. You don’t keep the things that you love more than yourself… " and silently murmurs within her, "I won’t be surprised if one day you leave me too.”

He stops. Just for a second. Looks down. His face unreadable.

Then, silently, he holds out his hand. She stares at the ground, lips pressed tight, then slowly takes it.

As they resume their walk, she waves cheerfully at the receptionist, standing on tiptoe — but the woman behind the desk doesn’t wave back. Doesn’t even glance. Maybe Ritwika’s too short to be seen behind the desk, but confident in her wave.&#x20;

Vijay watches, lips pressed thin, saying nothing.

They step into the elevator. She stretches to press the button, but he’s already hit 9. She lowers her hand, understanding.

Vijay had requested a separate cabin months ago. Said it helped him focus better. Truth was — he needed the space to breathe. To exist in peace with her.

At his cabin, Vijay places his bag down and tries to let go of her hand. But she doesn’t. She just holds on tighter.

Vijay stares at the desk, not saying a word. Ritwika tilts her head, studying him carefully, then says softly, "I’m sorry, Dad."

Vijay, feeling the sting of guilt for his earlier gruffness, sighs and lifts her up, placing her gently on the desk.

He comes closer, lowers his voice, and says, "Look dear… whatever we wish to have in our life, we have to earn it. If we think we don’t deserve it, we must leave — irrespective of the immense love we have towards it. But I… I will not leave you at any cost. Got it?"

Ritwika stares at him, shocked, then suddenly throws her arms around him and hugs him tightly. "I’m sorrry daadddd… I shouldn’t have said that…"

Vijay wipes away the tears that have gathered in his eyes with the tissue Ritwika was holding. As they return to their routines, she glances up and asks, "Why did you cry, Dad?"

He feigns ignorance. "When?"

"Just now."

He raises an eyebrow. "How do you know?"

"The chocolate is all around your eyes," she says with a cheeky grin. Vijay chuckles.

"Look dear… today I have a very important call. A very tough task to handle. Please do not disturb me. If you feel hungry, eat the remaining chocolate. In the afternoon, have your vegetable mix meal from the box I packed this morning…"

Before he can finish, she interrupts, mimicking his tone, "And if thirsty, take the bottle and drink. If sleepy, lay down on the table nearby. And do not disturb me!"

Vijay giggles, shaking his head, and gets back to work.

As the day unfolds, post-lunch, she starts pricking him, “Dad… you haven’t had your lunch yet… have it… eat and work…” He brushes her off gently, murmuring he’ll eat later.

Eventually, she dozes off. But her sleep is uneasy. Half an hour in, she stirs with soft hiccups, muttering in her sleep, “I......I miss you mom… I want to talk with you… why did you leave us… please come back…...”

Vijay hears her. Throws off the headphones and rushes over. He hands her the water bottle and helps her sit up, gently making her drink. She gasps, then suddenly breaks into sobs — loud, unfiltered. He holds her close.

“It’s okay dear… calm down… Papa has a lot of work to do… an important call soon… please, just stay calm…”

But her sobs don’t fade. Her kajal streaks down her pale cheeks, and her small body trembles. Vijay realizes this won’t work — he grabs the lunch wrap and takes her out for a walk.

They settle on a bench near the office ground. One side: adults playing, laughing. On the other: dogs and puppies chasing squirrels. Slowly, Ritwika’s cries fade. She claps. Giggles. The sparkle returns.

Vijay finishes the wrap. “Shall we go back now?” he asks.

She nods, grabs his hand, hopping slightly. Her plaits bounce as they head inside. Back at the cabin, he adjusts the AC and turns toward his desk—then freezes. His laptop is off. Charger disconnected. Everything unsaved.

He doesn't speak. Just rushes, plugs in, powers it back. Files are gone. Panic rises. His important evening call is in an hour.

He begins reworking — typing furiously. Meanwhile, Ritwika plays, “Vrooom vroooommm! Heyyy sshhh sshhh moveee....can't you see our coming in? Look... My dad’s a hero! he can hit youu with his fist......Ppeeeep pppeeeppp!”

Then the call alert chimes.

Vijay slaps his forehead, pushes his hair back, adjusts his glasses, and answers. “Hi Dinesh! Good evening…” Voice trembles.

Ritwika stays quiet. She knows what this call means. She whispers to her teddy, “You know… I’m going to get a remote car tonight… I’m not going to play with you anymore… pppccchhh…” then giggles. “Don’t worry. I’ll let you try it too.”

She munches the rest of her chocolate, saving one last piece. She wraps it neatly, just as —

THUD.

The laptop slams shut. Vijay bangs it in frustration.

Ritwika walks over. “What happened, Dad?”

He doesn’t reply. Pulls his shirt collar. She touches his arm. “Whhatt happ…”

He explodes. “Can’t you stay calm for a DAY? One day??”

She backs up, startled. He yells again. “You want to know what happened? It’s GONE. IT ISSS GONE! Your mom — she’s not coming back. She doesn’t like me, neither YOU. You saw what happened. Didn’t I tell you she’s not coming? Why do you keep doing this? You annoying kid. Look at your face!”

Stunned, Ritwika stares. Kajal traces still on her cheeks. Dried tears, stains of dirt smudges on her cheeks. She scratches her head at the red band plait. With her round browny eyes shining with filled tears “What have I done… daddd…” “What have I done… daddd…”

He rages. “Stay CALM. Don’t TALK. You’re a TORTURE.”

She stands still. Her hair falls unevenly — the band lost. He packs in anger  ,moving fast, furious..;

The mouse slips from his hand — she picks it up and fetches it to him with quite a fear.;

As he snatches it, her finger gets pinched. She winces, puts the finger in her mouth.

He yells, “How many times should I tell you NOT to put your dirty hands in your mouth! Such nonsense!”

He storms out. She follows. At the door, she whispers, “My band… daddd…” as tears fall quietly from one eye.

`,
    },
    {
      number: 2,
      title: "Just You, Me, and Us",
      image: "/images/chapters/story2/chapter2.jpg",
      content:`The toy store’s windows gleam with fresh glass and new dreams. As they walk past, Ritwika slows down, her eyes catching the colorful blur of the display. 
But Vijay doesn’t notice. He walks faster than usual — jaw tight, eyes fixed on his phone screen. A freshly posted picture from his ex stares back at him.
"The best day one could have… after leaving the boring things behind."
Her smile in the photo cuts through him. His fingers grip the phone tighter. His pace quickens.
Ritwika hops behind him, trying to match his stride — the usual joy in her steps exaggerated now, almost desperate. 
Her voice stays tucked away behind pursed lips. She doesn’t understand what’s wrong. She only knows he’s walking faster than ever before.
They pass the toy store. Inside, a small boy claps with wild delight as his mother pays for a shiny red remote-control car — the same one Ritwika and Vijay had spoken about 
the night before and in the morning earlier. Her eyes follow it longingly. She says nothing.
By the time they reach their building, she’s nearly running to keep up. Vijay thuds the door open, still silent, and lets go of her hand without looking back. 
He storms into the bedroom and slams that door too.
She stands still in the hallway — one hand resting on the back of a dining chair. Her fingers absently scratch the edge of the wood. Her eyes brim with tears, but none fall. 
She stares into the space he left behind.
The sound of the shower roars behind the closed door.
Moments later, he emerges, hair wet, towel around his neck. His eyes catch the untouched oatmeal bowl on the table.
“Aaaarrrggghhhhh… this has become a pain… a burden,” he mutters.
But Ritwika, still standing silently by the chair, hears something else. To her, it’s not about the oatmeal. It’s about her.
A single sniff escapes her. She raises her head slightly, rubbing one eye — and just like that, the dam breaks. Tears pour out, silently, tracing the dirt on her cheeks, 
the faint stains of a long day and longer feelings.
Vijay, meanwhile, begins clearing the dishes. The mechanical clinks of utensils filling the silence. Once done, he walks back into the hall 
and finally notices her — crouched slightly beside the chair, tears running freely now, but her body utterly still.
He freezes.
Then, quietly, he picks up his laptop bag and walks to the terrace. The wind is dry. The sky dimming. He opens the laptop and begins typing — something, anything. A report. A distraction.
But with each stroke of the keys, his vision blurs.
He doesn’t notice the first tear. Or the second. Or the third. The fourth clings to his beard.
And just as the fifth drop starts its descent —
A soft cotton gown touches his face.
Ritwika’s small hand wipes his cheek gently.
He turns around, startled. Quickly rubs his eyes, clears his throat. Tries to put on the old, steady face. But she’s there, right in front of him. 
The red rubber band in her hair now loose. The maroon bindi smudged. Her eyes puffy, stained with kajal and salt.
She doesn’t speak. Just looks at him.
He pulls her into his lap. Holds her close, holding back the tremble in his chest.
He raises his eyebrows — a silent question.
She whispers, “Dadddd… cry out. It’s fine.”
He exhales, a slow blink. “It’s fine, dear.”
Even before he can whisper a single apology, Ritwika climbs down from his lap, stands facing him, and asks, “Dadddd… am I annoying?”
He shakes his head quickly — too quickly.
“Daddd… what happened?”
He struggles for words, then gently explains. About the day, the pressure, the message, the guilt.
She listens. Not blinking.
“I’m sorry, Daddd,” she whispers.
He grabs her shoulders. “No. No, dear. I’m the one who should be sorry. I should never have spoken like that. You’re not annoying. Never. Not even once. 
Your mom always did the same thing — scream at me if I skipped lunch, lecture me if I didn’t sleep…”
His voice catches.
“Don’t ever think that again, dear. Not even in play. You are… everything my dearrrr Rittsssshhh.”
Ritwika jumps into his arms and sobs loudly this time. Words tumble out, half-choked. “I didn’t do it on purpose, Dad. Mom came in my dream this afternoon… that’s why I cried.”
Vijay tightens his arms around her, burying his face into her shoulder.
The terrace stays quiet.
Only the sound of the breeze, and two hearts slowly, quietly, breaking… and healing.
“I can understand you, my sweetheartttt…” Vijay finally says, voice soft and shaky. “Paaaapppaaaa is very sorrryyyyy…”
A few minutes later, they head back downstairs.
Ritwika, now cheerful, sprints toward the refrigerator. Vijay chuckles nervously.
“Heeeyyy, don’t run, sweetyyyy! You’ll hurt yourselffff!”
She ignores him, yanks open the fridge door, grabs a leftover chocolate bar that she had for Vijay, and walks back with a grin.
“I’m not a kid like you, Daddy — who runs into walls and blames physics!” she teases.
Vijay raises an eyebrow. “Wow... okay.”
They burst into laughter and soon find themselves in the kitchen, sleeves rolled up, cooking together. Ritwika sits at the table, legs swinging, watching him with an odd sort of curiosity.
“Daddd…” she begins slowly, “why don’t you marry someone?”
Vijay nearly drops a spoon.
“Why do you even bother about that?” he says, startled. “This is not the age where you ask questions like that, Riiitsssshhh!”
“But I need someone to play with,” she replies, completely serious. “And someone who can take care of me.”
Vijay turns to look at her — eyebrows furrowed, unsure whether to be hurt or amused.
Before he can say anything, she holds up her hand to stop him.
“I don’t mean you’re not taking good care of me. You are. But… if I had a mom, maybe she’d buy me everything I like. And she’d cook all the things I want...”
Vijay takes a spoonful of curry, blows on it, and brings it to her.
“Taste this.”
She does. Her eyes light up.
“Mmmmmmm! Dad, you’re a gem of a cook. Mom doesn’t need to cook. You cook for me!”
They giggle. Dinner is ready.
As they sit down to eat, Vijay asks quietly, “Ritsssshhhh… am I not taking good care of you?”
She looks at him with a full mouth and nods.
“You are, Dad.”
“Then the discussion ends here,” he says with mock finality, stacking his empty bowl and walking to the sink.
But Ritwika isn’t done.
“Daddd… at least if you had a wife, she could help you with dishes, and cooking… I’d have someone to talk to when you’re busy. 
She could take me to the park or school... we’d have great fun together. What do you think?”
Vijay turns around, rinsing a bowl, and walks closer to her.
“Have you forgotten what happened the last four times when Aunt Harini spoke just a little friendly with me?”
She waves it off. “That was coincidence, Dad.”
Vijay raises an eyebrow. “If it happens once or twice, it’s coincidence, Rittsssshhh. But—”
“But the first time,” she interrupts, “I already had a cold.”
“The second time,” Vijay continues, “I had severe cough from the pollution.”, she shoots at his question----
“The third time…” she hesitates, fumbles for words.
“You went breathless,” he finishes.
“And the fourth time?” she challenges.
“You went missing.”
Ritwika throws her hands up in the air. “I cannot convince you, Dad!”
She sighs dramatically, then smirks. “But Daddd… what about Uncle Darshan? It’s been a week! I heard he got rejected again by the receptionist!”
Vijay smirks, “Rittsssshhh… where are you hearing all these things?”
She shrugs innocently.
Vijay adds, “Anyway, that guy is so greedy — wanting such a beautiful girl to fall for him?”
They both laugh — but their laughter is suddenly interrupted by a loud gurgling laugh from behind.
Standing in the doorway is a six-foot man in a leather jacket.
“Come on, man! Am I not handsome?” Uncle Darshan grins.
“And you, Miss Riiiitttsssikaaa! The last time I went shopping, the saleswoman said I looked like a hero!”
“You don’t need to look like a hero, Uncle,” Ritwika grins. “You are a hero!”
Vijay and Ritwika laugh again.
Vijay asks, “So what brought you here after a whole week, Darshan?”
“Okay, okay,” Darshan raises his hands. “I heard you two missed me. You’re about to miss me again… for another week.”
Ritwika jumps up. “DUBAIIII???”
“Nope! England!” he announces dramatically, turning to Vijay. “To play for our team! Vijayyyyy… there’s a place, man. You could come! Isn’t playing at Lord’s your dream?”
Vijay pauses.
“Come on,” Darshan insists. “Why are you so stubborn?”
Before Vijay can reply, the doorbell rings. He opens the door and picks up a parcel. While he signs, Darshan nudges Ritwika.
“Convince him. You’re my last hope.”
Vijay hands the package to Ritwika.
She unwraps it slowly — and then gasps.
It’s the remote-controlled car from the store window.
She screams with delight, leaps off the table, onto the chair, then to the floor, and runs to the bedroom for batteries. Vijay pushes the couch aside, clearing space for her to play.
Darshan watches. “It’s high time, man. Get married. She needs someone. You need someone. She moved on and she is seeing another man now”
Vijay exhales as he moves furniture. “The very next day after our fight, she started chatting with that other guy like they’d been in love for years… I knew it back then.”
Darshan shakes his head, but before he can respond, Ritwika yells from the room:
“He has me! I have him! And we have you, Uncle Darshan!”
All three of them laugh.
Later after a long time of play, Darshan pulls Vijay aside again. “Think about England, man. It’s time.”
Vijay lifts Ritwika up so she can reach the top shelf. She grabs a small box and sprinkles food into the fish tank.
He kisses her forehead. She giggles and rubs it off.
“Dad, why don’t we go too?” she asks. “I saw that Instagram story. You’re not boring!”
Vijay smiles. “You forgot what happened at the office? I need to fix that tomorrow. Lot of work”
Facing Darshan, he adds, “Nothing stops when the right time comes.”
He waves. “Take care mate.... Darshan.”
“Bye Uncle Darshan!” Ritwika echoes.
As they close the door, Ritwika slips out of his arms and rushes to the couch, setting it back in place for Vijay. Vijay heads to the bedroom to set the bed properly.
It’s 10:30 PM.
He reads her a story.
She stays awake, eyes wide.
“When will a day come where you fall asleep halfway through the story?” he asks.
“Come on, Daddd,” she says. “We haven’t properly slept in months. That’s not good for our health., is that?”
“It’s very bad,” Vijay agrees nodding his head. “But, I can’t sleep if you’re awake.”
“I can’t stop thinking about Mom,” she says softly. “She’s become like an addiction.”
He checks the clock.
“It’s 1:30 AM,” he mutters.
“You know I’m like a ghost, right?” she says. “I don’t sleep like normal kids you know??? "Mr.V".”
He tickles her. “You naughty ghost!”
Then she asks, “But daadd......Why aren’t you buying that cricket bat you loved?”
“It’s expensive dear. I’ve got bills to pay.”
“But you’ll get your salary credited by month-end, right?”
“And what about next month?”
“Let’s see about that next month!” she giggles.
They laugh again, loud and unfiltered — until a phone buzz breaks the moment. saying “You’re tagged in a story.”
Vijay opens it.
His ex — laughing, riding on a bike, hand-in-hand with another man. The caption reads:
“Some people don’t even know what love means. This is called freedom.”
His smile fades.
Ritwika notices. “It’s okay, Dad. I know you miss her. But she doesn’t miss you, does she? What’s the point?”
Vijay pulls her close, smiling faintly.
“Never say that, Rittsssshhh. She’s a great woman. She always cared for us.. You’re just like her.”
Ritwika pushes him away and shouts, “I will never leave you for my friends! I will prioritize you! It’s just you, me, and us! Don’t compare me with that lady!”
She finally drifts off into sleep and the clock shows the time 3:15AM.....Vijay stares at that little smile of Ritwika for the rest of the night until he hears the wall clock chimes.
It’s 4 AM.
She finally drifts off.
Vijay gets up carefully. As he moves away, her small hand grabs his. In her sleep, she murmurs:
“Don’t leave what you love, Daddd…”
Vijay freezes.
Those words.
Simple. Unpolished.
Yet they feel like a knock on the door he’s locked for years.
He looks down at her. Curled up, peaceful. So unaware of how heavy her sentence landed.
He sits back on the bed, leaning forward, elbows on his knees.
His gaze drifts to the photo frame on the nearby table — a picture of Little Lord Krishna that he gifted to Vishika the first time they met, where little krishna looks just like Ritwika
Right next to it… a folded photo tucked behind the stand — the one he never let go of. Him and her. The only photo he kept.
He reaches for it. Holds it quietly in his hands.
Her laugh echoes in his mind — not from a video or a reel, but from memory. The way she used to laugh when he’d try to dance. 
The way her hair used to fall into her face and she’d pout, annoyed but graceful. The way she used to call him “Mr.V” when she wanted something.
And the way she looked the last day — cold. Distant. Like she’d already stepped out of the relationship before saying the words.
He swallows hard. His throat tightens.
Her Instagram story flashes in his mind again — the caption, the carefree smile, the hand wrapped around someone else's waist.
“Some people don’t even know what love means. This is called freedom.”
Freedom.
He whispers the word aloud, like it might help him understand what she meant.
Was this freedom?
Was he the prison?
He stares at the photo again.
“I wasn’t perfect,” he murmurs. “But I tried. I tried so damn hard.”
There’s a small knock — not at the door, but from inside.
Ritwika stirs again, shifting her weight, and unconsciously pulls his arm closer like a pillow.
He looks at her.
And then, slowly, the grief gives way to something gentler.
He brushes a hand through her hair.
“She’s gone,” he says softly. “But you’re here.”
His chest rises. Falls.
“Maybe… maybe you’re right my sweetheart.” and he kisses her on the forehead.`
    },
    {
      number: 3,
      title: "The Discharge",
      image: "/images/chapters/story2/chapter3.jpg",
      content: `Morning it is....
The sky is still pale.
The kind of light that makes everything look softer, quieter.
Vijay moves through the house like a whisper.
He makes tea.
Packs breakfast into small steel containers.
Folds Ritwika’s clothes.
Washes the last of the dishes Ritwika promised to clean the night before.
The radio is off. The TV is off. Even the aquarium light hasn’t been turned on yet.
There’s only the sound of footsteps, the scrape of a suitcase zipper, and the hush of a man trying not to think too hard.
He walks to the balcony with his tea and stares out.
Still no calls.
No messages.
Nothing from her.
But somehow, he’s lighter.
He sips. The breeze brushes past him.
He doesn't feel free yet.
But he doesn't feel stuck either.
And maybe that’s enough — for now.

He steps into the bedroom. Ritwika’s buried under her favorite blanket, face barely visible.
He kneels beside her and nudges her gently.
“Ritsshhh,” he whispers. “Time to get up. white today.”
Still half-asleep, she blinks. “Why white?”
He smiles faintly. “Just wear white.”
She groans. “Okay, okay…”

Thirty minutes later, Vijay stands at the door settling something inside his wallet and scratching his overly grown dense beard.
White t-shirt. Blue jeans. Old sandals.
A trolley bag by his side. A worn-out backpack slung over his shoulder.
He doesn’t look like a man going to office.
He looks like someone leaving on a trip.
Ritwika walks out in a white frock, brushing her damp hair with one hand, holding a biscuit in the other.
“Dad....there's someone standing near our main entrance door...…” she says through a yawn. 
"It's me madammm!!!" he replies sarcastically....
Ritwika runs into him and climbs on to him with excitement and asks “Where are we going dad?”
Before he can answer, the sound of a horn cuts through the silence.
Darshan’s car pulls into the parking lot — messy as always, music slightly too loud.
“Dadddd…” she says, tilting her head with a sly smile.
“No wonder Mom fell for you. You look so handsome dadd....And this beard? Wooooow. Such a manly look.”
Vijay chuckles softly, not meeting her eyes.
“Your mom loved the beard,” he says, voice quiet but sure.
Ritwika, without missing a beat, murmurs under her breath—barely loud enough:
“I know.”
He pauses for a second. A flicker of something in his chest.

Darshan parks his car, hops out,and gently brushes the hair of ritwika and says....
“Come on, smart mouth. Let’s hit the road. Go bring any toys if needed....”

Approaches VIjay who is adjusting the trolley inside the trunk...
Soooo mmmaaannnnn!!! You up for something??? big??”
Vijay just nods and closes the trunk...Blinks his eyes
He opens the back door with a flair. “Your royal chariot awaits, Princess Ritttssshhhhh.”

Vijay lifts her into the back seat, buckles her seatbelt — a little too carefully, a little too slow.
She looks up at him again.
“Dad… where are we going?”
He meets her eyes.
Before he can say anything, Darshan leans out the window and screams:
“ALL THE WAY TO ENGLANNNNNNDDDD!!!”
Ritwika’s eyes go wide.
Vijay exhales, finally smiling.
Not a performative smile. Not a protective one.
Just… peace.`
    },
    {
      number: 4,
      title: "The Familiar Stranger",
      image: "/images/chapters/story2/chapter4.jpg"
    }
  ]
},
{
 title: "Skybound",
  tagline: "Touch the edge of the worlds unknown",
  image: "/images/book-thumbnails/eclipse-runner.jpg",
  slug: "the-sky",
  genre: "Drama",
  order:3,
  comingSoon: true
},
{
 title: "Celestial Code",
  tagline: "Decipher the language of stars",
  image: "/images/book-thumbnails/dreamy-sci-fi.jpg",
  slug: "celestial-code",
  genre: "Drama",
  order:4,
  comingSoon: true
}  ];

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB...');
    await Story.deleteMany({}); // Clear existing stories (optional)
    await Story.create(sampleStory);
    console.log('Sample story inserted.');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('MongoDB seed error:', err);
  });
