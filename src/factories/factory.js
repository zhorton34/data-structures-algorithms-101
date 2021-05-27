const DEFAULT = { min: 0, max: 1000000 }

class Factory
{
	static DummyArray (min = DEFAULT.min, max = DEFAULT.max)
	{
		let dummy = (new Array(Factory.DummyInteger(min, max))).fill(0)  
		
		return dummy.map(Factory.DummyInteger)
	}

	static DummyInteger (min = DEFAULT.min, max = DEFAULT.max)
	{
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}


module.exports = Factory
