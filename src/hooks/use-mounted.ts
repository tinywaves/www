import { useEffect, useState } from 'react';

export default function useMounted() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
  useEffect(() => setMounted(true), []);

  return mounted;
}
