import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import {
	getNotesAll,
	getNotesId,
	putNoteFix,
} from '../../../../services/useEndpoints'
import InputField from '../../../ui/Field/InputField/inputField'
import TextAreaField from '../../../ui/Field/TextField/TextField'
type Inputs = {
	titleField: string
	textField: string
}

const NoteViewForm: FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { refetch } = useQuery([`getNotes`], getNotesAll)
	const { data: dataNote } = useQuery([`NotesId${id}`], () =>
		getNotesId(Number(id))
	)
	const [isFixed, setIsFixed] = useState(true)
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			titleField: dataNote && dataNote?.title,
			textField: dataNote && dataNote?.text,
		},
	})
	const onSubmit: SubmitHandler<Inputs> = async data => {
		const title = data.titleField
		const text = data.textField
		const proId = Number(id)
		await putNoteFix(proId, title, text)
		refetch()
		navigate('/')
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div className='w-full mb-[20px]'>
						<Controller
							name='titleField'
							control={control}
							rules={{
								required: 'Поле обязательно для заполнения',
								min: {
									value: 3,
									message: 'Данное поле некорректно заполнено',
								},
							}}
							render={({ field }) => (
								<InputField
									{...field}
									placeholder={'title'}
									className='shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5'
									error={errors?.titleField}
									value={dataNote && isFixed ? dataNote?.title : field.value}
									disabled={isFixed}
								/>
							)}
						/>
					</div>
					<div className='w-full mb-[20px]'>
						<Controller
							name='textField'
							control={control}
							rules={{
								required: 'Поле обязательно для заполнения',
								min: {
									value: 3,
									message: 'Данное поле некорректно заполнено',
								},
							}}
							render={({ field }) => (
								<TextAreaField
									{...field}
									placeholder={'text'}
									className='shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5'
									error={errors?.textField}
									value={dataNote && isFixed ? dataNote?.text : field.value}
									disabled={isFixed}
								/>
							)}
						/>
					</div>
					<div className='w-full text-center'>
						{!isFixed && (
							<button className='bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded'>
								Отправить
							</button>
						)}
					</div>
				</div>
			</form>

			<div className='w-full text-center'>
				{isFixed && (
					<button
						className='bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded'
						onClick={() => setIsFixed(false)}
					>
						Редактировать
					</button>
				)}
			</div>
		</>
	)

	return <></>
}

export default NoteViewForm
