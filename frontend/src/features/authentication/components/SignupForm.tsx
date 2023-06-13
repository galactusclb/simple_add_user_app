import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import useAuth from "../hooks/useAuth";

import { constants } from "utils/constants";
import { Button } from "@components/ui/button/Button";

type Inputs = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<Inputs>({
		mode: "onChange",
	});

	const { isLoading, createUser } = useAuth(reset);

	const onSubmit: SubmitHandler<Inputs> = (data) => createUser(data);

	return (
		<div className="form-wrapper px-4 py-5">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="form-title">Create New User</h1>

				<div className="row mb-3 mt-4">
					<div className="col-lg-6">
						<label htmlFor="userName1" className="form-label">
							First name
						</label>
						<input
							type="text"
							className="form-control"
							id="firstName1"
							aria-describedby="firstNameHelp"
							{...register("firstName", {
								required: {
									value: true,
									message: "First name is required",
								},
							})}
						/>
						{errors.firstName && (
							<span role="alert">{errors.firstName.message}</span>
						)}
					</div>
					<div className="col-lg-6">
						<label htmlFor="userName1" className="form-label">
							Last name
						</label>
						<input
							type="text"
							className="form-control"
							id="lastName1"
							aria-describedby="lastNameHelp"
							{...register("lastName", {
								required: {
									value: true,
									message: "Last name is required",
								},
							})}
						/>
						{errors.lastName && (
							<span role="alert">{errors.lastName.message}</span>
						)}
					</div>
				</div>

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						{...register("email", {
							required: {
								value: true,
								message: "Email is required",
							},
							pattern: {
								value: constants.REGEX_PATTERNS?.EMAIL_REGEX,
								message: "Entered email does not match email format",
							},
						})}
					/>
					{errors.email && <span role="alert">{errors.email.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						{...register("password", {
							required: {
								value: true,
								message: "Password is required",
							},
							pattern: {
								value: constants.REGEX_PATTERNS?.PASSWORD_REGEX,
								message: "Password is not valid",
							},
						})}
					/>
					{errors.password && (
						<span role="alert">{errors?.password?.message}</span>
					)}
				</div>

				<div className="d-flex flex-row justify-content-end mt-4">
					<Button
						type="reset"
						className="btn"
						variant={"link"}
						onClick={() => reset()}
					>
						Reset
					</Button>
					<Button
						type="submit"
						className="btn btn-primary ms-2"
						disabled={isLoading}
						isLoading={isLoading}
					>
						Create new user
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
