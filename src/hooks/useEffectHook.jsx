import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
   console.log("we ARE IN USE EFFECT")
    // Specify how to clean up after this effect:
    return function cleanup() {
      console.log("Done cleaning")
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus;