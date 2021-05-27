module.exports = (it, expect, { api }) => {
	it ('should sort from low to high', () => {
		let dummy = api.factory.DummyArray(100, 1000)

		expect(api.sorts.quick(dummy)).to.eql(dummy.sort((a,b) => a-b))
	})

	it ('should sort with O(n log n) most of the time', () => {
		let i = 0
		let assertions = []
		while (i < 100) {
			let dummy = api.factory.DummyArray(10, 100)
			let operations = 0
			api.sorts.quick(dummy, [], [], () => operations++)

			let n = dummy.length
			let logN = Math.log(n)
		
			let assert = {
				nLogn: (n * Math.log(n)) >= operations,
				quadratic: (n * n) >= operations
			}
			
			assertions.push(assert.nLogn)

			expect(assert.quadratic).to.eql(true)			
			
			i++
		}

		let nLogNTimes = (assertions.filter((item) => item === true).length) / assertions.length
		let nLogNAssertion = nLogNTimes >= 0.90
		console.log(nLogNTimes)
		expect(nLogNAssertion).to.eql(true)
	})
};