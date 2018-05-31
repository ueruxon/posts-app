import React from "react";

const CurrentUser = ({ userInfo }) => {
    const createInfoTable = () => {
        if (!userInfo) return null;

        const { name, website , username, email } = userInfo;

        return (
            <tr>
                <th scope="row">{username}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
        )
    }

    const createInfoContact = () => {
        if (!userInfo) return <div>Loading...</div>

        const { phone, company: { name }, address: { street, suite, city } } = userInfo;

        return (
            <address>
                <p>Name company: <strong>{name}</strong></p>
                <p>{city}, {street}, {suite}</p>
                <p>Phone: <strong>{phone}</strong></p>
            </address>
        )
    }
    
    return (
        <section className="block-content">
            <div className="separator">
                <div className="separator-right">
                    {createInfoContact()}
                </div>
                <div className="separator-left">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">NickName</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {createInfoTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default CurrentUser;