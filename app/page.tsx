import os from 'os';
// import React, { useState, useEffect } from 'react';

export default function Home() {

  // const [hostname, setHostname] = useState<string | null>(null);
  // const [publicIPAddress, setPublicIpAddress] = useState<string | null>(null);

  // useEffect(() => {
  //   // Fetch hostname (placeholder example)
  //   const getHostName = () => {
  //     return window.location.hostname; // Browser-safe alternative to `os.hostname()`
  //   };

  //   // Fetch IP address using a public API since os.networkInterfaces() is server-side
  //   const getPublicIPAddr = async () => {
  //     try {
  //       const response = await fetch('https://api.ipify.org?format=json');
  //       const data = await response.json();
  //       return data.ip; // Public IP address
  //     } catch (error) {
  //       console.error('Error fetching IP address:', error);
  //     }
  //   };

  //   setHostname(getHostName());
  //   getPublicIPAddr().then((ip) => setPublicIpAddress(ip));
  // }, []);

  const getPublicIPAddr = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip; // Public IP address
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };


  const getHostName = () => {
    return os.hostname();
  }

  const getPrivateIPAddr = () => {
    const interfaces = os.networkInterfaces();
    for(const name of Object.keys(interfaces)) {
      if(interfaces[name]) {
        for(const net of interfaces[name]) {
          if(net.family === 'IPv4' && !net.internal) {
            return net.address; // Return private IP address
          }
        }
      }
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h1 text-center text-lg text-yellow-500">Supriya's Website</div>
        <div className="flex text-center justify-center text-justify">
          <div className="flex-auto text-center align-center h1 text-lg whitespace-normal text-blue-200">{`Hostname:`}</div>
          <div className="flex-auto text-center h1 text-lg text-blue-500">{getHostName()}</div>
        </div>
        <div className="flex text-center justify-center">
          <div className="flex-auto text-center align-center h1 text-lg whitespace-normal text-orange-200">{`Private IP Address:`}</div>
          <div className="flex-auto text-center h1 text-lg text-orange-500">{getPrivateIPAddr()}</div>
        </div>
        <div className="flex text-center justify-center">
          <div className="flex-auto text-center align-center h1 text-lg whitespace-normal text-orange-200">{`Public IP Address:`}</div>
          <div className="flex-auto text-center h1 text-lg text-orange-500">{getPublicIPAddr()}</div>
        </div>
      </main>
    </div>
  );
}

// 'use client'; // Ensure the page is rendered on the client-side only

// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [hostname, setHostname] = useState<string | null>(null);
//   const [ipAddress, setIpAddress] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch hostname (placeholder example)
//     const getHostName = () => {
//       return window.location.hostname; // Browser-safe alternative to `os.hostname()`
//     };

//     // Fetch IP address using a public API since os.networkInterfaces() is server-side
//     const getIPAddr = async () => {
//       try {
//         const response = await fetch('https://api.ipify.org?format=json');
//         const data = await response.json();
//         return data.ip; // Public IP address
//       } catch (error) {
//         console.error('Error fetching IP address:', error);
//       }
//     };

//     setHostname(getHostName());
//     getIPAddr().then((ip) => setIpAddress(ip));
//   }, []);

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <div className="h1 text-center text-lg text-yellow-500">Supriya's Website</div>
//         <div className="flex text-center justify-center text-justify">
//           <div className="flex-auto text-center align-center h1 text-lg whitespace-normal text-blue-200">{`Hostname:`} &nbsp;</div>
//           <div className="flex-auto text-center h1 text-lg text-blue-500">{hostname}</div>
//         </div>
//         <div className="flex text-center justify-center">
//           <div className="flex-auto text-center align-center h1 text-lg whitespace-normal text-orange-200">{`IP Address:`} &nbsp;</div>
//           <div className="flex-auto text-center h1 text-lg text-orange-500">{ipAddress}</div>
//         </div>
//       </main>
//     </div>
//   );
// }
