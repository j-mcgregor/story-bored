// eslint-disable-next-line @typescript-eslint/no-var-requires
const language = require('@google-cloud/language');

async function quickstart() {
  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text =
    'You purchase a piano keyboard. The keyboard arrives, you scroll through the sounds. One of the sounds is called \'Experiment F91\'. A secret drawer slides out of the keyboard and reveals a piece of paper with simple sheet music on it. Each measure has labels like "Kill," and "Create" on it';

  const document = {
    content: text,
    type: 'PLAIN_TEXT'
  };

  // Detects the sentiment of the text
  const [sentimentResult] = await client.analyzeSentiment({ document: document });
  const sentiment = sentimentResult.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);

  const sentences = sentimentResult.sentences;
  sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
  });

  // Detects the entities of the text
  const [entityResult] = await client.analyzeEntities({ document });

  const entities = entityResult.entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
  });

  // Detects syntax in the document
  const [syntax] = await client.analyzeSyntax({ document });

  console.log('Tokens:');
  syntax.tokens.forEach(part => {
    console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
    console.log(`Morphology:`, part.partOfSpeech);
  });
}

quickstart().catch(console.error);
