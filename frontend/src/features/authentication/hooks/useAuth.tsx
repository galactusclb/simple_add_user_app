import { useState } from "react";

import { handleError } from "utils/errorHandler";

import useToast from "hook/useToast";

import { doCreateUser } from "../services/auth.service";

const useAuth = (reset: () => void) => {
	const { notify } = useToast();

	const [isLoading, toggleLoading] = useState<boolean>(false);

	const createUser = async (payload: any) => {
		toggleLoading(true);
		const response = await doCreateUser(payload);
		toggleLoading(false);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}
		console.log(response);

		reset();
		notify("success");
	};

	return {
		isLoading,
		createUser,
	};
};

export default useAuth;
