
import React, { useState } from 'react';
import clientsVerify from '../dummydata/utilverifyloans';
import TableHeader from './tabeleheaderstyle';

const ViewVerified = () => {
  const [clients, setClients] = useState(clientsVerify);

  const handleVerify = (clientId) => {
    const updatedClients = clients.map((client) =>
      client.id === clientId ? { ...client, verified: true } : client
    );
    setClients(updatedClients);
  };
const rowStyle = "border-b-2 text-sm p-2"

  return (

    <div className="mx-auto mt-20 container justify-center text-black  w-screen">
      <div className="grid grid-cols-8 bg-white border mx-auto mb-80">
        <TableHeader text = "Id" />
        <TableHeader text = "Full Name"/>
        <TableHeader text = "Home Address"/>
        <TableHeader text = "Work Address"/>
        <TableHeader text = "Status"/>
        <TableHeader text = "Comment"/>
        <TableHeader text = "Date Created"/>
        <TableHeader text = "Verify"/>
       
        {clients.map((client) => (
          <React.Fragment key={client.id}>
            <div className={rowStyle}>{client.id}</div>
            <div className={rowStyle}>{client.name}</div>
            <div className={rowStyle}>{client.homeAddress}</div>
            <div className={rowStyle}>{client.workAddress}</div>
            <div className={rowStyle}>
              <span className={client.verified ? 'text-green-500' : 'text-red-500'}>
                {client.verified ? 'Verified' : 'Not Verified'}
              </span>
            </div>
            <div className={rowStyle}>{client.comment}</div>
            <div className={rowStyle}>{client.createdDate}</div>
            <div className="text-sm p-2 border-b-2">
              {!client.verified && (
                <button
                  className="text-sm px-2 py-1 bg-blue-400 text-white rounded-md"
                  onClick={() => handleVerify(client.id)}
                >
                  Verify
                </button>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ViewVerified;
