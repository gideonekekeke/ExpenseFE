import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

interface iData {
  email?: string;
  id?: string;
  name?: string;
}

interface iSales {
  id?: number;
  item?: string;
  status?: string;
  cost?: number;
}

interface DecodeData {
  _id?: string;
  name?: string;
  email?: string;
  companyToken?: string;
  logo?: string;
  verified?: boolean;
  verifiedToken?: string;
  status?: string;
  createdAt?: string;
}

export const user = atom({
  key: "user",
  default: {} as iData | null,
  effects_UNSTABLE: [persistAtom],
});

export const userDecode = atom({
  key: "userDecode",
  default: {} as DecodeData | null,
  effects_UNSTABLE: [persistAtom],
});

export const salesData = atom({
  key: "salesData",
  default: [] as Array<iSales> | null,
  effects_UNSTABLE: [persistAtom],
});

export const expenseData = atom({
  key: "expenseData",
  default: [] as Array<iSales> | null,
  effects_UNSTABLE: [persistAtom],
});

export const salesReport = atom({
  key: "salesReport",
  default: [] as Array<iSales> | null,
  effects_UNSTABLE: [persistAtom],
});

export const totalReport = atom({
  key: "totalReport",
  default: [] as Array<iSales> | null,
  effects_UNSTABLE: [persistAtom],
});
