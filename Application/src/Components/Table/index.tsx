import * as React from 'react';
import { IStyle } from "fela";
import { createComponent } from "react-fela";
import { applyModifiers } from "../../Utils/Fela/Modifiers";
import { isNil } from 'lodash';
import { STATUS, Task } from "../../sections/App/Models/TaskStore";
import moment from 'moment';
import { SuccessButton } from "../Button";

const StyledTable = () : IStyle => ({
	width: '80%',
	marginTop: '10px',
	marginLeft: 'auto',
	marginRight: 'auto',
});
const FelaTable = createComponent(StyledTable, 'table');

type TableRowBaseProps = {
	header?: boolean;
};
const StyledTableRow = (props: TableRowBaseProps) : IStyle => applyModifiers(
	[!isNil(props.header), { borderBottom: 'solid 2px gray', fontSizeAdjust: 0.7 }]
)
({
	textAlign: 'left',
	lineHeight: '40px',
	paddingTop: '10px',
	borderBottom: 'solid 2px gray !important'
});
const FelaTableRow = createComponent(StyledTableRow, 'tr');

const StyledTableCell = () => ({});
const FelaTableCell = createComponent(StyledTableCell, 'td');

const StyledTableHeaderCell = () => ({});
const FelaTableHeaderCell = createComponent(StyledTableHeaderCell, 'th');

type TableProps = {
	columns: string[];
	tasks: Task[];
	completeTask: (task: Task) => void;
};

enum BUTTON_TYPE {
	SUCCESS = "Success", DANGER = "Danger"
}

type ButtonProps = {
	type: BUTTON_TYPE
};
const StyledButton = (props: ButtonProps): IStyle => applyModifiers(
		[props.type === BUTTON_TYPE.SUCCESS, {
			color: '#5EDEBC',
			borderColor: '#5EDEBC'
		}]
)
({
	width: '80px',
	height: '40px',
	border: '2px solid',
	borderColor: '#5EDEBC',
	borderRadius: '5px',
	padding: '4px 8px',
	alignSelf: "end",
});
const FelaButton = createComponent(StyledButton, 'span', props => Object.keys(props));

export const Table: React.FunctionComponent<TableProps> = ({ columns, tasks, completeTask }) => {
	const markAsComplete = (task: Task) => {
		const taskId = task.uuid;
		completeTask(task);
	};

	const renderRow = (task: Task, idx: number) => (
		<FelaTableRow key={idx}>
			<FelaTableCell colSpan={3}>
				{task.name}
			</FelaTableCell>
			<FelaTableCell>
				{moment.unix(task.created).format('L')}
			</FelaTableCell>
			<FelaTableCell>
				{task.status}
			</FelaTableCell>
			<FelaTableCell>
				{
					task.status !== STATUS.COMPLETED &&
				  <SuccessButton onClick={() => markAsComplete(task)}>
					  ✔
				  </SuccessButton>
				}

			</FelaTableCell>
		</FelaTableRow>
	);

	return(
		<FelaTable>
			<thead>
				<FelaTableRow header>
					{
						columns.map((col, idx) => <FelaTableHeaderCell key={idx}>{col}</FelaTableHeaderCell>)
					}
				</FelaTableRow>
			</thead>

			<tbody>
				{
					tasks.map((task, idx) => renderRow(task, idx))
				}
			</tbody>
		</FelaTable>
	);
};