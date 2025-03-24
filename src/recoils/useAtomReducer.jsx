import { useRecoilCallback } from 'recoil';
import { selectedFieldState, subjectsInFieldState } from './atoms';

function useAtomActionDispatcher() {
	const dispatch = useRecoilCallback(
		({ set }) =>
			(action) => {
				switch (action.type) {
					case 'clickMiddle':
						set(selectedFieldState, { middleField: action.field });
						set(subjectsInFieldState, []);
						break;
					case 'clickSmall':
						set(selectedFieldState, (prevState) => ({
							...prevState,
							smallField: action.field
						}));
						set(subjectsInFieldState, []);
						break;
					case 'clickDetail':
						set(selectedFieldState, (prevState) => ({
							...prevState,
							detailField: action.field
						}));
						break;
					default:
						break;
				}
			},
		[]
	);

	return { dispatch };
}

export default useAtomActionDispatcher;
