import axios from 'axios'
//const baseUrl = 'http://localhost:3001/notes'
const baseUrl = 'http://localhost:3001/api/notes'
/*const getAll = () => {
	// Return whole response:
	// return axios.get(baseUrl)
	// Return only data:
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}*/

const getAll = () => {
	const request = axios.get(baseUrl)
	const nonExisting = {
	  id: 10000,
	  content: 'This note is not saved to server',
	  date: '2019-05-30T17:30:31.098Z',
	  important: true,
	}
	return request.then(response => response.data.concat(nonExisting))
  }

const create = newObject => {
	// Return whole response:
	// return axios.post(baseUrl, newObject)
	// Return only data:
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

const update = (id, newObject) => {
	// Return whole response:
	// return axios.put(`${baseUrl}/${id}`, newObject)
	// Return only data:
	//console.log(`attempting put with new note ${newObject} with ${id}`);
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then(response => response.data)

}
const exp = { getAll, create, update }
export default exp/* {
	getAll: getAll,
	create: create,
	update: update
}*/