import Button from "./Button";
import {useDispatch, useSelector} from 'react-redux';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { updateProfilUser } from "../Store/actions/Users";

const ProfilHeader = ()=>{
  const users = useSelector((state)=>(state.users.data));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)


    
    return(
      
     <div className="header">
       {showModal ? 
       <>
      <h1>Welcome back</h1>
      <Formik 
             initialValues={{ firstName: `${users.firstName}`,lastName:`${users.lastName}` }}
             validationSchema={yup.object({
               firstName:yup.string()
                  .required("firstName is required!")
                  .matches(/^[aA-zZ\s]+$/, 'Please enter valid firstName')
                  .max(30),
               lastName:yup.string()
               .required("lastName is required")
               .matches(/^[aA-zZ\s]+$/, 'Please enter valid lastName')
               .max(30) 
             })}
             onSubmit={(values, { setSubmitting }) => {
            const userData= {token:users.token, values}
             dispatch(updateProfilUser(userData))
              setSubmitting(false)
              setShowModal(false)
               
             }}>
         {({ isSubmitting }) => (       
       <Form>
         <div>
         <Field type="text" id="firstName" name="firstName" />
         <ErrorMessage name="lastName" component="div" style={{color: "red"}} />
         <Field type="text" id="lastName" name="lastName"/>
         <ErrorMessage name="lastName" component="div" style={{color: "red"}} />
         </div>

         <div>
           <Button value="edit-button" typeOfBtn="submit" disabled={isSubmitting}>Save</Button> 
           <Button value="edit-button" onClick={()=>setShowModal(!showModal)}>Cancel</Button> 
         </div>
       
       </Form>
        )}
      </Formik>
      
              
     
       </> 
       :
       <>
       <h1>Welcome back<br />
        {users.firstName} {users.lastName}!</h1>
        <Button value="edit-button" onClick={()=>setShowModal(!showModal)}>Edit Name</Button> 
       </> 
      } 
    </div>
    

    )
}

export default ProfilHeader;