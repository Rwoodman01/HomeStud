import { Question } from '../../types';

export const AUDIT_QUESTIONS: Question[] = [
  // --- PILLAR 1: FOUNDATION ---
  {
    id: 1,
    pillar: 'Foundation',
    type: 'choice',
    text: 'The Morning Mark: How consistently do you rise before the sun to prepare for the day?',
    options: [
      { label: 'Rarely. I wake up when I have to.', value: 1 },
      { label: 'Inconsistent. I try, but the snooze button wins.', value: 2 },
      { label: 'Most days. I have a routine, but it lacks teeth.', value: 3 },
      { label: 'Clockwork. I am up, equipped, and moving.', value: 5 },
    ]
  },
  {
    id: 2,
    pillar: 'Foundation',
    type: 'choice',
    text: 'The Daily Plan: Do you operate from a written list of objectives?',
    options: [
      { label: 'No plan. I react to fires as they arise.', value: 1 },
      { label: 'Mental notes only.', value: 2 },
      { label: 'I write a list, but often drift off course.', value: 3 },
      { label: 'The Night Before. My orders are written and executed.', value: 5 },
    ]
  },
  {
    id: 3,
    pillar: 'Foundation',
    type: 'choice',
    text: 'Restoration: How would you rate the quality of your sleep and recovery?',
    options: [
      { label: 'Ragged. I run on fumes and caffeine.', value: 1 },
      { label: 'Average. I get by.', value: 3 },
      { label: 'Restored. I prioritize sleep as a weapon.', value: 5 },
      { label: 'Variable. Some nights good, some nights terrible.', value: 2 },
    ]
  },
  {
    id: 4,
    pillar: 'Foundation',
    type: 'text',
    text: 'Harlan asks: "When you miss your morning mark, what usually trips you up?"'
  },

  // --- PILLAR 2: FITNESS ---
  {
    id: 5,
    pillar: 'Fitness',
    type: 'choice',
    text: 'Active Duty: How many days a week do you intentionally train?',
    options: [
      { label: '0-1 days. Too busy.', value: 0 },
      { label: '2-3 days. Maintenance mode.', value: 3 },
      { label: '4+ days. I am building the engine.', value: 5 },
      { label: 'Sporadic. I go hard for a week, then quit.', value: 2 },
    ]
  },
  {
    id: 6,
    pillar: 'Fitness',
    type: 'choice',
    text: 'Fuel: How clean is your intake?',
    options: [
      { label: 'Junk. Convenience rules my diet.', value: 1 },
      { label: 'Decent. I try to eat well but slip often.', value: 3 },
      { label: 'Dialed in. Fuel for the mission.', value: 5 },
      { label: 'Emotional. I eat when stressed.', value: 2 },
    ]
  },
  {
    id: 7,
    pillar: 'Fitness',
    type: 'choice',
    text: 'Vigor: Do you have the energy to lead effectively at 6:00 PM?',
    options: [
      { label: 'No. I am spent and just want the couch.', value: 1 },
      { label: 'Barely. I push through the fog.', value: 3 },
      { label: 'Yes. My engine runs hot all day.', value: 5 },
      { label: 'It depends on how much coffee I’ve had.', value: 2 },
    ]
  },
  {
    id: 8,
    pillar: 'Fitness',
    type: 'text',
    text: 'Harlan asks: "How does your physical state affect your ability to lead your home?"'
  },

  // --- PILLAR 3: FINANCE ---
  {
    id: 9,
    pillar: 'Finance',
    type: 'choice',
    text: 'Readiness: Do you have 3-6 months of expenses in a liquid war chest?',
    options: [
      { label: 'No. Living paycheck to paycheck.', value: 0 },
      { label: 'I have about 1 month.', value: 2 },
      { label: 'Almost there. Building it now.', value: 4 },
      { label: 'Yes. The perimeter is secure.', value: 5 },
    ]
  },
  {
    id: 10,
    pillar: 'Finance',
    type: 'choice',
    text: 'Debt Load: What is your relationship with consumer debt?',
    options: [
      { label: 'Drowning. It controls my decisions.', value: 0 },
      { label: 'Manageable, but it’s there.', value: 2 },
      { label: 'Aggressively paying it down.', value: 4 },
      { label: 'Zero. I am a free man.', value: 5 },
    ]
  },
  {
    id: 11,
    pillar: 'Finance',
    type: 'choice',
    text: 'Offense: Are you actively building assets outside of your primary labor?',
    options: [
      { label: 'No. Just my salary.', value: 1 },
      { label: 'Thinking about it, but no action yet.', value: 2 },
      { label: 'Yes, started small investments.', value: 4 },
      { label: 'Yes, building a legacy portfolio.', value: 5 },
    ]
  },
  {
    id: 12,
    pillar: 'Finance',
    type: 'text',
    text: 'Harlan asks: "If you stopped working today, what’s the first thing that breaks?"'
  },

  // --- PILLAR 4: FAMILY ---
  {
    id: 13,
    pillar: 'Family',
    type: 'choice',
    text: 'Presence: When you are home, are you actually *there*?',
    options: [
      { label: 'Physically yes, mentally no. Phone in hand.', value: 1 },
      { label: 'I try, but work bleeds over.', value: 3 },
      { label: 'Yes. Phones down. Eyes up.', value: 5 },
      { label: 'Sometimes. Depends on the day.', value: 2 },
    ]
  },
  {
    id: 14,
    pillar: 'Family',
    type: 'choice',
    text: 'Leadership: Do you lead the spiritual and emotional tone of the house?',
    options: [
      { label: 'I defer to my wife.', value: 1 },
      { label: 'I participate, but don’t lead.', value: 2 },
      { label: 'I lead inconsistently.', value: 3 },
      { label: 'I set the azimuth and hold the standard.', value: 5 },
    ]
  },
  {
    id: 15,
    pillar: 'Family',
    type: 'choice',
    text: 'Date Night: Do you court your wife?',
    options: [
      { label: 'Rarely. We are roommates.', value: 1 },
      { label: 'On special occasions only.', value: 2 },
      { label: 'We try for once a month.', value: 3 },
      { label: 'Weekly. It is non-negotiable.', value: 5 },
    ]
  },
  {
    id: 16,
    pillar: 'Family',
    type: 'text',
    text: 'Harlan asks: "Describe the man your wife needs you to be vs. who showed up yesterday."'
  },

  // --- PILLAR 5: SPIRIT/FUN ---
  {
    id: 17,
    pillar: 'Spirit',
    type: 'choice',
    text: 'Adventure: When was the last time you did something that scared you slightly?',
    options: [
      { label: 'Can’t remember. Safe and secure.', value: 1 },
      { label: 'Years ago.', value: 2 },
      { label: 'A few months ago.', value: 4 },
      { label: 'Recently. I seek the edge.', value: 5 },
    ]
  },
  {
    id: 18,
    pillar: 'Spirit',
    type: 'choice',
    text: 'Brotherhood: Do you have men who know your darkest struggles?',
    options: [
      { label: 'No. I walk alone.', value: 0 },
      { label: 'I have buddies, but we keep it surface level.', value: 2 },
      { label: 'I have one man I trust.', value: 4 },
      { label: 'I have a council. I am fully known.', value: 5 },
    ]
  },
  {
    id: 19,
    pillar: 'Spirit',
    type: 'choice',
    text: 'Hobbies: Do you create or consume?',
    options: [
      { label: 'Consume. TV, scrolling, watching sports.', value: 1 },
      { label: 'I dabble in things occasionally.', value: 3 },
      { label: 'Create. I build, fix, hunt, or make.', value: 5 },
      { label: 'I used to create, but stopped.', value: 2 },
    ]
  },
  {
    id: 20,
    pillar: 'Spirit',
    type: 'text',
    text: 'Harlan asks: "What is one thing you used to love doing before the \'grind\' took over?"'
  }
];