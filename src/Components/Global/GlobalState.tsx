import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

interface iData {
	email: string;
	id: string;
	name: string;
}

interface DecodeData {
	_id: string;
	name: string;
	email: string;
	companyToken: string;
	hub: [];
	staff: [];
	logo: string;
	verified: boolean;
	verifiedToken: string;
	status: string;
	createdAt: string;
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
