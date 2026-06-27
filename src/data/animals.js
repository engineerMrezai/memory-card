export const ANIMAL_POOL = [
  'Lion',
  'Tiger',
  'Elephant',
  'Panda',
  'Giraffe',
  'Zebra',
  'Monkey',
  'Penguin',
  'Koala',
  'Fox',
  'Owl',
  'Dolphin',
  'Kangaroo',
  'Sloth',
  'Flamingo',
  'Otter'
]

export function pickAnimals(count) {
  const shuffled = [...ANIMAL_POOL].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
