import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", )
      .then((Response) => {
        console.log(Response.data);
        setData(Response.data);
      });
  }, []);

  return (
    <div className="container-fluid px-5 pt-5">
      <div className="row">
        <h2 className="text-center mb-5">User Details</h2>
        {data.map((users, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <Card className="bg-dark text-white text-center">
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                height={150}
              />
              <Card.Body>
                <h3 className="text-nowrap">{users.name}</h3>
                <p className="fs-6">UserName: {users.username}</p>
                <p className="fs-6">Email: {users.email}</p>
                <p className="fs-6">City: {users.address.city}</p>
                <p className="fs-6">Phone: {users.phone}</p>
                <p className="fs-6">Website: {users.website}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserData;
