module.exports = (it, expect, { api }) => {
	it ('should sort from low to high', () => {
		let dummy = [5,4,2,1,4,5]
		expect(api.sorts.insert(dummy)).to.eql([1,2,4,4,5,5])
	})
};