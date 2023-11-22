'use client'

import { useFormik } from "formik";
import { basicSchema } from "@/scripts/schemas";
import style from './authorizer/Authorizer.module.css'
import { useRouter } from "next/navigation";
import { error } from "console";


export default function Authorizer() {

    const router = useRouter();

    const onSubmit = () => {
      router.push('/student')
    }

    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            login:'',
            password: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    console.log(errors);

  return (
    <div className={style.wrapper}>
        <form onSubmit={handleSubmit} autoComplete='off' className={style.container}>
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>

            <input
                style={errors.login && touched.login && {border: '2px solid red'}}
                value={values.login} 
                onChange={handleChange}
                onBlur={handleBlur}
                id="login" type="text" 
                className={style.input} 
                placeholder='Телефон / email'
            />
            {errors.login && touched.login && <div className={style.error___message}>{errors.login}</div>}

            <input
                style={errors.password && touched.password && {border: '2px solid red'}}
                value={values.password} 
                onChange={handleChange}
                onBlur={handleBlur}
                id="password" 
                className={style.input} 
                type='password'
                placeholder='Пароль'
            />
            {errors.password && touched.password && <div className={style.error___message}>Длинна пароля не менее 8 символов</div>}

            <button className={style.restore}>Восстановить пароль</button>
            <button type='submit' className={style.button}>Войти</button>
        </form>
    </div>
  )
}
