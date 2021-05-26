module.exports = (it, expect) => {
	it ('should return "Hello World" rule', () => {
		expect('Hello World').to.eql('Hello World')
	})
};
