import React from "react";

import Table from "./usersTable";

const UsersList = ({ users }) => {

    const usersTable = users.map(user => (
        <Table key={user.id} 
                id={user.id}
                nick={user.username}
                name={user.name}
                email={user.email}
                website={user.website} />
    ));
    
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NickName</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {usersTable}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;