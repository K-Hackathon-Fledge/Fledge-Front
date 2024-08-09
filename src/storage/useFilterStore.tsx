import create from "zustand";
import { devtools } from "zustand/middleware";
type FilterState = {
  keyword: string;
  status: string;
  checkedCategories: string[]; // Update to string array
  setKeyword: (keyword: string) => void;
  setStatus: (status: string) => void;
  setCheckedCategories: (categories: string[]) => void; // Update parameter type
  resetFilters: () => void;
};

const initialCategories = [
  "DAILY_NECESSITY",
  "FOOD",
  "HOME_APPLIANCES",
  "EDUCATION",
  "MEDICAL",
  "LEGAL_AID",
  "ETC",
];
const useFilterStore = create<FilterState>()(
  devtools((set, get) => ({
    keyword: "",
    status: "ing",
    checkedCategories: initialCategories,
    setKeyword: (keyword) => set({ keyword }),
    setStatus: (status) => set({ status }),
    setCheckedCategories: (categories) =>
      set({ checkedCategories: categories }),
    resetFilters: () => {
      const { keyword, status } = get();
      set({
        keyword,
        status,
        checkedCategories: initialCategories,
      });
    },
  }))
);

export default useFilterStore;
