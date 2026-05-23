import { useSelector } from 'react-redux'
import s from './TaskCounter.module.css'
import { selectTaskCount } from '../../redux/selectors'

export const TaskCounter = () => {
    const { completed, active } = useSelector(selectTaskCount);

    return (
        <div>
            <p className={s.text}>Active: {active}</p>
            <p className={s.text}>Completed: {completed}</p>
        </div>
    )
}