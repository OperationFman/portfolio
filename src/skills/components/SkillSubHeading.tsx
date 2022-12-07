export const SkillSubHeading = ({
	children,
	title,
	align = "justify-center",
}: {
	align?: string;
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className={`flex ${align}`}>
			<div className='flex flex-row mb-0'>
				<div className='mr-2 md:mr-5 md:ml-3'>{children}</div>
				<h1 className='mt-0 self-center'>{title}</h1>
			</div>
		</div>
	);
};
