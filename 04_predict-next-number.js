const brain = require('brain.js');

const network = new brain.recurrent.LSTMTimeStep()

data = [];

start = 0;
end = 10;
column_count = 2;

for (let row = start; row < end; row++){
	
	let column = [];
	
	for (var col = 0; col < column_count; col++) {
		column.push(row + col);		
	}

	data.push(column);
}

console.log('data:', data);
console.log('predicting, please wait ...');

network.train(data);

// Predict what's the next number from the giver range (start to end)
const output = network.run([5]);

console.log('Next Number is ' , Math.round(output));