import React, { useState } from 'react';

const ViewVerified = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'Client 1', verified: false, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', comment: "Unknown Address", createdDate: '2023-01-15' },
    { id: 2, name: 'Client 2', verified: false, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', comment: "relocated", createdDate: '2023-02-10' },
    { id: 3, name: 'Client g', verified: true, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', comment: " Location confirmed", createdDate: '2023-03-05' },
    { id: 1, name: 'Client 4', verified: false, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', homeAddress: '123 Main St, Cityville', createdDate: '2023-04-20' },
    { id: 2, name: 'Client 5', verified: false, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', comment: "cancellation ", createdDate: '2023-05-15' },
    { id: 3, name: 'Client 12', verified: true, homeAddress: '123 Main St, Cityville', workAddress: '456 Office St, WorkCity', comment: "Address located", createdDate: '2023-06-02' },
    // Add more clients as needed
  ]);

  const handleVerify = (clientId) => {
    const updatedClients = clients.map((client) =>
      client.id === clientId ? { ...client, verified: true } : client
    );
    setClients(updatedClients);
  };

  return (
    <div className="mx-auto mt-20 container justify-center content-center w-screen">
      <table className="w-10/12 bg-white border mx-auto mb-80">
        <thead>
          <tr>
            <th className="text-left p-3 text-sm border-b-2 bg-gray-400">ID</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Full Name</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Home Address</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Work Address</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Status</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Comment</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Date Created</th>
            <th className="text-left text-sm border-b-2 bg-gray-400">Verify</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border-b-2 text-sm">{client.id}</td>
              <td className="border-b-2 text-sm p-2">{client.name}</td>
              <td className="border-b-2 text-sm p-2">{client.homeAddress}</td>
              <td className="border-b-2 text-sm p-2">{client.workAddress}</td>
              <td className="border-b-2 text-sm p-2">
                <span className={client.verified ? 'text-green-500' : 'text-red-500'}>
                  {client.verified ? 'Verified' : 'Not Verified'}
                </span>
              </td>
              <td className="border-b-2 text-sm p-2">{client.comment}</td>
              <td className="border-b-2 text-sm p-2">{client.createdDate}</td>
              <td className="text-sm p-3 border-b-2">
                {!client.verified && (
                  <button
                    className="text-sm px-2 py-1 bg-blue-400 text-white rounded-md"
                    onClick={() => handleVerify(client.id)}
                  >
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewVerified;
