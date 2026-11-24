import { useCallback, useEffect, useRef } from "react";

// Makes the phone back gesture close an overlay instead of leaving the page.
// Opening the overlay pushes one history entry. Closing it from the page removes that entry again, so the
// next back press leaves the page as usual. Use the returned requestClose for every in-page close action.
// Client-only: it reads window and history, so call it only from client components.
export function useBackToClose(onClose: () => void): () => void {
  const onCloseRef = useRef(onClose);
  // True while our history entry is on the stack.
  const entryActive = useRef(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    // Under React StrictMode this effect runs twice in dev; the ref makes sure only one entry is pushed.
    if (!entryActive.current) {
      window.history.pushState({ overlay: true }, "");
      entryActive.current = true;
    }

    // A popstate means the back gesture or back button ran, which already removed our entry (or the user
    // went back past it). Close the overlay and do not go back again.
    const onPop = () => {
      entryActive.current = false;
      onCloseRef.current();
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return useCallback(() => {
    if (entryActive.current) {
      // Remove our entry; onPop then closes the overlay.
      entryActive.current = false;
      window.history.back();
    } else {
      onCloseRef.current();
    }
  }, []);
}
