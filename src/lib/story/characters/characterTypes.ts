// eslint
export default {
  PROTAGONIST: {
    type: 'PROTAGONIST',
    category: 'role',
    description:
      'The star of the show. Most of the action centers around them, and they’re the one we’re meant to care about the most. Every single story has to have a protagonist, no matter what. All other roles are defined in relation to the protagonist',
    examples: [
      'Harry Potter',
      'Frodo Baggins',
      'Katniss Everdeen',
      'John McClane',
      'Dorothy Gale',
      'Hercule Poirot',
      'Indiana Jones',
      'Walter White'
    ]
  },
  ANTAGONIST: {
    type: 'ANTAGONIST',
    category: 'role',
    description:
      'The heros opposite: their role is to undermine, thwart, battle, or otherwise oppose one character: the protagonist. Antagonists usually play just as important a role in a story as their protagonistic counterparts, but they may not be seen as much. They tend not to narrate stories and often operate in secret. Indeed, the question of “What will the antagonist do next?” can be a source of great narrative tension in a story',
    examples: ['Sauron', 'Voldemort', 'The White Witch', 'Count Olaf']
  },
  DEUTERAGONIST: {
    type: 'DEUTERAGONIST',
    category: 'role',
    description:
      'This is the character who’s not exactly in the spotlight, but pretty close to it. They’re often seen in the company of the protagonist — giving advice, plotting against their rivals, and generally lending a helping hand. Their presence and close relationship to the protagonist gives the story warmth and heart, so it’s not just about the hero’s journey, but about the friends they make along the way',
    examples: [
      'Ron and Hermione',
      'Samwise Gamgee',
      'Lumiere and Cogsworth',
      'Jane Bennet',
      'Dr. Watson',
      'Mercutio'
    ]
  },
  TERTIARY: {
    type: 'TERTIARY',
    category: 'role',
    description:
      'They flit in and out of the MC’s life, perhaps only appearing in one or two scenes throughout the book. A well-rounded story still requires a few tertiaries. We all have them in real life, after all — the barista you only see once a week, the random guy you sit next to in class — so any realistic fictional story should include them too',
    examples: [
      'Radagast in The Lord of the Rings',
      'Padma and Parvati Patil in Harry Potter',
      'Calo and Fabrizio in The Godfather',
      'Madame Stahl in Anna Karenina'
    ]
  },
  CONFIDANTE: {
    type: 'CONFIDANTE',
    category: 'role',
    description:
      'Confidants are often best friends, but they may also be a potential love interest or even a mentor. The protagonist shares their thoughts and emotions with this person, even when they’re reluctant to share with anyone else. However, the confidant might also be someone the MC turns to, not because they want to, but because they feel they have no other choice',
    examples: [
      'Horatio',
      'Friar Laurence',
      'Alfred Pennyworth',
      'Mrs Lovett',
      'Jacob Black',
      'Dumbledore',
      'Hannibal Lecter'
    ]
  },
  LOVE_INTEREST: {
    type: 'LOVE_INTEREST',
    category: 'role',
    description:
      'This love interest is typically a deuteragonist, but not exclusively. You’ll recognize a love interest by the protagonist’s strong reaction to them, though that reaction can vary widely. Some love interests make their MC swoon; others make them scoff. The protagonist often denies their feelings for this person at first, or vice-versa, which is a great plot-thickening device',
    examples: [
      'Mr. Darcy',
      'Daisy Buchanan',
      'Romeo/Juliet',
      'Peeta Mellark',
      'Edward Cullen',
      'Mary Jane Watson'
    ]
  },
  FOIL: {
    type: 'FOIL',
    category: 'role',
    description:
      'A foil is someone whose personality and values fundamentally clash with the protagonist’s. This clash highlights the MC’s defining attributes, giving us a better picture of who they truly are. Though these two often have an antagonistic relationship, the foil is not usually the primary antagonist. Sometimes the MC and their foil clash at first, but eventually see past their differences to become friends… or even more',
    examples: [
      'Draco Malfoy',
      'Effie Trinket',
      'Lydia Bennet',
      'George and Lennie',
      'Kirk and Spock'
    ]
  },
  DYNAMIC_CHANGING: {
    type: 'DYNAMIC_CHANGING',
    category: 'quality',
    description:
      'a dynamic character is one who changes over the course of story. They often evolve to become better or wiser, but sometimes they can devolve as well — many villains are made through a shift from good to evil, like Anakin Skywalker and Harvey Dent. The protagonist of your story should always be dynamic, and most of the deuteragonists should be as well. However, you don’t need to make the changes super obvious in order for your audience to catch on. In the course of your narrative journey, these changes should come about subtly and naturally',
    examples: [
      'Elizabeth Bennet',
      'Don Quixote',
      'Ebenezer Scrooge',
      'Neville Longbottom',
      'Han Solo',
      'Walter White'
    ]
  },
  STATIC_UNCHANGING: {
    type: 'STATIC_UNCHANGING',
    category: 'quality',
    description:
      'Static figures tend to be unlikable, such as Cinderella’s stepsisters and Harry Potter’s aunt and uncle — their ignorance to how they’re mistreating our hero makes them people we “love to hate,” and boosts our sympathy for the protagonist. They may also impart a lesson to the reader: you don’t want to end up like me',
    examples: [
      'Mr Collins',
      'Miss Havisham',
      'Harry and Zinnia Wormwood (Matilda’s parents)',
      'Sherlock Holmes (a rare static protagonist)',
      'Karen Smith'
    ]
  },
  STOCK: {
    type: 'STOCK',
    category: 'quality',
    description:
      'Similar to archetypes, stock characters are those familiar figures that appear in stories time after time: the chosen one, the joker, the mentor. You don’t want to overuse them, but they can really help round out your cast and make readers feel “at home” in your story. The trick to using this type is to not just rely on their archetypal features. So when planning a character, you might start out with a stock, but you have to embellish and add other unique elements to give them depth',
    examples: [
      'Albus Dumbledore',
      'Scout Finch (the child) - To Kill a Mockingbird',
      'Nick Bottom (the fool) - Midsummer Nights Dream',
      'Haymitch Abernathy (the mentor) - Hunger Games'
    ]
  },
  SYMBOLIC: {
    type: 'SYMBOLIC',
    category: 'quality',
    description:
      'A symbolic character is used to represent something larger and more important than themselves, which usually ties into the overall message of the book or series. This type must also be used sparingly — or at least subtly, so the reader doesn’t feel like the symbolism is too heavy-handed. As a result, the true nature of a symbolic character may only be fully understood at the very end of a story',
    examples: ['Aslan', 'Jay Gatsby', 'The Oracle (The Matrix)']
  },
  ROUND: {
    type: 'ROUND',
    category: 'quality',
    description:
      'A round character is very similar to a dynamic one, in that they both typically change throughout their character arc. The round character has a full backstory (though not always revealed in the narrative), complex emotions, and realistic motivations for what they do. This doesn’t necessarily mean they’re a good person — indeed, many of the best round characters are deeply flawed. But you should still be interested and excited to follow their arc because you can never be quite sure where they’ll be led or how they’ll change. Needless to say, the vast majority of great protagonists are not only dynamic, but also round',
    examples: [
      'Amy Dunne',
      'Atticus Finch',
      'Humbert Humbert',
      'Randle McMurphy',
      'Michael Corleone'
    ]
  }
};
