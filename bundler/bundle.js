
const { readFileSync, readdirSync, writeFileSync } = require('fs');

const DIRECTORIES = ["data-structures", "searches", "sorts"]


let documented = DIRECTORIES.reduce((docs, folder) => {

	let methods = readdirSync(`docs/api/${folder}/`, 'utf-8');


	let tableOfContents = methods.map(
		(file) => `- [${file.replace('.md', '')}](#${file.replace('.md', '').toLowerCase()})`)
	.join('\n');


	return [
		...docs,
		{
			tableOfContents,
			documentation: methods.map((file) => {
				let content = readFileSync(`docs/api/${folder}/${file}`, 'utf-8');
				let lines = content.split('\n')

				lines[0] = `${lines[0]}`;
				lines.pop();
				lines.pop();

				content = lines.join('\n');
				content = content.replace(/(\r\n|\r|\n){2,}/g, '$1\n');

				return content
		
			}).join('\n\n')
		}
	]

}, [])


const bundle = file => readFileSync(`bundler/${file}.md`, 'utf-8');
const ReadMe = (content = []) => writeFileSync('README.md', content.join('\n\n'));
const ChangeLog = (content = []) => writeFileSync('CHANGELOG.md', content.join('\n\n'));

ChangeLog([bundle('change_log')]);
ReadMe([
	...['badges'].map(bundle),
	...[documented[0].tableOfContents, documented[0].documentation],
	...[documented[1].tableOfContents, documented[1].documentation],
	...['installation', 'contribute', 'change_log', 'versioning', 'license'].map(bundle),
]);