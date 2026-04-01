import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCo4PdCfceBp18qNWamwBMPs5dlDVluNhE');

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
});

async function run() {
  try {
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage('hii');
    const response = await result.response;
    console.log("Success:", response.text());
  } catch (err) {
    import('fs').then(fs => fs.writeFileSync('err.json', JSON.stringify(err, null, 2)));
  }
}

run();
