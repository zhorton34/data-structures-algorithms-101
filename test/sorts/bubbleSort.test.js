module.exports = (it, expect, { api }) => {
	it ('should sort from low to high', () => {
		let dummy = [5,4,2,1,4,5]
		expect(api.sorts.bubble(dummy)).to.eql([1,2,4,4,5,5])
	})

	it ('should sort in quadratic time', () => {
		let operations = 0
		let dummyArray = [3,2,1,4,5]
		api.sorts.bubble(dummyArray, () => operations++)

		expect(operations).to.eql(dummyArray.length * dummyArray.length)
	})
};
