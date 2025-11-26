import { useCallback, useMemo, useState } from "react";

/**
 * useSelection - simple hook to manage a set/array of selected IDs.
 *
 * - toggle(id) will add id if not present, remove if present
 * - set(ids) will replace the selection
 * - clear() empties it
 * - isSelected(id) checks membership
 *
 * Keeps ids in insertion order (array) but deduplicates.
 */
export default function useSelection<T extends string | number>(initial: T[] = []) {
  const [selected, setSelected] = useState<T[]>(() => {
    // ensure no duplicates on init
    return Array.from(new Set(initial));
  });

  const isSelected = useCallback(
    (id: T) => selected.indexOf(id) !== -1,
    [selected]
  );

  const toggle = useCallback((id: T) => {
    setSelected((prev) => {
      const idx = prev.indexOf(id);
      if (idx === -1) return [...prev, id];
      // remove id
      const copy = prev.slice();
      copy.splice(idx, 1);
      return copy;
    });
  }, []);

  const add = useCallback((id: T) => {
    setSelected((prev) => (prev.indexOf(id) === -1 ? [...prev, id] : prev));
  }, []);

  const remove = useCallback((id: T) => {
    setSelected((prev) => prev.filter((x) => x !== id));
  }, []);

  const set = useCallback((ids: T[]) => {
    setSelected(Array.from(new Set(ids)));
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  const count = selected.length;

  const asSet = useMemo(() => new Set(selected), [selected]);

  return {
    selected,
    isSelected,
    toggle,
    add,
    remove,
    set,
    clear,
    count,
    asSet,
  } as const;
}
