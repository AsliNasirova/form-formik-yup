import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css'

const initialValues = {
    email:'',
    lastname:'',
    username: '',
    password: '',
    // Əlavə fieldləri burada əlavə edə bilərsiniz
};

const validationSchema = Yup.object({
    username: Yup.string().min(3,"minimum 3 herf olmalidir.").max(15,"maximum 15 herf olmalidir.").required('İstifadəçi adını daxil edin.'),
    password: Yup.string().min(2,"minimum 2 herf olmalidir.").max(16,"maximum 16 simvol olmalidir.").required('Şifrəni daxil edin.'),
    lastname: Yup.string().min(7, "Minimum 4 herf olmalidir").max(17, "Maximum 17 herf olmalidir").required('Soyadi daxil edin '),
    email: Yup.string().min(6,"minimum 6 simvol olmalidir.").max(16,"maximum 16 simvol olmalidir.").required('Soyadinizi daxil edin.'),
    
    // Əlavə fieldlər üçün validasiya qaydalarını burada təyin edə bilərsiniz
});

const LoginForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        // Form submit zamanı ediləcək əməliyyatları burada yerinə yetirin.
        // Məsələn, LocalStorage-ə user məlumatlarını saxlamaq kimi.
        localStorage.setItem('user', JSON.stringify(values));

        // Form göndərildikdən sonra, submit düyməsini aktivləşdirmək üçün
        // formun yenidən yüklənməsini təmin edirik.
        window.location.reload();

        // Əgər form yenidən yüklənməsini istəmirsinizsə,
        // setSubmitting(false) əvəzinə digər bir logika əlavə edə bilərsiniz.
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="form">
                    <div >
                        <label htmlFor="username">İstifadəçi adı:</label>
                        <Field type="text" id="username" name="username" placeholder="İstifadəçi adı"/>
                        <span><ErrorMessage name="username"  /></span>
                    </div>

                    <div >
                        <label htmlFor="lastname">Soyad:</label>
                        <Field type="text" id="lastname" name="lastname" placeholder="Soyad"/>
                        <span><ErrorMessage name="lastname"  /></span>
                    </div>
                    <div>
                        <label htmlFor="password">Şifrə:</label>
                        <Field type="password" id="password" name="password" placeholder="Şifrə" />
                        <span><ErrorMessage name="password"  /></span>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" placeholder="Email"/>
                        <span><ErrorMessage name="email"  /></span>
                    </div>

                    {/* Əlavə fieldləri burada əlavə edə bilərsiniz */}

                    <button type="submit" disabled={false}>
                        SIGN UP
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default LoginForm;