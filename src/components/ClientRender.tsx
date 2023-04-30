import { useEffect, useState } from "react";

interface IClientRenderProps {
	children?: React.ReactElement;
}

function ClientRender({ children, ...rest }: IClientRenderProps) {
	const [hasMounted, setHasMounted] = useState<boolean>(false);

	useEffect(() => {
		if (!hasMounted) setHasMounted(true);
	}, []);

	if (!hasMounted) return null;
	return <div {...rest}>{children}</div>;
}

export default ClientRender;
