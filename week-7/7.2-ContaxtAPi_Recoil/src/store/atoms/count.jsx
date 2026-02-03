import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",  // ✅ Unique key (keep it lowercase and descriptive)
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",  // ✅ Unique key for Recoil
  get: ({ get }) => {   // ✅ `get` is used to read atom values
    const count = get(countAtom);  // ✅ Reads value from countAtom
    return count % 2;  // ✅ Returns 0 if even, 1 if odd
  }
});


// It reads countAtom using get(countAtom).
// It checks if count is even or odd (count % 2).
// If count is even, it returns 0.
// If count is odd, it returns 1.
// If countAtom changes, evenSelector automatically updates.

// ✅ evenSelector depends on countAtom.
// ✅ When countAtom changes, evenSelector automatically recalculates its value.
// ✅ It tells whether countAtom is even (0) or odd (1).