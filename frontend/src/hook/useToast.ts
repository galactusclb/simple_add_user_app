import { toast } from "react-toastify";

// const getIcon = (type) => {
//     switch (type) {
//         case "success":
//             return "/images/svg/alert/tick-circle-green.svg"
//         case "error":
//             return "/images/svg/alert/info-circle-red.svg"
//         case "warning":
//             return "/images/svg/alert/danger-yellow.svg"
//         default:
//             return "/images/svg/alert/tick-circle-green.svg"
//     }
// }
type ToastType = "info" | "success" | "warning" | "error";

const useToast = () => {
	const notify = (type: ToastType, title: string = "🦄 Wow so easy!") => {
		toast[type](title, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		// notification[type]({
		//     message: title,
		//     description: message,
		//     placement: 'topRight',
		//     duration: 2.5,
		//     icon: (
		//         <img src={getIcon(type)} alt="" />
		//     ),
		//     closeIcon: (
		//         <i className="n-icon n-icon-close-square" />
		//     ),

		// });
	};

	return { notify };
};

export default useToast;
