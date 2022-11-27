import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

interface iData {
  email: string;
  id: string;
  name: string;
}

export const user = atom({
  key: "user",
  default: {} as iData,
  effects_UNSTABLE: [persistAtom],
});
