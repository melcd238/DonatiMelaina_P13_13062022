import Button from "../Components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux'

import { loginUser } from '../Store/actions/Users';
import { Loader } from '../Utils/Tools'


const SignIn =()=>{
  // Redux Logic
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch();

    return(
        <main className="main bg-dark">

        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
        
        {users.loading ? 
        
        <Loader/>

        :

        <Formik 
            initialValues={{ email: '', password: '', remember:false }}
            validationSchema={yup.object({
              email:yup.string()
                 .required("Email is required!")
                 .email('Needs to be an email'),
              password:yup.string()
              .required("Password is required")  
            })}
            onSubmit={(values, { setSubmitting }) => {
             dispatch(loginUser(values))
             setSubmitting(false)
              
            }}
           >
          {({ isSubmitting }) => (
          <Form>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" style={{color: "red"}} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password"/>
              <ErrorMessage name="password" component="div" style={{color: "red"}} />
            </div>
            <div className="input-remember">
              <Field type="checkbox" id="remember"  name="remember"/>
              <label htmlFor="remember">Remember me</label >
            </div>
           
            
            
             <Button value="sign-in-button" typeOfBtn="submit" disabled={isSubmitting}>Sign In</Button> 
        
          </Form>
           )}
          </Formik>
}
        </section>
      </main>
    )
}

export default SignIn;