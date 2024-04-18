import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
	} = useSettings();
	const { isUpdating, updateSetting } = useUpdateSetting();

	function handleUpdate(e, field) {
		const { value } = e.target;

		if (!value) return;
		updateSetting({ [field]: value });
	}

	if (isLoading) return <Spinner />;

	return (
		<Form>
			<FormRow label="Minimum number of members">
				<Input
					type="number"
					id="min-nights"
					defaultValue={minBookingLength}
					disabled={isUpdating}
					onBlur={e => handleUpdate(e, 'minBookingLength')}
				/>
			</FormRow>

			<FormRow label="Maximum number of members">
				<Input
					type="number"
					id="max-nights"
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					onBlur={e => handleUpdate(e, 'maxBookingLength')}
				/>
			</FormRow>

		
		</Form>
	);
}

export default UpdateSettingsForm;
