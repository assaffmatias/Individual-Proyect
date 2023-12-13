import { useEffect, useState } from 'react';
import style from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTeams, postDriver } from '../../redux/actions';
import swal from 'sweetalert'

const Form = () => {

    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams())
    }, [])

    const [form, setForm] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: [],
    })

    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: '',
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (property === "teams") {
            // Verifica si el valor ya está presente en el array
            const teamId = Number(value);
            if (form.teams.includes(teamId)) {
                // Si ya está presente, elimínalo del array
                const updatedTeams = form.teams.filter((team) => team !== teamId);
                setForm({ ...form, [property]: updatedTeams });
            } else {
                // Si no está presente, agrégalo al array
                setForm({ ...form, [property]: [...form.teams, teamId] });
            }
        } else {
            validate({ ...form, [property]: value });
            setForm({ ...form, [property]: value });
        }
    };

    const validate = (form) => {
        const isNameValid = /^[a-zA-Z]+$/.test(form.name);
        const isSurnameValid = /^[a-zA-Z]+$/.test(form.surname);

        setErrors({
            ...errors,
            name: isNameValid ? '' : 'Nombre incorrecto',
            surname: isSurnameValid ? '' : 'Apellido incorrecto'
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        await dispatch(postDriver(form))
        swal("Driver Created!", "Click the OK button", "success");
    }

    return (
        <form onSubmit={submitHandler}>

            <div className={style.form}>
                <div className={style.content}>
                    <input type="text" value={form.name} onChange={changeHandler} name='name' className={style.input} placeholder='Name' />
                </div>

                <div className={style.content}>
                    <input type="text" value={form.surname} onChange={changeHandler} name='surname' className={style.input} placeholder='Last name' />
                </div>

                <div className={style.content}>
                    <input type="text" value={form.nationality} onChange={changeHandler} name='nationality' className={style.input} placeholder='Nationality' />
                </div>

                <div className={style.content}>
                    <input type="text" value={form.image} onChange={changeHandler} name='image' className={style.input} placeholder='https://url.com/image.jpg' />
                </div>

                <div className={style.content}>
                    <input type="text" value={form.description} onChange={changeHandler} name='description' className={style.input} placeholder='Description' />
                </div>

                <div className={style.content}>
                    <input type="date" value={form.dob} onChange={changeHandler} name='dob' className={style.input} />
                </div>

                <button type="submit" className={style.button}>Create</button>
            </div>

            <div className={style.divSelect}>

                <select name="teams" id="" value={form.teams} onChange={changeHandler} multiple className={style.select}>

                    {teams.map((team) => (
                        <option key={team.id} value={team.id} className={style.option}>

                            {team.name}

                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Form;

