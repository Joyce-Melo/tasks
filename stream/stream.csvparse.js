import { parse } from 'csv-parse'; //Module to parse data
import fs from 'node:fs'; //Built in node module to work wit the file system

const csvPath = new URL('./stream.tasks.csv', import.meta.url); //creating a new url, impor.meta.url is used to get the current url, as tasks.csv is the current url

const stream = fs.createReadStream(csvPath); //creating a readable stream

const csvParse = parse({ 
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2 // skip the header line
});

async function run() { 
  const linesParse = stream.pipe(csvParse);

  for await (const line of linesParse) {
    const [title, description] = line;

    await fetch('http://localhost:4004/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      })
    })
    /**This section of code reads data from the stream and parses it using the csvParse object created earlier. The pipe() method of the stream object is used to connect the csvParse object and the stream.

Then, a for-await-of loop is used to iterate through each line of the parsed CSV data. Each line of data contains an array of values, which in this case, are the title and description of a task.

For each line, the code sends an HTTP POST request to a local server at http://localhost:3333/tasks, with the title and description as JSON in the request body. The await keyword is used to wait for the server to respond before continuing to the next line. */

    // Uncomment this line to see the import working in slow motion (open the db.json)
    // await wait(1000)
  }

}

run()

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
//This function returns a Promise that resolves after a specified number of milliseconds. It's not used in the rest of the code, but it can be used to pause the execution of the program for a given amount of time.