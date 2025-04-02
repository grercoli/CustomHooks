import { useEffect } from "react";
import useFetch from "../hooks/useFetch"

const URL = "https://jsonplaceholder.typicode.com/users"

const FetchApp = () => {

  const { data, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(URL, "GET")
  }, [])

  return (
    <>
      <h2>List of users</h2>
      {isLoading ? <p>Loading...</p> : error ? <p>There was an error:</p> : 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  )
}

export default FetchApp
