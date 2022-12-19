import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button, DialogActions, DialogTitle, Divider } from "@mui/material";

export const SkillModal = () => {
	return (
		<div className='mt-2 mb-4 md:m-4 md:mt-3'>
			<DialogTitle>
				<div className='flex justify-between items-center'>
					<h3 className='m-0 font-bold'>Typescript</h3>
					<CloseRoundedIcon color='disabled' />
				</div>
			</DialogTitle>
			<Divider />
			<div className='ml-12 mr-12 mb-14'>
				<p>
					I have used TypeScript professionally for several years and have
					become very comfortable with it. TypeScript has allowed me to write
					more reliable and maintainable code by providing static type checking
					and other features such as interfaces and classes. It has also made it
					easier for me to work with large codebases by providing better tooling
					support, such as code completion and refactoring.
				</p>
				<Divider />
				<div className='flex'>
					<h3>Knowledge:</h3>
					<h3 className='ml-4 font-normal'>Highly Proficient</h3>
				</div>
				<Divider />
				<p>
					Can lead pairing on a project no matter who their pair is. Very
					comfortable in the environment and can teach others at different skill
					levels and in different project situations.
				</p>
			</div>
		</div>
	);
};
