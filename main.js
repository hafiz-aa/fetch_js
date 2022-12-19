const endPoint = "https://reqres.in/api/users"

// fetch(endPoint)
// 	.then(result => result.json())
// 	.then(({ data }) => console.log(data))

async function hitAPI() {
	const api = await fetch(endPoint)
	const { data } = await api.json()
	console.log(data)
}

hitAPI()