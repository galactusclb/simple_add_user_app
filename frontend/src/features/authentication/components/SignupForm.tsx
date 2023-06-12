import React from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import useAuth from "../hooks/useAuth";

import { constants } from "utils/constants";

type Inputs = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

const SignupForm = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const { signup } = useAuth();

	const onSubmit: SubmitHandler<Inputs> = (data) => signup(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row mb-3">
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
								message: "User name is required",
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
						id="firstName1"
						aria-describedby="firstNameHelp"
						{...register("firstName", {
							required: {
								value: true,
								message: "User name is required",
							},
						})}
					/>
					{errors.firstName && (
						<span role="alert">{errors.firstName.message}</span>
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
				{errors.password && <span>{errors?.password?.message}</span>}
			</div>
			<button type="submit" className="btn btn-primary">
				Register
			</button>

			<a className="link ms-2" onClick={() => navigate("/login")}>
				Have an account ? Login
			</a>
		</form>
	);
};

export default SignupForm;
