import React from "react";
import { Link } from "react-router-dom";

const Table = ({ nick, name, email, website, id}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td><Link to={`/user/${id}`}>{nick}</Link></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{website}</td>
         </tr>
    )
}

export default Table;