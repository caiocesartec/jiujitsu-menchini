// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { navOptions } from "@/data/navOptions";

const Menu = () => {
	return (
		<>
			{navOptions.map((option) => (
				<li key={option.path} >
					<Link key={option.path} href={option.path}>
						{option.label}
					</Link>
				</li>
			))}
		</>
	);
};

export default Menu;
