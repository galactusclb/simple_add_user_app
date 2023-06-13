import { useState } from "react";

import { handleError } from "utils/errorHandler";

import useToast from "hook/useToast";

import { doCreateUser } from "../services/user.service";

const useUser = (reset: () => void) => {
	const { notify } = useToast();

	const [isLoading, toggleLoading] = useState<boolean>(false);

	const createUser = async (payload: any) => {
		toggleLoading(true);
		const response = await doCreateUser(payload);
		toggleLoading(false);

		console.log(response);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		reset();
		notify("success", response?.data?.message);
	};

	return {
		isLoading,
		createUser,
	};
};

export default useUser;
