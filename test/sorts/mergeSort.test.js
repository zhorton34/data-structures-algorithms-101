module.exports = (it, expect, { api }) => {
	it ('should sort from low to high', () => {
		let dummy = [5,4,2,1,4,5]
		expect(api.sorts.merge(dummy)).to.eql([1,2,4,4,5,5])
	})

	it ('should sort with O(n log n) time complexity', () => {
		let dummy = api.factory.DummyArray(100, 1000)
		let operations = 0
		api.sorts.merge(dummy, () => { operations++ })

		let n = dummy.length 
		let logN = Math.log(n)
		let assertion = (n * logN) >= operations
		expect(assertion).to.eql(true)
	})
};