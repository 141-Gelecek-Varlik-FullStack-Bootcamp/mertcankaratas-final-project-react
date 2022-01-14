import { useField } from 'formik'
import React from 'react'
import { Form, FormField,Label } from 'semantic-ui-react';

export default function ApartmentPasswordInput({ ...props }) {
    //console.log(props)
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                {/* <input type="password" {...field} {...props}></input> */}
                <Form.Input fluid type='password'  icon='lock' iconPosition='left' {...field} {...props} ></Form.Input>
                {meta.touched && !!meta.error ? (
                    <Label pointing basit color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
