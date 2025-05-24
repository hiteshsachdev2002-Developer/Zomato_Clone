import { useEffect, useState } from "react";
export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setIsOnline(false);
    })

    window.addEventListener("online", (event) => {
      setIsOnline(true);
    })
  }, [])

  return isOnline;
}