const endPoint = "https://reqres.in/api/users"

fetch(endPoint, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		email: "hafiz@gmail.com",
		firstName: "Hafiz"
	}),
})
	.then((result) => result.json())
	.then((data) => console.log(data))

// async function hitAPI() {
// 	const api = await fetch(endPoint)
// 	const { data } = await api.json()
// 	console.log(data)
// }

// hitAPI()