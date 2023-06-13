import { CreateUserForm } from "features/authentication";

const Users = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-5 mx-auto">
					<CreateUserForm />
				</div>
			</div>
		</div>
	);
};

export default Users;
