const execa = require('execa')

const p = execa('wrong-path')
p.on('error', (err) => {
	console.log(err) // never called in Windows, but called in Linux
})

setTimeout(() => {}, 1000)
