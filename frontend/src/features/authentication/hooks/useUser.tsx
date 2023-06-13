import { useState } from "react";

import useToast from "hook/useToast";

import { doCreateUser } from "../services/user.service";
import useErrorHandler from "hook/useErrorHandler";

const useUser = (reset: () => void) => {
	const { notify } = useToast();
	const { handleError } = useErrorHandler();

	const [isLoading, toggleLoading] = useState<boolean>(false);

	const createUser = async (payload: any) => {
		toggleLoading(true);
		const response = await doCreateUser(payload);
		toggleLoading(false);

		console.log(response);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.code, error?.message);
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
